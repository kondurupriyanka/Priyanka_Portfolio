import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Travel Buddy",
    description: "An AI-powered travel planning assistant that helps users discover destinations, plan itineraries, and get personalized travel recommendations using advanced AI algorithms.",
    tech: ["React", "AI/ML", "TypeScript", "API Integration"],
    status: "completed",
    link: "https://ai-travel-buddy-companion.vercel.app/",
    github: ""
  },
  {
    title: "AI Research Assistant",
    description: "Built an AI multi-agent system to plan, research, and synthesize topics into polished reports. Engineered planner, researcher, and synthesizer agents for accurate, structured information retrieval.",
    tech: ["Python", "Gemini AI", "Multi-Agent Systems", "NLP"],
    status: "completed",
    link: "https://ai-research-assistant-saas-56pz.vercel.app/",
    github: ""
  },
  {
    title: "AI Ethics & Bias Auditor",
    description: "Built a RAG-powered web AI auditor to detect ethical risks and biases in datasets and model outputs. Applied LangChain for real-time NLP analysis, identifying gender, racial, and language biases with actionable insights.",
    tech: ["Python", "RAG", "LangChain", "AIML", "NLP"],
    status: "completed",
    link: "https://ai-ethics-bias-auditor-analayzer.vercel.app/",
    github: ""
  },
  {
    title: "AI-Based Medicinal Plant Identifier",
    description: "Developed a generative AI model to classify 300+ medicinal plant species from images with 95% accuracy. Applied deep learning and computer vision techniques for automated plant identification.",
    tech: ["Python", "Deep Learning", "Computer Vision", "TensorFlow"],
    status: "completed",
    link: "https://creative-salamander-74d2ab.netlify.app/",
    github: ""
  },
  {
    title: "Crop Recommender System",
    description: "Built a GenAI-driven model using weather and soil datasets to predict crop yields, reducing losses by 10%. Leveraged machine learning and predictive analytics for agricultural decision support.",
    tech: ["Python", "Machine Learning", "Data Analysis", "GenAI"],
    status: "completed",
    link: "https://calm-melomakarona-72c732.netlify.app/",
    github: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-100">
          Featured <span className="text-slate-200">Projects</span>
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          A showcase of AI/ML projects solving real-world problems in healthcare, agriculture, and ethical AI
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-100 pr-4">{project.title}</h3>
                {project.status === "in-progress" && (
                  <span className="px-2 py-1 bg-slate-600 text-slate-200 text-xs rounded-md whitespace-nowrap">
                    In Progress
                  </span>
                )}
              </div>
              
              <p className="text-slate-300 mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-600 text-slate-200 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.link && (
                  <Button
                    size="sm"
                    className="bg-slate-700 hover:bg-slate-600 text-slate-100 transition-all duration-300"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500 transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">More projects available on GitHub</p>
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/kondurupriyanka" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
