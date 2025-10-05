import { Card } from "@/components/ui/card";
import { Code2, Brain, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "HTML/CSS", "SQL", "TypeScript"]
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["LLMs", "NLP", "Deep Learning", "Computer Vision", "RAG", "Prompt Engineering", "Multi-Agent Systems", "GenAI"]
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    skills: ["React", "Node.js", "FastAPI", "LangChain", "TensorFlow", "Gemini AI", "Git"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "SQL", "PostgreSQL"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Technologies and tools I work with
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg glow-effect">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105 text-foreground rounded-md text-sm font-medium cursor-default"
                  >
                    {skill}
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

export default Skills;
