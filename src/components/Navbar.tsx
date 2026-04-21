import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-maple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-display font-bold">枫</span>
            </div>
            <span className="text-xl font-display font-bold text-maple-600">个人简介</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/">首页</NavLink>
            <NavLink to="/about">个人信息</NavLink>
            <NavLink to="/skills">技能展示</NavLink>
            <NavLink to="/projects">作品展示</NavLink>
            <NavLink to="/study">学习任务</NavLink>
            <NavLink to="/data-analysis">数据分析训练</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-maple-600" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-maple-100">
            <div className="flex flex-col gap-4">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)}>首页</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>个人信息</MobileNavLink>
              <MobileNavLink to="/skills" onClick={() => setIsOpen(false)}>技能展示</MobileNavLink>
              <MobileNavLink to="/projects" onClick={() => setIsOpen(false)}>作品展示</MobileNavLink>
              <MobileNavLink to="/study" onClick={() => setIsOpen(false)}>学习任务</MobileNavLink>
              <MobileNavLink to="/data-analysis" onClick={() => setIsOpen(false)}>数据分析训练</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="text-gray-800 hover:text-maple-600 transition-all duration-300 font-semibold text-lg relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-maple-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

const MobileNavLink: React.FC<{ to: string; children: React.ReactNode; onClick: () => void }> = ({ to, children, onClick }) => {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="text-gray-800 hover:text-maple-600 transition-colors duration-300 font-semibold text-lg py-3"
    >
      {children}
    </Link>
  );
};

export default Navbar;