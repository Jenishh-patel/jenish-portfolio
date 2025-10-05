import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Trophy, Target, BookOpen, Zap, GraduationCap } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      type: "proficient",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Fundamentals (Currently Learning)",
      type: "learning",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Django (basics)" },
        { name: "MongoDB" },
        { name: "MySQL" }
      ]
    },
    {
      title: "Development Tools",
      type: "proficient",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Netlify (deployment)", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Chrome DevTools", level: 75 },
        { name: "NPM/Package Management", level: 70 }
      ]
    },
    {
      title: "Design & Marketing",
      type: "proficient",
      skills: [
        { name: "UI/UX Design", level: 75 },
        { name: "Responsive Design", level: 85 },
        { name: "SEO Basics", level: 70 },
        { name: "Social Media Marketing", level: 75 },
        { name: "Content Strategy", level: 70 }
      ]
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "2nd Place Winner",
      description: "Royal Technosoft Hackathon",
      color: "text-yellow-500"
    },
    {
      icon: Target,
      title: "5 Hackathons",
      description: "Participated in various hackathons",
      color: "text-blue-500"
    },
    {
      icon: BookOpen,
      title: "Self-taught Developer",
      description: "Continuous learning through online resources",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "3 Live Projects",
      description: "Successfully deployed and maintained",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies
            developed through continuous learning, hackathons, and hands-on projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/10 transition-all border-primary/10 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.type === "learning" ? (
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="px-3 py-1.5 text-sm bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all"
                          >
                            <GraduationCap className="h-3 w-3 mr-1 inline-block" />
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </motion.div>
                    ))
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-8">Achievements & Milestones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <Card className="h-full text-center hover:shadow-lg hover:shadow-primary/10 transition-all border-primary/10 hover:border-primary/20 group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all ${achievement.color}`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}