import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jeneishop001@gmail.com",
      href: "mailto:jeneishop001@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujarat, India",
      href: "https://maps.google.com"
    }
  ];

  const quickActions = [
    {
      icon: Mail,
      title: "Send Email",
      description: "Drop me a line anytime",
      action: "mailto:jeneishop001@gmail.com",
      buttonText: "Send Email",
      color: "from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20"
    },
    {
      icon: Github,
      title: "View GitHub",
      description: "Check out my code and projects",
      action: "https://github.com/Jenishh-patel",
      buttonText: "Visit GitHub",
      color: "from-gray-500/10 to-gray-600/10 hover:from-gray-500/20 hover:to-gray-600/20"
    },
    {
      icon: Linkedin,
      title: "Connect on LinkedIn",
      description: "Let's connect professionally",
      action: "https://www.linkedin.com/in/jenish-patel-5aa93420a",
      buttonText: "Connect",
      color: "from-blue-700/10 to-blue-800/10 hover:from-blue-700/20 hover:to-blue-800/20"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can work together
            to bring your ideas to life with innovative web solutions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Start a Conversation</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you're a startup looking for a developer, or an established company
                  seeking fresh talent, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 rounded-lg border border-primary/10 hover:bg-primary/5 hover:border-primary/20 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="font-semibold mb-2">Available for Opportunities</h4>
                <p className="text-muted-foreground text-sm">
                  I'm currently open to entry-level positions, internships, and freelance projects.
                  Let's discuss how I can contribute to your team and project goals.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`border-primary/10 hover:border-primary/20 transition-all group hover:shadow-lg hover:shadow-primary/5`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${action.color} transition-all group-hover:scale-110`}>
                          <action.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">{action.title}</h4>
                          <p className="text-muted-foreground text-sm mb-4">{action.description}</p>
                          <Button 
                            asChild 
                            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                          >
                            <a href={action.action} target="_blank" rel="noopener noreferrer">
                              {action.buttonText}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-12 border border-primary/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Calendar className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm excited to work on innovative projects and contribute to impactful solutions. 
              Let's discuss how we can bring your ideas to life together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <a href="mailto:jeneishop001@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/30 hover:bg-primary/10">
                <a href="https://github.com/Jenishh-patel" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View My Work
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}