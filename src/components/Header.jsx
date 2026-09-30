import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logo.png';

export default function Header({ currentPage, setCurrentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* ロゴ画像 (h-16 w-auto) */}
        <div 
          onClick={() => handleNav('home')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <img 
            src={logoImage} 
            alt="UniFul Studioβ Logo" 
            className="h-16 w-auto object-contain group-hover:scale-105 transition-transform" 
          />
        </div>

        {/* PCナビゲーション */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <NavBtn active={currentPage === 'home'} onClick={() => handleNav('home')}>HOME</NavBtn>
          <NavBtn active={currentPage === 'about'} onClick={() => handleNav('about')}>ABOUT US</NavBtn>
          <NavBtn active={currentPage === 'member'} onClick={() => handleNav('member')}>MEMBER</NavBtn>
          <NavBtn active={currentPage === 'qa'} onClick={() => handleNav('qa')}>Q&A</NavBtn>
          <button 
            onClick={() => handleNav('contact')}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-md shadow-indigo-500/20 hover:scale-105 transition-all"
          >
            CONTACT
          </button>
        </nav>

        {/* モバイルメニューボタン */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-700 hover:text-slate-900"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 border-b border-slate-200 space-y-2 shadow-lg">
          <MobileNavBtn onClick={() => handleNav('home')}>HOME</MobileNavBtn>
          <MobileNavBtn onClick={() => handleNav('about')}>ABOUT US</MobileNavBtn>
          <MobileNavBtn onClick={() => handleNav('member')}>MEMBER</MobileNavBtn>
          <MobileNavBtn onClick={() => handleNav('qa')}>Q&A</MobileNavBtn>
          <button 
            onClick={() => handleNav('contact')}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-center mt-2 shadow-md shadow-indigo-500/20"
          >
            CONTACT / 参加申請
          </button>
        </div>
      )}
    </header>
  );
}

function NavBtn({ active, onClick, children }) {
  return (
    <button onClick={onClick} className={`transition-colors ${active ? 'text-indigo-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}>
      {children}
    </button>
  );
}

function MobileNavBtn({ onClick, children }) {
  return (
    <button onClick={onClick} className="block w-full text-left py-2 px-3 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-sm">
      {children}
    </button>
  );
}