import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 pt-20 relative overflow-hidden">
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-accent/15 to-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-primary mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Jenish Patel
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                Full Stack Developer & UI/UX Designer
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I am an aspiring Web Developer passionate about creating responsive and user-friendly websites. My core skills include HTML, CSS, JavaScript, and React, and I am continuously improving my knowledge in modern frameworks and backend technologies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              className="flex space-x-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10 transition-all">
                <a href="https://github.com/Jenishh-patel" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-accent hover:bg-accent/10 transition-all">
                <a href="https://www.linkedin.com/in/jenish-patel-5aa93420a" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-primary/10 transition-all">
                <a href="mailto:jeneishop001@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
              <ImageWithFallback
                src="/images/profile_pic.webp"
                alt="Jenish Patel - Professional Profile"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-background shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}