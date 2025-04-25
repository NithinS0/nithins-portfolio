
import { Card, CardContent } from './ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <Card className="bg-white/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <p className="text-lg text-gray-700 mb-8">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out through any of these platforms:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" className="group" asChild>
                <a href="https://github.com/NithinS0" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" className="group" asChild>
                <a href="https://linkedin.com/in/nithin01" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="group" asChild>
                <a href="mailto:nithin200511@gmail.com">
                  <Mail className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
