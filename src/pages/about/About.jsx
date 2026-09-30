import React from 'react';
import { Users, Rocket, HeartHandshake, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-slate-900">ABOUT US</h1>
        <p className="text-slate-500 text-sm">UniFul Studioβ の理念と目指す世界</p>
      </div>

      <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 sm:p-12 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-3">
          <span className="w-3 h-3 rounded-full bg-purple-600"></span>
          <span>UniFul Studioβ とは？</span>
        </h2>
        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
          2028年4月に予定している本格事務所「UniFul Studio」の誕生に向けた、前身となるクリエイター支援＆交流プラットフォームです。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
            <h3 className="font-bold text-indigo-600 text-lg">Universal</h3>
            <p className="text-xs text-slate-500 leading-relaxed">普遍的・宇宙。広大な世界観を持って、あらゆる個性を包み込むベース。</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2">
            <h3 className="font-bold text-pink-600 text-lg">Colorful</h3>
            <p className="text-xs text-slate-500 leading-relaxed">色彩豊か。多様な才能や個性がお互いの色を混ぜ合わせ、新たな可能性を創造する。</p>
          </div>
        </div>
      </div>

      {/* HOMEから移動した4つの強みセクション */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-slate-900">UniFul Studioβ が提供する 4つの強み</h2>
          <p className="text-slate-500 text-sm">仲間と共に挑戦し、成長するための充実したサポート環境</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StrengthCard icon={<Users className="text-indigo-600" />} title="スキル共有＆制作サポート" desc="イラストや音楽、動画編集などの強みを持ち寄り、お互いの活動をギルド形式で助け合います。" />
          <StrengthCard icon={<Rocket className="text-purple-600" />} title="スタートアップ支援" desc="活動の始め方がわからない初心者や、初期素材・PRが足りない新人を手厚くバックアップ！" />
          <StrengthCard icon={<HeartHandshake className="text-pink-600" />} title="チーム結成・マッチング" desc="「仲間と活動したい」クリエイター同士をマッチング。個人・既存グループ単位での加盟もOK。" />
          <StrengthCard icon={<Sparkles className="text-amber-500" />} title="コラボ・相互交流促進" desc="メンバー間でコラボ企画やイベントを積極的に開催。将来は外部や大手に向けた展開も！" />
        </div>
      </section>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 text-center">ロードマップ</h2>
        <div className="border-l-2 border-indigo-200 pl-6 ml-4 sm:ml-20 space-y-10">
          <div>
            <span className="text-xs font-mono text-indigo-600 font-semibold">2026年 〜 2028年3月</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">UniFul Studioβ（現在地）</h3>
            <p className="text-sm text-slate-500 mt-1">チーム体制の確立、ノウハウの蓄積、実績作りを実施。</p>
          </div>
          <div>
            <span className="text-xs font-mono text-purple-600 font-semibold">2028年4月 〜</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">UniFul Studio（本格始動）</h3>
            <p className="text-sm text-slate-500 mt-1">各種SNSや動画配信プラットフォームへ本格展開！クリエイターギルドとして外部支援を加速。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StrengthCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 space-y-4 hover:border-indigo-300 hover:shadow-md transition-all">
      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}