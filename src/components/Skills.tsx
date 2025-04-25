
import { Card, CardContent } from './ui/card';
import { Code, Database, Layers, Terminal } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: "Python & Programming",
      description: "Python, Basic C & C++, Python Libraries",
    },
    {
      icon: Terminal,
      title: "Machine Learning",
      description: "Deep Learning, Neural Networks, CNN",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Data Analysis, Visualization, Statistics",
    },
    {
      icon: Layers,
      title: "Tools & Technologies",
      description: "Git, Linux, Shell Scripting",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <skill.icon size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
