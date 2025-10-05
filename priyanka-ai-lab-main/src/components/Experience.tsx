import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Summer AI Intern",
    company: "Viswam.ai (IIT Hyderabad)",
    duration: "Aug - Sep 2025",
    location: "Remote, Bangalore",
    description: [
      "Contributed to building Indic AI datasets and gained hands-on exposure to LLM fine-tuning",
      "Applied prompt engineering techniques for model evaluation pipelines",
      "Worked on AI model evaluation and optimization"
    ],
    tech: ["Python", "AI", "LLMs", "Prompt Engineering"]
  },
  {
    role: "Cohort-Based Intern",
    company: "Infosys Springboard",
    duration: "Sep 2024 - Feb 2025",
    location: "Remote, Bangalore",
    description: [
      "Completed structured training in Python, web development, and AI fundamentals",
      "Applied skills in collaborative mini-projects and hands-on exercises",
      "Developed full-stack applications with modern tech stacks"
    ],
    tech: ["Python", "Web Development", "AI Tools"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover-lift">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg glow-effect">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-accent" />
                  {exp.duration}
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
