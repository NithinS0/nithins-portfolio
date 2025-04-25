
import { Button } from './ui/button';
import { FileDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Resume = () => {
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  useEffect(() => {
    // Dynamically import the resume file
    const importResume = async () => {
      try {
        const resumeModule = await import('../assets/Nithin_S_Resume.pdf');
        setResumeUrl(resumeModule.default);
      } catch (error) {
        console.error('Resume file not found', error);
      }
    };

    importResume();
  }, []);

  const handleDownload = () => {
    if (resumeUrl) {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Nithin_S_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="resume" className="py-20 px-6 bg-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Resume</h2>
        <p className="text-lg text-gray-700 mb-8">
          Download my resume to learn more about my education, experience, and skills.
        </p>
        <Button onClick={handleDownload} className="group">
          Download Resume
          <FileDown className="ml-2 group-hover:-translate-y-1 transition-transform" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default Resume;
