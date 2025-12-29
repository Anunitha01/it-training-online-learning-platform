export default function Intro() {
  return (
    <section className="pt-16 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#2D3663]">
            Empowering All Ages <br />
            with <span className="text-yellow-400">IT Skills</span> <br />
            for the <span className="text-[#2D3663]">Future</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-md">
            Interactive online courses in coding, data science, cybersecurity, and more. 
            Spark an interest in technology at any age!
          </p>
          <button className="mt-10 bg-[#1E6BFF] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all shadow-lg shadow-blue-200">
            Get Started 
            <span className="bg-yellow-400 rounded-full p-1 text-blue-900 text-xs">▶</span>
          </button>
        </div>

        {/* Hero Illustration Placeholder */}
        <div className="relative">
          <img src="/hero-illustration.png" alt="Learning illustration" className="w-full h-auto" />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-20 bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white grid grid-cols-1 md:grid-cols-3 gap-8 shadow-sm">
        <StatItem icon="👤" val="1,500+" label="Happy Students" />
        <StatItem icon="▶" val="200+" label="Fun & Engaging Courses" />
        <StatItem icon="⭐" val="98%" label="Parent & Learner Satisfaction" />
      </div>
    </section>
  );
}

function StatItem({ icon, val, label }) {
  return (
    <div className="flex items-center gap-4 justify-center">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">{icon}</div>
      <div>
        <div className="text-2xl font-bold text-slate-800">{val}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  );
}