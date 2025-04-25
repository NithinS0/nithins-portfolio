
import { Button } from './ui/button';
import { FileDown } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Convert Google Drive view URL to direct download URL
    // Original: https://drive.google.com/file/d/1asViNpRpA7tSZtkHBrS1lPn071vIEvEF/view?usp=sharing
    // Extract file ID: 1asViNpRpA7tSZtkHBrS1lPn071vIEvEF
    const fileId = '1asViNpRpA7tSZtkHBrS1lPn071vIEvEF';
    const resumeUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
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
