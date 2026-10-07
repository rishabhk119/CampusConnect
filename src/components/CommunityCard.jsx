export default function CommunityCard({ community }) {
  const styles = {
    cyan: 'border-cyan-200 bg-cyan-50 text-cyan-600',
    rose: 'border-rose-200 bg-rose-50 text-rose-600',
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-600',
    amber: 'border-amber-200 bg-amber-50 text-amber-600'
  }

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${styles[community.accent]}`}>
          {community.category}
        </span>
        <span className="text-lg">✦</span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-900">{community.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{community.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">{community.members}</span>
        <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition">
          Explore
        </button>
      </div>
    </article>
  )
}
