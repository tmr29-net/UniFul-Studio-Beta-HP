import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Users, HeartHandshake, Rocket, 
  ChevronRight, Menu, X, Send, CheckCircle2 
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                UniFul Studioβ
              </span>
              <span className="block text-[10px] text-slate-400 tracking-widest">CREATOR'S GUILD</span>
            </div>
          </div>

          {/* PCナビ */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <NavBtn active={currentPage === 'home'} onClick={() => setCurrentPage('home')}>HOME</NavBtn>
            <NavBtn active={currentPage === 'about'} onClick={() => setCurrentPage('about')}>ABOUT US</NavBtn>
            <NavBtn active={currentPage === 'member'} onClick={() => setCurrentPage('member')}>MEMBER</NavBtn>
            <NavBtn active={currentPage === 'qa'} onClick={() => setCurrentPage('qa')}>Q&A</NavBtn>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/20 hover:scale-105 transition-all"
            >
              CONTACT
            </button>
          </nav>

          {/* モバイルメニューボタン */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 px-4 py-4 border-b border-slate-800 space-y-3">
            <MobileNavBtn onClick={() => setCurrentPage('home')}>HOME</MobileNavBtn>
            <MobileNavBtn onClick={() => setCurrentPage('about')}>ABOUT US</MobileNavBtn>
            <MobileNavBtn onClick={() => setCurrentPage('member')}>MEMBER</MobileNavBtn>
            <MobileNavBtn onClick={() => setCurrentPage('qa')}>Q&A</MobileNavBtn>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-center mt-2 shadow-md shadow-indigo-500/20"
            >
              CONTACT / 参加申請
            </button>
          </div>
        )}
      </header>

      {/* メイン画面切り替え */}
      <main>
        {currentPage === 'home' && <HomeView navigate={setCurrentPage} />}
        {currentPage === 'about' && <AboutView />}
        {currentPage === 'member' && <MemberView />}
        {currentPage === 'qa' && <QaView />}
        {currentPage === 'contact' && <ContactView />}
      </main>

      {/* フッター */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-base">UniFul Studioβ</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">すべてのクリエイターが、自分らしく輝ける場所へ。2028年の本格始動に向けた準備ギルド。</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button onClick={() => setCurrentPage('home')} className="text-left hover:text-indigo-400">HOME</button>
              <button onClick={() => setCurrentPage('about')} className="text-left hover:text-indigo-400">ABOUT US</button>
              <button onClick={() => setCurrentPage('member')} className="text-left hover:text-indigo-400">MEMBER</button>
              <button onClick={() => setCurrentPage('qa')} className="text-left hover:text-indigo-400">Q&A</button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Roadmap</h4>
            <p className="text-xs text-slate-400">2026年〜2028年3月: β期間</p>
            <p className="text-xs text-indigo-400 font-semibold mt-1">2028年4月: 本格本格始動 🚀</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center border-t border-slate-800 pt-6 text-xs text-slate-500">
          &copy; UniFul Studioβ All Rights Reserved. Non-profit Creator Guild.
        </div>
      </footer>
    </div>
  );
}

function NavBtn({ active, onClick, children }) {
  return (
    <button onClick={onClick} className={`transition-colors ${active ? 'text-indigo-400 font-semibold' : 'text-slate-300 hover:text-white'}`}>
      {children}
    </button>
  );
}

function MobileNavBtn({ onClick, children }) {
  return (
    <button onClick={onClick} className="block w-full text-left py-2 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 text-sm">
      {children}
    </button>
  );
}

