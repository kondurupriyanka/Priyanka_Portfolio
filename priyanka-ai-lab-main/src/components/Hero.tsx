import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-slate-900">
      {/* Clean geometric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent" />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-slate-700/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-600/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <p className="text-slate-400 text-sm md:text-base mb-4 tracking-wider uppercase font-medium">
            Computer Science Student • AI/ML Specialist
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-100">
            Hi, I'm <span className="text-slate-200">Konduru Priyanka</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 font-medium">
            Final-year Computer Science Student at Presidency University
          </p>
          
          <p className="text-base md:text-lg text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            Passionate about building AI/ML solutions that are ethical and impactful. I specialize in NLP, AI Ethics, 
            deep learning, and multi-agent systems, with hands-on experience in LLM fine-tuning, AI datasets, 
            and real-world projects in healthcare and agriculture.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-slate-700 hover:bg-slate-600 text-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 transition-all duration-300"
              asChild
            >
              <a href="/Konduru_Priyanka_AI_ML_Resume.pdf" download="Konduru_Priyanka_AI_ML_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/konduru-priyanka-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/kondurupriyanka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:priyankakonduru267@gmail.com"
              className="text-slate-400 hover:text-slate-200 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
