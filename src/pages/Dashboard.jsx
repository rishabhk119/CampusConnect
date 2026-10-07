import { Link } from 'react-router-dom'
import { useCommunities } from '../hooks/useCommunities'
import CommunityCard from '../components/CommunityCard'

export default function Dashboard() {
  const { communities, loading, error, reloadCommunities } = useCommunities()
  
  // Mock user for UI presentation
  const user = { name: 'Student', email: 'student@university.edu', role: 'student' }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <span className="text-cyan-500 drop-shadow-sm">❖</span> Campus Connect
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-600">{user.email}</span>
            <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide bg-cyan-100 text-cyan-700 border border-cyan-200">
              {user.role}
            </span>
          </div>
          <Link 
            to="/login"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-100 hover:text-slate-900 transition"
          >
            Logout
          </Link>
        </div>
      </header>

      <main className="px-6 py-10 max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold mb-3 text-slate-900">Good to see you, {user.name}.</h1>
          <p className="text-lg text-slate-600">Discover communities built around what you want to learn and do.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-medium text-slate-500 mb-1">Communities</div>
            <div className="text-3xl font-black text-cyan-600">{communities.length}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-medium text-slate-500 mb-1">Campus activity</div>
            <div className="text-xl font-black text-emerald-500 flex items-center gap-2 mt-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              Active Now
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-900">Featured Communities</h2>
          <button 
            onClick={reloadCommunities}
            className="text-sm font-semibold text-cyan-600 hover:text-cyan-500 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-cyan-50 transition"
          >
            <span className="text-lg">↻</span> Reload Communities
          </button>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-16 text-center shadow-sm">
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full border-4 border-slate-100 border-t-cyan-500 animate-spin mb-6"></div>
              <p className="text-lg font-medium text-slate-600">Loading campus communities...</p>
            </div>
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-10 text-center shadow-sm">
            <div className="text-red-600 font-medium mb-5 text-lg">{error}</div>
            <button 
              onClick={reloadCommunities}
              className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white shadow-md hover:bg-red-500 transition"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map(community => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
