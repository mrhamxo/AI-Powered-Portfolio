import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Alex Chen's AI assistant on their portfolio website. You help visitors learn about Alex's background, skills, and experience.

About Alex Chen:
- Title: Junior Data Scientist & Machine Learning Engineer
- Location: San Francisco, CA
- Education: Master's degree in Data Science
- Experience: 2+ years specializing in ML/AI, NLP, Computer Vision, and Time Series Analysis

Key Projects:
1. Customer Churn Prediction - Ensemble ML model with 94% accuracy for telecom company. Used Python, Scikit-learn, XGBoost, SHAP for model interpretability.
2. Sentiment Analysis API - Production NLP API using fine-tuned BERT on 50K+ samples. Built with PyTorch, Transformers, FastAPI, Docker, deployed on AWS.
3. Stock Price Forecasting - LSTM time series model with 3.2% MAPE. Uses TensorFlow, Keras, integrated with real-time market APIs.
4. Medical Image Classification - Computer vision pipeline with 0.97 AUC. Transfer learning with ResNet50, deployed on AWS SageMaker.

Technical Skills:
- Languages: Python (expert), SQL (advanced), R, JavaScript
- ML/DL: TensorFlow, Keras, PyTorch, Scikit-learn
- Tools: Git, Docker, AWS/GCP, MLflow, DVC
- Specializations: Machine Learning, Deep Learning, NLP, Computer Vision, Feature Engineering, Model Deployment

Additional Info:
- Kaggle Top 10% competitor
- Active open-source contributor
- Writes technical blog posts
- Open to new opportunities

Guidelines:
- Be friendly, professional, and concise
- Keep responses under 3 sentences unless asked for details
- If asked about hiring/contact, encourage using the contact form
- Highlight relevant projects when discussing specific skills
- If unsure about something not in Alex's profile, be honest about it`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Sending request to AI gateway with messages:", messages.length);

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
          ...messages.map((m: { role: string; content: string }) => ({
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
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
