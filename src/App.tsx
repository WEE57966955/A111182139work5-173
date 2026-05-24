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
  Languages,
  Compass,
  MapPin,
  Calendar,
  Heart
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
        <a href="#travel" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">旅程足跡</a>
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
const travelData = [
  {
    day: "Day 1",
    date: "4/3 (FRI)",
    title: "古都探索與歷史漫步及老宅幽靜",
    tag: "古都街道巷尾尋味",
    desc: "三天兩夜精彩的台南與高雄雙城之旅揭開序幕，首日聚焦於古樸的老街道浪漫燈光與台南在地悠遠的歷史人文驚喜。",
    highlightImage: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=1200",
    imageCaption: "神農老街與國華街：在紅色傳統燈籠高高懸掛的復古暮色下，散發原汁原味的府城歲月溫度",
    colorTheme: "from-amber-500 to-orange-600",
    textTheme: "text-amber-600",
    bgLight: "bg-amber-50/50",
    timeline: [
      { time: "14:00", title: "台南火車站集合 / 民宿辦理入住", details: "與旅伴愉快會合！前往台南中西區精緻人文設計老宅民宿辦理 Check-in 並妥善安放行李。", price: "免費" },
      { time: "16:30", title: "神農老街與國華街古樸漫觀", details: "漫步穿梭於府城極富時代縮影的蜿蜒老巷弄，近距離踏尋懷舊民居木造老外牆與精美手作青年文創小店的完美撞擊。", price: "$150" },
      { time: "19:00", title: "台南在地風味特色小吃晚餐", details: "品嘗正宗台南傳統米糕、金得春捲（傳統應景潤餅）與古早味手作黑糖傳統豆花，感受微甜細膩層次。", price: "$200" },
      { time: "21:30", title: "人文老宅幽靜庭院泡茶品茶", details: "夜幕低垂，在靜謐老宅天井中感受大隱於市的悠然氛圍，忘卻一切都會喧囂、補足高質量睡眠。", price: "$2,500" }
    ]
  },
  {
    day: "Day 2",
    date: "4/4 (SAT)",
    title: "綠色生態與無菜單奢華饗宴",
    tag: "絕美綠意倒影綠色隧道",
    desc: "上午驚嘆於台江國寶級榕樹樹冠合攏反映於河面的綠色生態奇蹟；漫步老榕樹盤纏歷史遺跡，晚間置身百年閩式老宅細品私房無菜單手路菜珍饈。",
    highlightImage: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=1200", 
    imageCaption: "四草綠色隧道：參天榕樹綠葉茂密相連，於平滑澄澈的水面折射出夢幻的綠光走廊，美如仙境",
    colorTheme: "from-green-500 to-emerald-600",
    textTheme: "text-emerald-600",
    bgLight: "bg-emerald-50/30",
    timeline: [
      { time: "08:30", title: "金得春捲 (台南應景傳統潤餅)", details: "飲食：清明時節必吃！包入高麗菜、皇帝豆、現炒肉片、蝦仁並灑滿香氣撲鼻的純手作花生糖粉（甜度可選），口感飽滿微甜、滋味鮮嫩無比。", price: "$100" },
      { time: "10:00", title: "四草綠色隧道深度生態探索", details: "門票：戴上斗笠搭乘竹筏由專業導覽徐徐撐篙前行。穿梭於被冠以『台灣袖珍版亞馬遜河』的紅樹林低矮隧道，沿途觀看兩旁細小的招潮蟹與彈塗魚，美得屏息 (2026標準票價)。", price: "$200" },
      { time: "13:00", title: "安平古堡 & 安平樹屋參訪", details: "門票：漫步驚嘆大榕樹攀附包覆在殘敗英德倉庫百年牆磚上的奇幻廢墟。一票雙享受，深度感知荷蘭統治時期的斑駁城牆與時代變幻。", price: "$100" },
      { time: "15:00", title: "文章牛肉湯香嫩午餐", details: "飲食：朝聖台南溫體生牛肉現淋熱湯的代表店！特選極致軟嫩溫體牛肉，高溫清湯沖下瞬間將肉汁鎖入，湯頭甘醇甜美，沾附豆瓣醬與薑絲再配上飽滿肉燥飯堪稱人間享受。", price: "$400" },
      { time: "19:00", title: "築馨居 (私房無菜單手路菜餐酒宴)", details: "飲食：隱藏於信義街百年老閩式厝身內的無菜單名店！品嚐精緻紅燒東坡肉、精燉老鴨湯與傳統香滑古早豆花。因古厝座位極珍貴，強烈建議提早21天前在線上預約確認。", price: "$900" },
      { time: "21:00", title: "折返中西區老宅民宿安息", details: "住宿：漫步經微醺朦朧的府城夜街返抵居所，享受純棉舒適被床與熱水溫潤淋浴，深沉熟睡補足飽滿精力。", price: "$2,500" }
    ]
  },
  {
    day: "Day 3",
    date: "4/5 (SUN)",
    title: "頂級藝文洗禮與雙城動態大跨越",
    tag: "歐陸文藝之美與海港夜流光",
    desc: "清晨沐浴於宏偉宮廷般的白色阿波羅大理石噴泉，隨後搭車速達高雄港都，享受精品頂級和牛，漫步極富科技未來感的灣區星光霓虹夜幕。",
    highlightImage: "https://lh3.googleusercontent.com/d/11Gt-2u7MGx5XQYOOQzDJ09JTaS7oluCr",
    imageCaption: "高雄旗後燈塔 (Cijin Lighthouse)：純白燈塔塔身於瑰麗的金色餘暉中靜看港灣浪濤，露台露天座點綴點點暖黃燈泡串，海天一色無比浪漫",
    colorTheme: "from-blue-500 to-indigo-600",
    textTheme: "text-blue-600",
    bgLight: "bg-blue-50/30",
    timeline: [
      { time: "09:30", title: "奇美博物館人文美學神殿之旅", details: "門票：欣賞矗立於碧綠池畔的巴洛克白色宏偉主體，漫步至入口壯觀的阿波羅大理石群體噴泉。特別參觀2026年度殿堂級藝術『古埃及法老特展』與大師西洋名畫。", price: "$580" },
      { time: "12:30", title: "十鼓仁糖文創園區刺激極限挑戰", details: "門票：廢棄老製糖廠幻化而成的夢幻娛樂堡壘！極速飛越的滑車、巨幅極限溜滑梯及空中飛索，更可觀摩宏觀、引人熱血沸騰的十鼓震撼擊鼓劇場演出。", price: "$509" },
      { time: "16:30", title: "鐵道雙城大移動：開抵港都高雄", details: "交通：自台南搭上自強或區間列車一路南下。倚窗俯瞰嘉南平原、漁光綠野直到高雄左營新站，接軌高捷馳往心儀旅館。", price: "$60" },
      { time: "19:00", title: "碳佐麻里 (亞洲頂尖精品燒肉宴)", details: "飲食：朝聖南部燒肉界的時尚清水模地標奢華名店！在當代建築水景環繞下，體驗頂級多汁冷藏和牛與香烤炭火串燒，肉香馥郁令人驚豔。", price: "$1,800" },
      { time: "21:00", title: "高雄港亞灣星級海景大飯店入住", details: "住宿：夜晚臨窗俯瞰絢麗愛河灣、駁二文創園區以及科技感十足、閃耀粉藍幻彩的流行音樂中心，感受完美港都旅宿驚嘆。 (連假特價)", price: "$3,500" }
    ]
  }
];

