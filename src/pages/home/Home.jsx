import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

export default function Home({ navigate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2028-04-01T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const news = [
    { date: '2026.06.01', tag: '告知', title: 'UniFul Studioβ 公式ホームページを公開しました！' },
    { date: '2026.05.15', tag: '募集', title: '第1期生クリエイターおよび初期メンバーの参加申請受付を開始。' },
    { date: '2026.04.01', tag: 'お知らせ', title: '2028年4月の本格始動に向け、プレオープンプロジェクトが始動しました。' },
  ];

  return (
    <div className="pb-20 space-y-20">
      <section className="relative pt-20 pb-28 px-4 text-center bg-gradient-to-b from-indigo-50/50 via-white to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-medium">
            <Sparkles size={14} className="text-indigo-500" />
            <span>2028.04 本格始動に向けた準備ギルド</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            すべてのクリエイターが、<br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              自分らしく輝ける場所へ。
            </span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            個性を尊重し合い、仲間と支え合いながら、次のステージへ。<br />
            未来のマルチクリエイターたちが集い、高め合う総合クリエイターコミュニティ。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button onClick={() => navigate('contact')} className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold shadow-xl shadow-indigo-500/20 hover:scale-105 transition-transform flex items-center justify-center space-x-2">
              <span>今すぐ参加・加盟する</span>
              <ChevronRight size={18} />
            </button>
            <button onClick={() => navigate('about')} className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-200 shadow-sm transition-colors">
              UniFul Studioβとは？
            </button>
          </div>

          <div className="pt-8">
            <p className="text-xs tracking-widest text-slate-400 uppercase mb-4 font-semibold">2028年4月 本格始動まで</p>
            <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
              <CountBox label="DAYS" val={timeLeft.days} />
              <CountBox label="HOURS" val={timeLeft.hours} />
              <CountBox label="MINS" val={timeLeft.minutes} />
              <CountBox label="SECS" val={timeLeft.seconds} />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-bold mb-4 flex items-center space-x-2 text-slate-900">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
          <span>NEWS & INFORMATION</span>
        </h2>
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden divide-y divide-slate-100">
          {news.map((item, i) => (
            <div key={i} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors">
              <div className="flex items-center space-x-4">
                <span className="text-xs font-mono text-slate-400">{item.date}</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-600 border border-indigo-200">{item.tag}</span>
                <span className="text-sm text-slate-700 font-medium">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CountBox({ label, val }) {
  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-3 text-center">
      <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">{String(val).padStart(2, '0')}</div>
      <div className="text-[10px] text-slate-400 mt-1">{label}</div>
    </div>
  );
}