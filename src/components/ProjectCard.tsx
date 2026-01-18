import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectMetrics {
  [key: string]: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
  metrics: ProjectMetrics;
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  github,
  demo,
  metrics,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(187_100%_50%/0.15)]">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-6">
          {/* Project Number */}
          <div className="absolute top-4 right-4 font-display text-5xl font-bold text-primary/10">
            0{index + 1}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold font-display mb-3 group-hover:gradient-text transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-4 mb-4">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-primary font-display">
                  {value}
                </div>
                <div className="text-xs text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
