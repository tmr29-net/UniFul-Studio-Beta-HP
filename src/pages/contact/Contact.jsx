import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', type: '個人参加', message: '' });

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-slate-900">CONTACT</h1>
        <p className="text-slate-500 text-sm">UniFul Studioβへの参加、グループ加盟、お問合せはこちらから</p>
      </div>

      {sent ? (
        <div className="bg-white border border-indigo-200 shadow-md rounded-3xl p-10 text-center space-y-6">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto border border-indigo-100">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">送信が完了しました！</h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">内容を確認次第、担当者よりご連絡またはコミュニティのご案内をお送りいたします。</p>
          <button onClick={() => setSent(false)} className="px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition-colors">別内容を送る</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">お名前 / クリエイター名</label>
            <input type="text" required placeholder="例: UniFul 太郎" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">申請区分</label>
            <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors">
              <option value="個人参加">個人参加（クリエイター）</option>
              <option value="グループ加盟">既存グループ単位での加盟</option>
              <option value="その他お問合せ">その他お問合せ</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">メッセージ・活動内容など</label>
            <textarea rows="5" required placeholder="現在の主な活動ややりたいことをお書きください。" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
          </div>
          <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold shadow-lg shadow-indigo-500/20 hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center space-x-2">
            <Send size={16} />
            <span>送信する</span>
          </button>
        </form>
      )}
    </div>
  );
}