const TravelItinerary = () => {
  const [activeDayIndex, setActiveDayIndex] = React.useState(1); // Set Day 2 as active initially because of user's core focus!
  const currentDay = travelData[activeDayIndex];

  return (
    <div className="space-y-10">
      {/* Dynamic Day Toggler */}
      <div className="flex justify-center p-1.5 bg-gray-50 border border-gray-100 rounded-2xl max-w-lg mx-auto">
        {travelData.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveDayIndex(index)}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex flex-col items-center ${
              activeDayIndex === index
                ? "bg-white text-blue-600 shadow-sm border border-gray-100/50"
                : "text-gray-400 hover:text-gray-900"
            }`}
          >
            <span className="text-xs tracking-wider opacity-70">{item.day}</span>
            <span className="text-base mt-0.5">{item.date}</span>
          </button>
        ))}
      </div>

      {/* Detail Layout */}
      <motion.div
        key={activeDayIndex}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid md:grid-cols-12 gap-10 items-start"
      >
        {/* Left Side Timeline (7 Columns) */}
        <div className="md:col-span-7 space-y-6">
          <div className="border-l-2 border-blue-100 ml-4 py-2 space-y-8">
            {currentDay.timeline.map((event, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Node Line Marker */}
                <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform" />
                
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-blue-600 font-mono font-bold text-sm bg-blue-50/50 px-2.5 py-0.5 rounded-md">
                      {event.time}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      {event.price}
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-base text-gray-900 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {event.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-50/50 border border-gray-100 rounded-2xl flex justify-between items-center text-xs text-gray-400">
            <span>當日行程規劃：深度主題遊</span>
            <span>單日估算精緻費用：約 $3,600 ~ $4,500 (含高檔住宿)</span>
          </div>
        </div>

        {/* Right Side Visual/Description (5 Columns) */}
        <div className="md:col-span-5 space-y-6">
          <Card className="overflow-hidden p-0 border border-gray-100 bg-gray-50/50">
            <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
              <img
                src={currentDay.highlightImage}
                alt={currentDay.imageCaption}
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-gray-100 px-3 py-1 rounded-full text-xs font-extrabold text-gray-800 tracking-wide shadow-sm">
                精彩實拍地標
              </div>
            </div>
            <div className="p-6">
              <span className={`text-xs font-black uppercase tracking-widest ${currentDay.textTheme}`}>
                {currentDay.tag}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1.5 mb-2">
                {currentDay.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {currentDay.desc}
              </p>
              <div className="text-xs font-medium text-gray-500 bg-yellow-50/50 text-amber-700 p-3 rounded-xl border border-amber-100/30">
                📷 實景特寫：{currentDay.imageCaption}
              </div>
            </div>
          </Card>
        </div>
      </motion.div>

      {/* Bonus Journey Memories Grid - "另外幾張旅行圖片也加進去" */}
      <div className="pt-12 border-t border-gray-100/80">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <ImageIcon size={18} className="text-blue-600" /> 三天雙城寫意瞬間與生活隨拍（對應手記景點）
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "神農老街復古大紅燈影",
              url: "https://images.unsplash.com/photo-1549396555-3d7d35124115?auto=format&fit=crop&q=80&w=400"
            },
            {
              title: "四草綠意盎然生態水道",
              url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=400"
            },
            {
              title: "奇美博物館阿波羅噴泉",
              url: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=400"
            },
            {
              title: "高雄旗後燈塔露台暮色",
              url: "https://lh3.googleusercontent.com/d/11Gt-2u7MGx5XQYOOQzDJ09JTaS7oluCr"
            }
          ].map((item, idx) => (
            <div key={idx} className="group overflow-hidden rounded-2xl relative bg-gray-50 border border-gray-100/50 hover:-translate-y-1 transition-all">
              <div className="aspect-square w-full h-full overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 duration-300 transition-transform"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold leading-none">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRIP SUMMARY COMPONENT - "最後還有總結" */}
      <div className="pt-12 border-t border-gray-100/80">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
          {/* Subtly animated background pattern */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-blue-400 font-mono text-xs uppercase tracking-wider font-extrabold">🏆 旅程總結晶</span>
                <h3 className="text-2xl font-extrabold tracking-tight mt-1">台南·高雄 雙城精奢總結與反思</h3>
              </div>
              <div className="flex items-center gap-2 bg-blue-600/20 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-bold font-mono">
                🎯 奢華漫遊 · 兼顧性價比與美學
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-800">
                <p className="text-xs text-slate-400">總旅程天數</p>
                <p className="text-3xl font-black mt-1 text-white font-mono">3 <span className="text-xs font-normal">Days</span></p>
              </div>
              <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-800">
                <p className="text-xs text-slate-400">探訪核心地標</p>
                <p className="text-3xl font-black mt-1 text-white font-mono">15 <span className="text-xs font-normal">Spots</span></p>
              </div>
              <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-800">
                <p className="text-xs text-slate-400">精誠預算開支</p>
                <p className="text-3xl font-black mt-1 text-emerald-400 font-mono">$11,859 <span className="text-xs font-normal text-slate-400">TWD</span></p>
              </div>
              <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-800">
                <p className="text-xs text-slate-400">心靈充實度</p>
                <p className="text-3xl font-black mt-1 text-yellow-400 font-mono">100%</p>
              </div>
            </div>

            {/* Detailed Summary Analysis Text */}
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-sans">
              <p>
                本次規劃的 <strong>台南－高雄雙城奢華美學之旅</strong>，旨在打破走馬看花的傳統旅遊，追求 <span className="text-blue-400 font-semibold">「人文意境、自然生態、當代藝文與頂級味蕾」</span> 的大成融合。
              </p>
              <p>
                從首日沉醉於 <strong>神農古街與國華老鋪</strong> 的台南老派煙火氣，到次日探尋 <strong>四草紅樹林秘境隧道</strong> 與 <strong>安平榕根廢墟</strong> 的原始大自然傑作；再至最終日登臨 <strong>奇美博物館歐陸白色美學神殿</strong> 與 <strong>十鼓老糖廠鋼脈挑戰</strong>，並以 <strong>高雄亞灣愛河灣星港霓虹</strong> 寫下圓滿詩篇。
              </p>
              <p>
                本系列行程經過極其精密的動線與預算考量，門票花費合理（總共約 1,389 元即能體驗四草、安平、十鼓及奇美埃及特展），並將主要重心放進 <strong>「美食饗宴體驗（築馨居百年私廚與碳佐麻里精品燒肉）」</strong> 以及 <strong>「高品質星級/古蹟宿處享受」</strong> 之中。不僅讓身體與心智獲得完美的充電洗禮，更成就了無可取代的南部豐沛旅程回憶。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

        {/* Interactive Travel Footprint & Itinerary */}
        <section id="travel" className="mb-24">
          <SectionHeader title="南臺灣旅程足跡" icon={Compass} />
          
          <TravelItinerary />
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
