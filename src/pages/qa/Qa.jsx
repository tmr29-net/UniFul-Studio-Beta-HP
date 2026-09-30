import React from 'react';

export default function Qa() {
  const faqs = [
    { q: 'どのような活動者が参加できますか？', a: 'イラスト、音楽、動画編集、ゲーム制作など幅広い分野での活動・準備を想定しています。' },
    { q: '個人でもグループ単位でも参加できますか？', a: 'どちらでも可能です！個人クリエイターとしての参加はもちろん、すでに組んでいる既存グループ単位での加盟も受け付けています。' },
    { q: '費用や手数料はかかりますか？', a: 'UniFul Studioβは非営利の活動スタイルです。参加費は無料であり、事務所が個人の収益から手数料を徴収することも一切ありません。' },
    { q: '初心者ですが参加しても大丈夫ですか？', a: 'もちろん大歓迎です！新人のためのスタートアップ支援やノウハウ共有を用意しています。' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-slate-900">Q&A</h1>
        <p className="text-slate-500 text-sm">よくあるご質問</p>
      </div>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-8 space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-start space-x-3">
              <span className="text-indigo-600 font-mono">Q.</span>
              <span>{f.q}</span>
            </h3>
            <p className="text-sm text-slate-600 pl-6 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}