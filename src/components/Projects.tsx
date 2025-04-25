
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Cancer Classification using Deep CNN",
      description: "Implemented a deep learning model using VGG16 architecture for accurate cancer classification from medical images.",
      tags: ["Python", "Deep Learning", "CNN", "VGG16"],
    },
    {
      title: "Dice Roll Simulator",
      description: "Created an interactive dice rolling simulator with realistic physics and animations.",
      tags: ["Python", "GUI", "Random", "Simulation"],
    },
    {
      title: "Password Manager and Generator",
      description: "Developed a secure password management system with encryption and a user-friendly interface using Java Swing.",
      tags: ["Java", "Swing", "Security", "Encryption"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
