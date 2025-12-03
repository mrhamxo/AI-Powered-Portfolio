import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Award } from "lucide-react";
import { developerInfo, experience, education } from "@/data/portfolioData";

export const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "M.S. Data Science",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "2+ Years ML/AI",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "5+ AI/ML Certs",
    },
    {
      icon: MapPin,
      title: "Location",
      description: developerInfo.location,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              
              <div className="relative bg-card border border-border rounded-2xl p-8 text-center">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold font-display text-primary-foreground">
                  MH
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-2">
                  {developerInfo.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {developerInfo.title}
                </p>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {highlights.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-3 rounded-lg bg-secondary/50"
                    >
                      <item.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <div className="text-xs text-muted-foreground">{item.title}</div>
                      <div className="text-sm font-medium">{item.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="space-y-6">
              {developerInfo.bio.split("\n\n").map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph.trim()}
                </motion.p>
              ))}
            </div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-lg font-bold font-display mb-4 gradient-text">Experience</h3>
              <div className="space-y-4">
                {experience.map((exp, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-4">
                    <div className="font-semibold">{exp.title}</div>
                    <div className="text-sm text-primary">{exp.company} • {exp.period}</div>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      {exp.highlights.slice(0, 2).map((h, j) => (
                        <li key={j}>• {h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-lg font-bold font-display mb-4 gradient-text">Education</h3>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div key={i} className="border-l-2 border-accent/30 pl-4">
                    <div className="font-semibold">{edu.degree}</div>
                    <div className="text-sm text-muted-foreground">{edu.school}</div>
                    <div className="text-xs text-primary">{edu.period}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border"
            >
              <div className="text-center">
                <div className="text-3xl font-bold font-display gradient-text">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-display gradient-text">10+</div>
                <div className="text-sm text-muted-foreground">ML Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-display gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
