
import { Button } from './ui/button';
import { FileDown } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // The URL should point to where you've uploaded your resume
    // For example, you could host it on a cloud storage service
    const resumeUrl = 'https://example.com/Nithin_S_Resume.pdf';
    
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank';
    link.download = 'Nithin_S_Resume.pdf';
    document.body.appendChild(link);
    
    try {
      link.click();
      toast.success('Resume download started');
    } catch (error) {
      console.error('Download failed', error);
      toast.error('Failed to download resume');
    } finally {
      // Clean up the link element
      document.body.removeChild(link);
      setIsDownloading(false);
    }
  };

  return (
    <section id="resume" className="py-20 px-6 bg-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Resume</h2>
        <p className="text-lg text-gray-700 mb-8">
          Download my resume to learn more about my education, experience, and skills.
        </p>
        <Button 
          onClick={handleDownload} 
          className="group"
          disabled={isDownloading}
        >
          {isDownloading ? 'Downloading...' : 'Download Resume'}
          <FileDown className="ml-2 group-hover:-translate-y-1 transition-transform" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default Resume;
