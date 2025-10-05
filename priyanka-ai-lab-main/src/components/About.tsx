import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-100">
          About <span className="text-slate-200">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up">
            <Card className="aspect-square bg-slate-700 border-slate-600 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-full">
                <img src="/Profile.jpg" alt="Priyanka Konduru" className="w-full h-full object-cover" />
              </div>
            </Card>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a final year <span className="text-slate-100 font-semibold">Computer Science student</span> at 
              Presidency University with a passion for building ethical and impactful AI systems.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              My work focuses on <span className="text-slate-100 font-semibold">AI Ethics & Bias Detection</span>, 
              developing multi-agent systems, and applying machine learning to solve real-world challenges 
              in agriculture and healthcare.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              With hands-on experience from internships at <span className="text-slate-100 font-semibold">IIT Hyderabad</span> and 
              <span className="text-slate-100 font-semibold"> Infosys Springboard</span>, I've contributed to 
              building Indic AI datasets and fine-tuning LLMs. I've published research in IJRTI and continuously 
              explore cutting-edge AI technologies.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-slate-600 text-slate-100 rounded-full text-sm font-medium">
                CGPA: 8.95
              </span>
              <span className="px-4 py-2 bg-slate-600 text-slate-100 rounded-full text-sm font-medium">
                2 Publications
              </span>
              <span className="px-4 py-2 bg-slate-600 text-slate-100 rounded-full text-sm font-medium">
                5+ Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
