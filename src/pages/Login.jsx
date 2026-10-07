import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState({ text: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email.trim() || !password.trim()) {
      setMessage({ text: 'Enter your email and password.', type: 'error' })
      return
    }

    setMessage({ text: `Form submitted successfully for: ${email}`, type: 'success' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 bg-gradient-to-br from-cyan-50 via-white to-rose-50">
      <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200">
        <div className="mb-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white mb-4 text-2xl shadow-lg shadow-cyan-200">
            ❖
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back</h1>
          <p className="text-slate-500 text-sm">Sign in to access your campus community.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition"
              placeholder="name@university.edu"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition"
              placeholder="••••••••"
            />
          </div>

          {message.text && (
            <div className={`rounded-xl p-4 text-sm font-medium ${
              message.type === 'error' ? 'bg-red-50 text-red-600 border border-red-100' : 
              'bg-emerald-50 text-emerald-700 border border-emerald-100'
            }`}>
              {message.text}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-4 font-bold text-white shadow-md shadow-cyan-500/20 hover:opacity-90 transition mt-4"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  )
}
