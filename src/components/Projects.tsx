import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: "GTU Results Clone",
      description: "A web application replicating the official GTU result portal, built to practice frontend skills and simulate a real-world result management interface with clean UI and real-time search simulation.",
      image: "/images/gtu_clone.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://gtu-results.netlify.app/",
      githubUrl: "https://github.com/Jenishh-patel"
    },
    {
      title: "Creators Agency",
      description: "A modern landing page for a digital creators agency, designed to showcase services and attract potential clients. Features responsive design, smooth UI/UX, and professional layout suitable for business use.",
      image: "/images/creators_agency.jpg",
      technologies: ["HTML", "CSS", "React.js", "Tailwind"],
      liveUrl: "https://creators-agency.netlify.app/",
      githubUrl: "https://github.com/Jenishh-patel"
    },
    {
      title: "Ambitious Hub",
      description: "A productivity-focused web app that helps users manage tasks, analyze progress, and stay motivated using gamification. Features interactive design, scalable structure, and gamified view for young generation.",
      image: "/images/ambitious-hub.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind"],
      liveUrl: "https://ambitious-hub.netlify.app/",
      githubUrl: "https://github.com/Jenishh-patel"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my skills in frontend development,
            responsive design, and creating user-friendly web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group border-primary/10 hover:border-primary/20">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Button variant="outline" size="lg" asChild className="border-primary/30 hover:bg-primary/10 hover:border-primary/50">
            <a href="https://github.com/Jenishh-patel" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}