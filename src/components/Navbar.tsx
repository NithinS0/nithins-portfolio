
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 px-6 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-xl font-semibold text-primary">Nithin S</span>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-8">
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollToSection('resume')} className="hover:text-primary transition-colors">Resume</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden py-4 px-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('resume')} className="hover:text-primary transition-colors">Resume</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
