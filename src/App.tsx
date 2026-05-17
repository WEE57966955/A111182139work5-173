/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Video, 
  Image as ImageIcon,
  BookOpen,
  Mail,
  ChevronRight,
  ExternalLink,
  Box,
  Languages
} from "lucide-react";

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="font-sans font-bold text-xl tracking-tight text-gray-900 italic">
        Wu <span className="text-blue-600">SX</span>
      </div>
      <div className="flex gap-6">
        <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">首頁</a>
        <a href="#experience" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">經歷</a>
        <a href="#skills" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">技能</a>
        <a href="#languages" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">語言</a>
        <a href="#portfolio" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">AI 專區</a>
      </div>
    </div>
  </nav>
);

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl font-bold font-sans tracking-tight text-gray-900">{title}</h2>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);

export default function App() {
  const profileImageUrl = "https://lh3.googleusercontent.com/d/11Gt-2u7MGx5XQYOOQzDJ09JTaS7oluCr";

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section id="about" className="mb-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-48 h-64 rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <img 
                  src={profileImageUrl}
                  alt="吳衫憲" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=250&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <User size={24} />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-5xl font-bold font-sans tracking-tighter text-gray-900 mb-4">
                吳衫憲 <span className="text-gray-400">Wu Shan-Xian</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                目前就讀於 <span className="text-blue-600 font-medium">國立高雄科技大學航技系</span>
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-600">
                  <GraduationCap size={16} /> 航技系
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-600">
                  <Briefcase size={16} /> 打工實習中
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="mb-24 space-y-12">
          <div>
            <SectionHeader title="工作經歷" icon={Briefcase} />
            <div className="grid gap-6">
              <Card>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">打工實習生</h3>
                    <p className="text-blue-600 font-medium">實習/打工</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wider">
                    2025 ~ 現在
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  目前正在擔任打工實習生，磨練專業技能與實務經驗。
                </p>
              </Card>

              <Card>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">御風輪實習</h3>
                    <p className="text-blue-600 font-medium">實習經歷</p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wider">
                    2025 ~ 2025
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  在御風輪參與實務實習，深入了解航技相關作業流程。
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills & Certs */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <section id="skills">
            <SectionHeader title="電腦技能" icon={Award} />
            <div className="space-y-4">
              <div className="p-4 bg-white border border-gray-100 rounded-xl flex items-center gap-4">
                <ChevronRight className="text-blue-600" size={16} />
                <span className="font-medium">辦公應用軟體 (Office, etc.)</span>
              </div>
              <div className="p-4 bg-white border border-gray-100 rounded-xl flex items-center gap-4">
                <ChevronRight className="text-blue-600" size={16} />
                <span className="font-medium">專案應用軟體 (Project Tools)</span>
              </div>
            </div>
          </section>

          <section id="certs">
            <SectionHeader title="專業證照" icon={Award} />
            <div className="space-y-4">
              <div className="p-4 bg-white border border-gray-100 rounded-xl flex items-center gap-4">
                <ChevronRight className="text-blue-600" size={16} />
                <span className="font-medium">四小證 (基本安全培訓、求生、防火、救護)</span>
              </div>
              <div className="p-4 bg-white border border-gray-100 rounded-xl flex items-center gap-4">
                <ChevronRight className="text-blue-600" size={16} />
                <span className="font-medium">其它相關海事專業證照</span>
              </div>
            </div>
          </section>
        </div>

        {/* Language Proficiency */}
        <section id="languages" className="mb-24">
          <SectionHeader title="語言能力與檢定" icon={Languages} />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  EN
                </div>
                <div>
                  <h3 className="font-bold text-lg">TOEIC 英文檢定</h3>
                  <p className="text-sm text-gray-500">國立高雄科技大學 畢業門檻認證</p>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-4xl font-black text-blue-600 tracking-tighter">已取得認證</span>
                <span className="text-sm font-medium text-gray-400">航技系標準</span>
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold">
                  ZH
                </div>
                <div>
                  <h3 className="font-bold text-lg">中文 (繁體)</h3>
                  <p className="text-sm text-gray-500">母語級別能力</p>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-2xl font-bold text-green-600">精通 (Native)</span>
                <span className="text-sm font-medium text-gray-400">聽、說、讀、寫</span>
              </div>
            </Card>
          </div>
        </section>

        {/* AI Portfolio Section */}
        <section id="portfolio" className="mb-24">
          <SectionHeader title="AI 專區 (影片 & 圖片)" icon={Video} />
          
          <div className="space-y-12">
            {/* AI Videos */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Video size={18} className="text-blue-600" /> AI 生成影片展示
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/c5qUZWWljK4" 
                    title="AI Video 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/zIs3oXVtlxg" 
                    title="AI Video 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* AI Images */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ImageIcon size={18} className="text-blue-600" /> AI 生成圖片展示
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-100 group relative"
                  >
                    <img 
                      src={`https://picsum.photos/seed/ai_${i}/800/800`} 
                      alt={`AI Image ${i}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-bold font-mono">AI VISUAL {i}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI 3D Model */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Box size={18} className="text-blue-600" /> AI 3D 模型展示
              </h3>
              <Card className="overflow-hidden p-0">
                <div className="aspect-video bg-gray-50 flex flex-col items-center justify-center p-8 text-center bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent)]">
                  <motion.div 
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 bg-white shadow-xl text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100"
                  >
                    <Box size={40} />
                  </motion.div>
                  <h4 className="text-xl font-bold mb-2">Tripo AI 3D 模型作品</h4>
                  <p className="text-gray-500 mb-8 max-w-md">這是在 Tripo3D 平台上利用 AI 技術生成的 3D 模型。點擊下方按鈕即可在 3D 檢視器中查看完整細節。</p>
                  <a 
                    href="https://studio.tripo3d.ai/3d-model/608c9c9d-5a4d-435f-933c-9cd27e0494e5?invite_code=03ER8L" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 flex items-center gap-2"
                  >
                    進入 3D 展示間 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Autobiography */}
        <section id="biography" className="mb-24">
          <SectionHeader title="自傳" icon={BookOpen} />
          <Card className="p-8">
            <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-4 font-sans">
              <p>
                你好，我是吳衫憲。目前正在國立高雄科技大學航技系深造實習中。我對航海技術充滿熱情，致力於在學術與實務中找到平衡。
              </p>
              <p>
                在校期間，我不僅掌握了航海相關的基本理論，還積極參與校外實習與打工活動，以此累積更多的現場經驗。目前我正服務於御風輪實習計畫，並積極考取各項海事相關證照。
              </p>
              <p>
                除了專業領域，我也對 AI 科技深感興趣，並在生活中嘗試運用 AI 工具進行創作與效率提升。我希望未來能將傳統航技與現代科技相結合，開拓屬於自己的職涯道路。
              </p>
            </div>
          </Card>
        </section>

        {/* Footer/Contact */}
        <footer className="border-t border-gray-100 pt-12 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-gray-50 hover:bg-blue-50 text-gray-400 hover:text-blue-600 rounded-full transition-all">
                <Mail size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-50 hover:bg-blue-50 text-gray-400 hover:text-blue-600 rounded-full transition-all">
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} 吳衫憲. 目前就讀於國立高雄科技大學航技系.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
