import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "AI-Based Medicinal Plant Identifier",
    journal: "IJRTI (International Journal of Research Trends and Innovation)",
    date: "Feb 2024 - Aug 2025",
    description: "Developed a generative AI model to classify 300+ medicinal plant species from images with 95% accuracy. Applied deep learning and computer vision techniques for automated plant identification.",
    link: "https://www.ijrti.org/viewpaperforall?paper=IJRTI2505136",
    demo: "https://creative-salamander-74d2ab.netlify.app/"
  },
  {
    title: "Avoid Crash CropLoss for Farmers",
    journal: "IJRTI (International Journal of Research Trends and Innovation)",
    date: "Dec 2024 - Jan 2025",
    description: "Built a GenAI-driven model using weather and soil datasets to predict crop yields, reducing losses by 10%. Leveraged machine learning, feature engineering, and predictive analytics for agricultural decision support.",
    link: "https://www.ijrti.org/papers/IJRTI2501042.pdf",
    demo: "https://calm-melomakarona-72c732.netlify.app/"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Research <span className="gradient-text">Publications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Published work in AI/ML applications for healthcare and agriculture
        </p>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover-lift">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-primary/20 rounded-lg glow-effect">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">{pub.title}</h3>
                  <p className="text-accent font-medium mb-1">{pub.journal}</p>
                  <p className="text-sm text-muted-foreground mb-3">{pub.date}</p>
                  <p className="text-muted-foreground mb-4">{pub.description}</p>
                  
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 glow-effect transition-all"
                      asChild
                    >
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read Paper
                      </a>
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-accent/50 hover:bg-accent/10 hover:border-accent transition-all"
                      asChild
                    >
                      <a href={pub.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
