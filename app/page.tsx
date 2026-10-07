import React from 'react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-gray-200 selection:bg-blue-500/30 font-sans">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/70 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tighter text-white">
            Portofolio<span className="text-blue-500">.Ku</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#tentang" className="text-gray-400 hover:text-white transition-colors">Tentang</a>
            <a href="#keahlian" className="text-gray-400 hover:text-white transition-colors">Keahlian</a>
            <a href="#proyek" className="text-gray-400 hover:text-white transition-colors">Proyek</a>
          </div>
          <a href="#proyek" className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95">
            Hubungi Saya
          </a>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span>Tersedia untuk proyek baru</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Mahasiswa Teknik Informatika <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
              UI/UX Enthusiast
            </span> & Backend Dev.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Mengembangkan aplikasi fungsional dengan antarmuka yang memanjakan mata. Menjembatani logika sistem yang kompleks dengan pengalaman pengguna yang mulus.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
            <a href="#proyek" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
              Lihat Karya Saya
            </a>
            <a href="#tentang" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all hover:scale-105">
              Kenali Lebih Lanjut
            </a>
          </div>
        </section>

        {/* Tentang Saya */}
        <section id="tentang" className="py-32 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Di Balik Layar</h2>
              <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              <p className="text-gray-400 leading-relaxed text-lg">
                Halo! Saya mahasiswa Teknik Informatika dengan passion besar menjembatani kebutuhan teknis dan pengalaman pengguna. Saat ini saya fokus mengembangkan keahlian di bidang Backend (Node.js & Express) serta modern Front-End dengan Next.js.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Saya tidak hanya merancang antarmuka UI/UX yang indah, tetapi juga memastikan sistem di baliknya efisien. Dengan ketertarikan pada kepemimpinan, saya memastikan produk dieksekusi dengan baik dari ide hingga rilis.
              </p>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
               <div className="relative h-96 bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center p-8 group-hover:border-white/20 transition-all duration-500">
                  {/* Abstract Code/Design Graphic */}
                  <div className="w-full h-full border border-white/5 rounded-xl bg-[#151515] flex items-center justify-center flex-col gap-6 relative overflow-hidden">
                     {/* Decorative background lines */}
                     <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                     <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-500 animate-pulse shadow-[0_0_50px_rgba(59,130,246,0.5)] z-10"></div>
                     <div className="w-40 h-4 rounded-full bg-white/10 z-10"></div>
                     <div className="w-24 h-4 rounded-full bg-white/10 z-10"></div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Keahlian */}
        <section id="keahlian" className="py-32 scroll-mt-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Gudang Keahlian</h2>
            <p className="text-gray-400">Teknologi dan alat yang saya gunakan setiap hari.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "UI/UX Design", icon: "✨", color: "from-pink-500/20 to-rose-500/20" },
              { title: "Next.js / React", icon: "⚛️", color: "from-cyan-500/20 to-blue-500/20" },
              { title: "Node.js & Express", icon: "🚀", color: "from-green-500/20 to-emerald-500/20" },
              { title: "Tailwind CSS", icon: "🎨", color: "from-sky-500/20 to-indigo-500/20" }
            ].map((skill, idx) => (
              <div key={idx} className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative h-full bg-[#0a0a0a] p-8 rounded-[15px] flex flex-col items-center justify-center gap-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300 block">{skill.icon}</span>
                  <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">{skill.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proyek Utama */}
        <section id="proyek" className="py-32 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Proyek Unggulan</h2>
          
          <div className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative flex flex-col lg:flex-row">
              {/* Image Side */}
              <div className="w-full lg:w-1/2 min-h-[400px] bg-[#0c0c0c] border-b lg:border-b-0 lg:border-r border-white/5 relative overflow-hidden flex items-center justify-center p-12">
                {/* Mockup Window */}
                <div className="w-full h-full max-h-[300px] bg-[#151515] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-all duration-700">
                   {/* Window Header */}
                   <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                   </div>
                   {/* Window Body */}
                   <div className="flex-1 p-6 flex flex-col gap-4">
                      <div className="w-1/3 h-4 bg-white/10 rounded-full mb-2"></div>
                      <div className="w-full h-12 bg-white/5 rounded-lg"></div>
                      <div className="w-full h-12 bg-white/5 rounded-lg"></div>
                      <div className="w-2/3 h-12 bg-white/5 rounded-lg"></div>
                   </div>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20">Node.js</span>
                  <span className="px-3 py-1 rounded-full bg-gray-500/10 text-gray-300 text-xs font-semibold border border-gray-500/20">Next.js</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">React</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6">Sistem Manajemen Perpustakaan</h3>
                
                <div className="space-y-6 mb-10 text-gray-400 leading-relaxed">
                  <div>
                    <strong className="text-gray-200 block mb-1">Masalah:</strong>
                    Sulitnya melacak peminjaman buku secara manual dan rentan kesalahan pencatatan.
                  </div>
                  <div>
                    <strong className="text-gray-200 block mb-1">Peran & Solusi:</strong>
                    Fullstack Developer. Membangun platform terintegrasi dengan otomatisasi peminjaman dan pencatatan inventaris.
                  </div>
                </div>
                
                <div>
                  <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                    <span>Lihat di GitHub</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#050505] relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} PortofolioKu. Crafted with Next.js.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
