import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

function getClientIP(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
         req.headers.get("x-real-ip") || 
         "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  record.count++;
  return false;
}

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW_MS);

const SYSTEM_PROMPT = `You are Muhammad Hamza's AI assistant on his portfolio website. You help visitors learn about Hamza's background, skills, and experience.

About Muhammad Hamza:
- Title: Generative AI Developer & LLM Specialist
- Location: Oakville, ON, Canada
- Education: MS Data Science from Pak-Austria Fachhochschule (2023-2025), BS Software Engineering from Islamia College University (2018-2022)
- Experience: 2+ years specializing in Generative AI, RAG Systems, LLMs, Deep Learning, and NLP

Key Projects:
1. LangGraph-Powered Agentic Chatbot - Built intelligent multi-agent chatbot with dynamic task switching using LangGraph, FastAPI, Streamlit, Groq API. Handles 100+ concurrent conversations.
2. Modular RAG-Powered PDF Chatbot - Enterprise-grade RAG system for multi-PDF Q&A using FastAPI, ChromaDB, LLaMA-3, LangChain. Reduced document analysis time by 60%.
3. Intelligent Log Message Classification - Hybrid system combining Regex, BERT, LLaMA-3 achieving 92% accuracy, processes 10,000+ logs/hour.
4. AI-Based Disease & Treatment Advisor - ML healthcare assistant with 89% diagnostic accuracy across 40+ conditions using Scikit-learn and Streamlit.

Technical Skills:
- Languages: Python (NumPy, Pandas, Scikit-learn, TensorFlow, Keras), SQL
- Generative AI: RAG Systems, LangChain, LangGraph, Prompt Engineering, Transformer Models (BERT, GPT, LLaMA)
- ML/DL: TensorFlow, Keras, PyTorch, Scikit-learn, CNNs, RNNs, LSTMs
- NLP: NLTK, SpaCy, Hugging Face Transformers, Text Mining, Sentiment Analysis
- Tools: FastAPI, Streamlit, Docker, Git/GitHub, Jupyter, VS Code
- Cloud: Familiar with AWS, GCP, Azure

Work Experience:
- ML Engineer at ITSOLERA (Nov 2022 - Feb 2025): Improved classification accuracy by 18%, built data pipelines, optimized CNN architectures
- Web Developer Intern at National Center of AI (Feb 2022 - Nov 2022): Built smart parking system, weather forecasting app, created 10,000+ image datasets

Certifications: Generative AI Application Developer (2025), Generative AI Engineering with LLMs (2024), AI for Medicine (2024), Google Data Analytics (2023)

Guidelines:
- Be friendly, professional, and concise
- Keep responses under 3 sentences unless asked for details
- If asked about hiring/contact, encourage using the contact form or email at mr.hamxa942@gmail.com
- Highlight relevant projects when discussing specific skills
- If unsure about something not in Hamza's profile, be honest about it`;

// Input validation constants
const MAX_MESSAGE_LENGTH = 2000;
const MAX_MESSAGES = 20;

interface ChatMessage {
  role: string;
  content: string;
}

function validateMessages(input: unknown): { valid: boolean; error?: string; messages?: ChatMessage[] } {
  if (!Array.isArray(input) || input.length === 0) {
    return { valid: false, error: "Invalid messages format" };
  }

  const messagesToValidate = input.length > MAX_MESSAGES ? input.slice(-MAX_MESSAGES) : input;

  for (const msg of messagesToValidate) {
    if (typeof msg !== "object" || msg === null) {
      return { valid: false, error: "Invalid message object" };
    }
    const msgObj = msg as Record<string, unknown>;
    if (typeof msgObj.role !== "string" || !["user", "assistant", "system"].includes(msgObj.role)) {
      return { valid: false, error: "Invalid message role" };
    }
    if (typeof msgObj.content !== "string") {
      return { valid: false, error: "Invalid message content type" };
    }
    if (msgObj.content.length > MAX_MESSAGE_LENGTH) {
      return { valid: false, error: `Message exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters` };
    }
  }

  return { valid: true, messages: messagesToValidate as ChatMessage[] };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Rate limiting check
  const clientIP = getClientIP(req);
  if (isRateLimited(clientIP)) {
    console.log(`Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ error: "Too many requests. Please wait a moment and try again." }),
      { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await req.json();
    
    // Input validation
    const validation = validateMessages(body.messages);
    if (!validation.valid) {
      console.log(`Invalid input: ${validation.error}`);
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const messages = validation.messages!;
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log(`Processing request from IP: ${clientIP}, messages: ${messages.length}`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m: ChatMessage) => ({
            role: m.role,
            content: m.content,
          })),
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const assistantResponse = data.choices?.[0]?.message?.content || "I couldn't generate a response.";

    console.log("AI response received successfully");

    return new Response(
      JSON.stringify({ response: assistantResponse }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in portfolio-chat:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
