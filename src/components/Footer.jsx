import React from 'react';
import { Rocket } from 'lucide-react';
import logoImage from '../assets/logo.png';

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="space-y-3">
          <img src={logoImage} alt="UniFul Studioβ" className="h-16 w-auto object-contain" />
          <p className="text-xs leading-relaxed text-slate-500">すべてのクリエイターが、自分らしく輝ける場所へ。2028年の本格始動に向けた準備ギルド。</p>
        </div>
        <div>
          <h4 className="text-slate-800 font-semibold mb-3 text-xs uppercase tracking-wider">Quick Links</h4>
          <div className="flex flex-col space-y-2 text-xs">
            <button onClick={() => setCurrentPage('home')} className="text-left hover:text-indigo-600">HOME</button>
            <button onClick={() => setCurrentPage('about')} className="text-left hover:text-indigo-600">ABOUT US</button>
            <button onClick={() => setCurrentPage('member')} className="text-left hover:text-indigo-600">MEMBER</button>
            <button onClick={() => setCurrentPage('qa')} className="text-left hover:text-indigo-600">Q&A</button>
          </div>
        </div>
        <div>
          <h4 className="text-slate-800 font-semibold mb-3 text-xs uppercase tracking-wider">Roadmap</h4>
          <p className="text-xs text-slate-500">2026年〜2028年3月: β期間</p>
          <p className="text-xs text-indigo-600 font-semibold mt-1 flex items-center space-x-1.5">
            <Rocket size={14} />
            <span>2028年4月: 本格始動</span>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center border-t border-slate-100 pt-6 text-xs text-slate-400">
        &copy; UniFul Studioβ All Rights Reserved. Non-profit Creator Guild.
      </div>
    </footer>
  );
}