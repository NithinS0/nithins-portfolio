
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card className="bg-white/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm an Artificial Intelligence student with a strong foundation in Python, Linux, and system security. 
              My passion lies in developing secure and efficient systems that make a positive impact. 
              Through my academic journey, I've gained extensive experience in shell scripting, 
              deep learning, and building user-friendly applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              I believe in the power of AI to transform industries while maintaining robust security measures. 
              My goal is to contribute to the field by creating innovative solutions that bridge the gap 
              between complex AI systems and user-friendly interfaces.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
