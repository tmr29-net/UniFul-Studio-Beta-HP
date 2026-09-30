import React from 'react';

export default function Member() {
  const members = [
    { name: 'Alpha Guild Team', role: '総合クリエイターユニット', tag: 'グループ加盟', desc: 'ゲーム制作やアニメーションを展開する主力チーム。' },
    { name: 'Kaito', role: 'BGM・音楽プロデューサー', tag: '個人参加', desc: 'ゲームや映像に華を添えるオリジナルBGM・効果音制作を担当。' },
    { name: 'Rin', role: 'メインビジュアル・イラスト', tag: '個人参加', desc: 'キャラクターデザインや立ち絵制作を通じてメンバーのビジュアルをサポート。' },
    { name: 'Studio Nova', role: '動画編集・PRチーム', tag: 'グループ加盟', desc: 'ショート動画やPV映像の編集、SNSでの拡散PRを専門とするチーム。' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-slate-900">MEMBER</h1>
        <p className="text-slate-500 text-sm">UniFul Studioβで活躍する仲間たち（個人＆加盟グループ）</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {members.map((m, idx) => (
          <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 space-y-4 hover:border-indigo-300 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-200">{m.tag}</span>
              <span className="text-xs text-slate-400 font-mono">UFS-{2026+idx}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">{m.name}</h3>
              <p className="text-xs text-indigo-600 font-semibold mt-1">{m.role}</p>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}