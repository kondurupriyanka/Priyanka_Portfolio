import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm actively seeking opportunities in AI/ML engineering and research. 
          Let's discuss how I can contribute to your team.
        </p>
        
        <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 hover-lift">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out for collaborations, opportunities, or just a chat about AI/ML.
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="mailto:priyankakonduru267@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">priyankakonduru267@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="tel:+919353202821"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+91 93532 02821</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              
              <Button
                className="w-full bg-primary hover:bg-primary/90 glow-effect justify-start transition-all hover:scale-105"
                asChild
              >
                <a href="mailto:priyankakonduru267@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="w-full border-primary/50 hover:bg-primary/10 hover:border-primary justify-start transition-all hover:scale-105"
                asChild
              >
                <a href="#" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Connect on social media</p>
                <div className="flex gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all hover:scale-110"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/konduru-priyanka-/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-accent/50 hover:bg-accent/10 hover:text-accent hover:border-accent transition-all hover:scale-110"
                    asChild
                  >
                    <a
                      href="https://github.com/kondurupriyanka"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
