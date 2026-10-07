export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Navbar (Tahap 1) */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center text-gray-800">
            <div className="font-bold text-xl tracking-tight">PortofolioKu</div>
            <div className="flex space-x-6 font-medium text-sm">
              <a href="#tentang" className="hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#keahlian" className="hover:text-blue-600 transition-colors">Keahlian</a>
              <a href="#proyek" className="hover:text-blue-600 transition-colors">Proyek</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section (Tahap 2) */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-4xl">
          Mahasiswa Teknik Informatika | <span className="text-blue-600">UI/UX Enthusiast</span> & Backend Developer.
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Mengembangkan aplikasi fungsional dengan antarmuka yang memanjakan mata.
        </p>
        <a href="#proyek" className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
          Lihat Proyek
        </a>
      </section>

      {/* Tentang Saya (Tahap 3) */}
      <section id="tentang" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tentang Saya</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Halo! Saya mahasiswa Teknik Informatika dengan passion besar menjembatani kebutuhan teknis dan pengalaman pengguna. Saat ini saya fokus mengembangkan keahlian di bidang Backend (Node.js & Express) serta modern Front-End dengan Next.js. Saya tidak hanya merancang antarmuka UI/UX yang indah, tetapi juga memastikan sistem di baliknya efisien. Dengan ketertarikan pada kepemimpinan, saya memastikan produk dieksekusi dengan baik dari ide hingga rilis.
          </p>
        </div>
      </section>

      {/* Keahlian (Tahap 3) */}
      <section id="keahlian" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Keahlian</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100">
              <span className="font-semibold text-gray-800">UI/UX Design</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100">
              <span className="font-semibold text-gray-800">Next.js / React</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100">
              <span className="font-semibold text-gray-800">Node.js & Express</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100">
              <span className="font-semibold text-gray-800">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Proyek Utama (Tahap 4) */}
      <section id="proyek" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Proyek Utama</h2>
          
          <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
            {/* Tempat Gambar UI */}
            <div className="w-full md:w-2/5 bg-gray-200 min-h-[300px] flex items-center justify-center">
              <span className="text-gray-400 font-medium">Gambar Preview UI</span>
            </div>
            
            {/* Detail Proyek */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistem Manajemen Perpustakaan</h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-semibold text-gray-800">Masalah: </span>
                  <span className="text-gray-600">Sulitnya melacak peminjaman buku manual.</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Peran & Teknologi: </span>
                  <span className="text-gray-600">Fullstack (Node.js, Express, Next.js).</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Hasil: </span>
                  <span className="text-gray-600">Platform terintegrasi dengan otomatisasi peminjaman dan pencatatan inventaris.</span>
                </div>
              </div>
              
              <div>
                <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Lihat di GitHub
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} PortofolioKu. Dibuat dengan Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
