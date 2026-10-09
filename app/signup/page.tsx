'use client'

import { FormEvent } from 'react'
import { ArrowRight, LockKeyhole, Wallet } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push('/dashboard')
  }

  return <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12 text-slate-900"><section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50"><a href="/" className="mb-8 flex items-center gap-2.5"><span className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white"><Wallet className="size-5" /></span><span className="text-lg font-bold tracking-tight">Expenses Tracker</span></a><div className="mb-7"><p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Start your journey</p><h1 className="text-3xl font-bold tracking-tight">Create your account</h1><p className="mt-2 text-sm leading-6 text-slate-500">Build better financial habits with a clearer view of your money.</p></div><form onSubmit={handleSubmit} className="flex flex-col gap-4"><label className="flex flex-col gap-2 text-sm font-semibold">Full name<input name="name" required autoComplete="name" placeholder="Alex Kumar" className="h-11 rounded-xl border border-slate-200 px-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" /></label><label className="flex flex-col gap-2 text-sm font-semibold">Email<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="h-11 rounded-xl border border-slate-200 px-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" /></label><label className="flex flex-col gap-2 text-sm font-semibold">Password<input name="password" type="password" required minLength={8} autoComplete="new-password" placeholder="At least 8 characters" className="h-11 rounded-xl border border-slate-200 px-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100" /></label><button type="submit" className="mt-2 flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-700">Create account <ArrowRight className="size-4" /></button></form><div className="mt-6 flex items-center justify-center gap-1 text-sm text-slate-500">Already have an account? <a href="/login" className="font-bold text-blue-600 hover:text-blue-700">Sign in</a></div><p className="mt-6 flex items-center justify-center gap-1.5 text-center text-xs text-slate-400"><LockKeyhole className="size-3.5" /> Your financial data is private and secure.</p></section></main>
}
