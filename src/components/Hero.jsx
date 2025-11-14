import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[85vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 grid lg:grid-cols-2 items-center gap-8">
        <div>
          <p className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-white/70 px-3 py-1 rounded-full border border-white/40 shadow-sm">
            AI/ML Student Portfolio
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Second-year B.Tech (AIML)</span>
            <br /> Bharati Vidyapeeth College of Engineering, Navi Mumbai
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-2xl">
            Building strong foundations in programming, data structures, machine learning, and problem-solving. Actively creating academic and personal projects to sharpen practical skills in AI/ML and software development.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/80 backdrop-blur border border-white/50 text-gray-900 font-semibold shadow hover:bg-white">Contact</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-radial from-white/0 via-white/0 to-white/0 pointer-events-none" />
          <div className="relative bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl p-6 ring-1 ring-black/5">
            <ul className="grid gap-3 text-sm text-gray-700">
              <li><span className="font-semibold">CGPA (1st Year):</span> 9.52</li>
              <li><span className="font-semibold">Skills:</span> Python, SQL, DSA in C</li>
              <li><span className="font-semibold">Interests:</span> Applied ML, Data Analytics, Web Dev</li>
              <li><span className="font-semibold">Certifications:</span> AWS Architecture</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/90" />
    </section>
  );
}
