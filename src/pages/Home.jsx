import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <span className="text-cyan-500">❖</span> Campus Connect
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/dashboard" className="text-slate-600 hover:text-slate-900 transition">Discover</Link>
          <Link to="/login" className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition">
            Sign In
          </Link>
        </nav>
      </header>

      <main className="px-6 py-20 max-w-5xl mx-auto">
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-cyan-500 via-rose-500 to-amber-500 bg-clip-text text-transparent pb-1">
            Your campus.<br />Your people.<br />Your next move.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Discover student communities built around what you want to learn and do. 
            Collaborate, share ideas, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard" className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-md hover:opacity-90 transition">
              Explore Communities
            </Link>
            <Link to="/login" className="w-full sm:w-auto rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition">
              Join Campus Connect
            </Link>
          </div>
          
          <div className="mt-20 grid grid-cols-3 gap-8 border-y border-slate-200 py-10">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2 text-rose-500">40+</div>
              <div className="text-sm font-medium text-slate-500">Communities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2 text-emerald-500">2,500+</div>
              <div className="text-sm font-medium text-slate-500">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2 text-amber-500">120+</div>
              <div className="text-sm font-medium text-slate-500">Activities</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 text-slate-900">Find your circle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-8 shadow-sm">
              <div className="text-cyan-500 mb-4 text-2xl">⚡️</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Tech & Innovation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect with student developers, open-source contributors, and hardware enthusiasts.
              </p>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-rose-50/50 p-8 shadow-sm">
              <div className="text-rose-500 mb-4 text-2xl">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Creative Communities</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Join designers, artists, and writers collaborating on campus projects.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-8 shadow-sm">
              <div className="text-emerald-500 mb-4 text-2xl">🏃</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Sports & Wellness</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Find teammates, join campus leagues, and discover fitness groups.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-8 shadow-sm">
              <div className="text-amber-500 mb-4 text-2xl">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Startup & Career</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Meet student founders, network with alumni, and build your career.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