// ------------------------------------------
// HOME
// ------------------------------------------
function HomeView({ navigate }) {
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
      {/* ヒーロー */}
      <section className="relative pt-20 pb-28 px-4 text-center bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)] border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
            <Sparkles size={14} className="text-indigo-400" />
            <span>2028.04 本格始動に向けた準備ギルド</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            すべてのクリエイターが、<br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              自分らしく輝ける場所へ。
            </span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            個性を尊重し合い、仲間と支え合いながら、次のステージへ。<br />
            未来のマルチクリエイターたちが集い、高め合う総合クリエイターコミュニティ。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button onClick={() => navigate('contact')} className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-xl shadow-indigo-500/25 hover:scale-105 transition-transform flex items-center justify-center space-x-2">
              <span>今すぐ参加・加盟する</span>
              <ChevronRight size={18} />
            </button>
            <button onClick={() => navigate('about')} className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-colors">
              ゆにスタβとは？
            </button>
          </div>

          {/* カウントダウン */}
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

      {/* ニュース */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-bold mb-4 flex items-center space-x-2 text-white">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
          <span>NEWS & INFORMATION</span>
        </h2>
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800">
          {news.map((item, i) => (
            <div key={i} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-800/40 transition-colors">
              <div className="flex items-center space-x-4">
                <span className="text-xs font-mono text-slate-400">{item.date}</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">{item.tag}</span>
                <span className="text-sm text-slate-200 font-medium">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4つの強み */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-bold text-white">ゆにスタβが提供する 4つの強み</h2>
          <p className="text-slate-400 text-sm">仲間と共に挑戦し、成長するための充実したサポート環境</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StrengthCard icon={<Users className="text-indigo-400" />} title="スキル共有＆制作サポート" desc="イラストや音楽、動画編集などの強みを持ち寄り、お互いの活動をギルド形式で助け合います。" />
          <StrengthCard icon={<Rocket className="text-purple-400" />} title="スタートアップ支援" desc="活動の始め方がわからない初心者や、初期素材・PRが足りない新人を手厚くバックアップ！" />
          <StrengthCard icon={<HeartHandshake className="text-pink-400" />} title="チーム結成・マッチング" desc="「仲間と活動したい」クリエイター同士をマッチング。個人・既存グループ単位での加盟もOK。" />
          <StrengthCard icon={<Sparkles className="text-amber-400" />} title="コラボ・相互交流促進" desc="メンバー間でコラボ企画やイベントを積極的に開催。将来は外部や大手に向けた展開も！" />
        </div>
      </section>
    </div>
  );
}

function CountBox({ label, val }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
      <div className="text-2xl sm:text-3xl font-bold font-mono text-white">{String(val).padStart(2, '0')}</div>
      <div className="text-[10px] text-slate-400 mt-1">{label}</div>
    </div>
  );
}

function StrengthCard({ icon, title, desc }) {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-indigo-500/50 transition-all hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700/50">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

// ------------------------------------------
// ABOUT US
// ------------------------------------------
function AboutView() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-white">ABOUT US</h1>
        <p className="text-slate-400 text-sm">UniFul Studioβ の理念と目指す世界</p>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
          <span className="w-3 h-3 rounded-full bg-purple-500"></span>
          <span>「UniFul Studioβ」とは？</span>
        </h2>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
          2028年4月に予定している本格事務所「UniFul Studio」の誕生に向けた、前身となるクリエイター支援＆交流プラットフォームです。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
            <h3 className="font-bold text-indigo-400 text-lg">Universal</h3>
            <p className="text-xs text-slate-400 leading-relaxed">普遍的・宇宙。広大な世界観を持って、あらゆる個性を包み込むベース。</p>
          </div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
            <h3 className="font-bold text-pink-400 text-lg">Colorful</h3>
            <p className="text-xs text-slate-400 leading-relaxed">色彩豊か。多様な才能や個性がお互いの色を混ぜ合わせ、新たな可能性を創造する。</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">ロードマップ</h2>
        <div className="border-l-2 border-indigo-500/30 pl-6 ml-4 sm:ml-20 space-y-10">
          <div>
            <span className="text-xs font-mono text-indigo-400 font-semibold">2026年 〜 2028年3月</span>
            <h3 className="text-xl font-bold text-white mt-1">UniFul Studioβ（現在地）</h3>
            <p className="text-sm text-slate-400 mt-1">Scratchを中心に、チーム体制の確立、ノウハウの蓄積、実績作りを実施。</p>
          </div>
          <div>
            <span className="text-xs font-mono text-purple-400 font-semibold">2028年4月 〜</span>
            <h3 className="text-xl font-bold text-white mt-1">UniFul Studio（本格始動）</h3>
            <p className="text-sm text-slate-400 mt-1">各種SNSや動画配信プラットフォームへ本格展開！クリエイターギルドとして外部支援を加速。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------
// MEMBER
// ------------------------------------------
function MemberView() {
  const members = [
    { name: 'Alpha Guild Team', role: '総合クリエイターユニット', tag: 'グループ加盟', desc: 'Scratchを中心にゲーム制作やアニメーションを展開する主力チーム。' },
    { name: 'Kaito', role: 'BGM・音楽プロデューサー', tag: '個人参加', desc: 'ゲームや映像に華を添えるオリジナルBGM・効果音制作を担当。' },
    { name: 'Rin', role: 'メインビジュアル・イラスト', tag: '個人参加', desc: 'キャラクターデザインや立ち絵制作を通じてメンバーのビジュアルをサポート。' },
    { name: 'Studio Nova', role: '動画編集・PRチーム', tag: 'グループ加盟', desc: 'YouTubeショートやPV映像の編集、SNSでの拡散PRを専門とするチーム。' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-white">MEMBER</h1>
        <p className="text-slate-400 text-sm">ゆにスタβで活躍する仲間たち（個人＆加盟グループ）</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {members.map((m, idx) => (
          <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-indigo-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">{m.tag}</span>
              <span className="text-xs text-slate-500 font-mono">UFS-{2026+idx}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{m.name}</h3>
              <p className="text-xs text-indigo-400 font-semibold mt-1">{m.role}</p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ------------------------------------------
// Q&A
// ------------------------------------------
function QaView() {
  const faqs = [
    { q: 'Scratch以外の活動者でも参加できますか？', a: 'はい、大歓迎です！将来的にはYouTube、X、イラスト、音楽など幅広い分野での活動・準備を想定しています。' },
    { q: '個人でもグループ単位でも参加できますか？', a: 'どちらでも可能です！個人クリエイターとしての参加はもちろん、すでに組んでいる既存グループ単位での加盟も受け付けています。' },
    { q: '費用や手数料はかかりますか？', a: 'ゆにスタβは非営利の活動スタイルです。参加費は無料であり、事務所が個人の収益から手数料を徴収することも一切ありません。' },
    { q: '初心者ですが参加しても大丈夫ですか？', a: 'もちろん大歓迎です！新人のためのスタートアップ支援やノウハウ共有を用意しています。' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-white">Q&A</h1>
        <p className="text-slate-400 text-sm">よくあるご質問</p>
      </div>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h3 className="text-base font-bold text-white flex items-start space-x-3">
              <span className="text-indigo-400 font-mono">Q.</span>
              <span>{f.q}</span>
            </h3>
            <p className="text-sm text-slate-300 pl-6 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ------------------------------------------
// CONTACT
// ------------------------------------------
function ContactView() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', type: '個人参加', message: '' });

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-white">CONTACT</h1>
        <p className="text-slate-400 text-sm">ゆにスタβへの参加、グループ加盟、お問合せはこちらから</p>
      </div>

      {sent ? (
        <div className="bg-slate-900 border border-indigo-500/50 rounded-3xl p-10 text-center space-y-6">
          <div className="w-16 h-16 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white">送信が完了しました！</h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">内容を確認次第、担当者よりご連絡またはコミュニティのご案内をお送りいたします。</p>
          <button onClick={() => setSent(false)} className="px-6 py-2.5 rounded-full bg-slate-800 text-slate-200 text-sm font-semibold hover:bg-slate-700 transition-colors">別内容を送る</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">お名前 / クリエイター名</label>
            <input type="text" required placeholder="例: ゆにスタ 太郎" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">申請区分</label>
            <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors">
              <option value="個人参加">個人参加（クリエイター）</option>
              <option value="グループ加盟">既存グループ単位での加盟</option>
              <option value="その他お問合せ">その他お問合せ</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">メッセージ・活動内容など</label>
            <textarea rows="5" required placeholder="現在の主な活動ややりたいことをお書きください。" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
          </div>
          <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg shadow-indigo-500/25 hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center space-x-2">
            <Send size={16} />
            <span>送信する</span>
          </button>
        </form>
      )}
    </div>
  );
}