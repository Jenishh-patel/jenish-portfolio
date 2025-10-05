import { motion } from 'motion/react';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function About() {
  const features = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences with modern design principles"
    },
    {
      icon: Code,
      title: "Frontend Web Development",
      description: "Proficient in HTML, CSS, JavaScript, React.js, and Tailwind CSS"
    },
    {
      icon: Zap,
      title: "Backend Fundamentals",
      description: "Learning Django and MERN stack basics with hands-on project experience"
    },
    {
      icon: Users,
      title: "Team Collaboration & Leadership",
      description: "Strong collaboration skills gained through hackathons and team projects"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              As a fresher with 1-2 years of learning web development and five hackathon participations (including 2nd place at Royal Technosoft), I specialize in creating responsive and user-friendly websites with a passion for continuous learning.
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all border-primary/10 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-card p-8 rounded-lg border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My professional journey in web development began during a hackathon at DAIICT, where I learned from my seniors' experience and got inspired to explore the field deeply. I started building my foundation through YouTube courses, focusing on Django and the MERN stack, and gradually developed a strong interest in frontend technologies. Since then, I have worked on multiple projects such as GTU Results Clone, Creators Agency, and Ambitious Hub, which helped me sharpen my skills in creating responsive and user-friendly interfaces. Alongside development, I also explored digital marketing, which gave me insights into SEO and content strategies. Currently, I am passionate about growing as a Full-Stack Developer and aspire to contribute to impactful projects in both startups and MNCs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}