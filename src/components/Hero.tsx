
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-purple-50">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-primary">Nithin S</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
          Artificial Intelligence student passionate about building secure and user-friendly systems
        </p>
        <Button
          onClick={scrollToAbout}
          className="animate-fade-in delay-300 group"
        >
          Learn More
          <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
