
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Resume</h2>
        <p className="text-lg text-gray-700 mb-8">
          Download my resume to learn more about my education, experience, and skills.
        </p>
        <Button className="group">
          Download Resume
          <Download className="ml-2 group-hover:-translate-y-1 transition-transform" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default Resume;
