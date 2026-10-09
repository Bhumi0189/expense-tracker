'use client'

import { FormEvent, Suspense, useState } from 'react'
import { ArrowRight, LockKeyhole, Wallet } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

function LoginPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [mode, setMode] = useState<'signin' | 'signup'>(searchParams.get('mode') === 'signup' ? 'signup' : 'signin')
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    router.push('/dashboard')
  }

  const isSignup = mode === 'signup'

  return <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12 text-slate-900"><section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50"><a href="/" className="mb-8 flex items-center gap-2.5"><span className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white"><Wallet className="size-5" /></span><span className="text-lg font-bold tracking-tight">Expenses Tracker</span></a><div className="mb-7"><p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">{isSignup ? 'Start your journey' : 'Welcome back'}</p><h1 className="text-3xl font-bold tracking-tight">{isSignup ? 'Create your account' : 'Sign in to your account'}</h1><p className="mt-2 text-sm leading-6 text-slate-500">{isSignup ? 'Build better financial habits with a clearer view of your money.' : 'Continue to your dashboard and keep your money organized.'}</p></div><div className="mb-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1" role="tablist" aria-label="Authentication mode"><button type="button" onClick={() => setMode('signin')} className={`rounded-lg px-3 py-2 text-sm font-bold transition ${!isSignup ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`} aria-selected={!isSignup}>Sign in</button><button type="button" onClick={() => setMode('signup')} className={`rounded-lg px-3 py-2 text-sm font-bold transition ${isSignup ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`} aria-selected={isSignup}>Get started free</button></div><form onSubmit={handleSubmit} className="flex flex-col gap-4">{isSignup && <label className="flex flex-col gap-2 text-sm font-semibold">Full name<input name="name" required autoComplete="name" placeholder="Alex Kumar" className="h-11 rounded-xl border border-slate-200 px-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" /></label>}<label className="flex flex-col gap-2 text-sm font-semibold">Email<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="h-11 rounded-xl border border-slate-200 px-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" /></label><label className="flex flex-col gap-2 text-sm font-semibold">Password<input name="password" type="password" required minLength={8} autoComplete={isSignup ? 'new-password' : 'current-password'} placeholder={isSignup ? 'At least 8 characters' : '••••••••'} className="h-11 rounded-xl border border-slate-200 px-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" /></label>{error && <p role="alert" className="text-sm text-red-600">{error}</p>}<button type="submit" className="mt-2 flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-700">{isSignup ? 'Create account' : 'Sign in'} <ArrowRight className="size-4" /></button></form><div className="mt-6 flex items-center justify-center gap-1 text-sm text-slate-500">{isSignup ? 'Already have an account?' : 'New to Expenses Tracker?'} <button type="button" onClick={() => setMode(isSignup ? 'signin' : 'signup')} className="font-bold text-blue-600 hover:text-blue-700">{isSignup ? 'Sign in' : 'Get started free'}</button></div><div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400"><LockKeyhole className="size-3.5" />Your financial data stays private</div></section></main>
}

export default function LoginPage() {
  return <Suspense fallback={<main className="min-h-screen bg-slate-50" />}><LoginPageContent /></Suspense>
}

