import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Member from './pages/member/Member';
import Qa from './pages/qa/Qa';
import Contact from './pages/contact/Contact';

export default function App() {
  // 現在のURLパスからページを判定する関数
  const getPageFromPath = (path) => {
    switch (path) {
      case '/about': return 'about';
      case '/member': return 'member';
      case '/qa': return 'qa';
      case '/contact': return 'contact';
      default: return 'home';
    }
  };

  const [currentPage, setCurrentPage] = useState(() => getPageFromPath(window.location.pathname));

  // ブラウザの「戻る」「進む」ボタンに対応
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // ページ切り替え時にURLとスクロール位置を更新
  const handleNavigate = (page) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      <Header currentPage={currentPage} setCurrentPage={handleNavigate} />
      
      <main className="flex-grow">
        {currentPage === 'home' && <Home navigate={handleNavigate} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'member' && <Member />}
        {currentPage === 'qa' && <Qa />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer setCurrentPage={handleNavigate} />
    </div>
  );
}