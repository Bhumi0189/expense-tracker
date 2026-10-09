'use client'

import Link from 'next/link'
import { ArrowLeft, BarChart3, Bell, CircleDollarSign, CreditCard, LayoutDashboard, Settings, Target, TrendingUp, Wallet } from 'lucide-react'

const modules: Record<string, { title: string; description: string; icon: typeof Wallet; items: string[] }> = {
  transactions: { title: 'Transactions', description: 'Search, filter, and manage every income and expense in one place.', icon: CreditCard, items: ['Add income or expense', 'Filter by category and date', 'Export transaction history'] },
  budgets: { title: 'Budgets', description: 'Stay ahead of spending with clear monthly and category budgets.', icon: BarChart3, items: ['Create monthly budgets', 'Track category limits', 'Get threshold warnings'] },
  categories: { title: 'Categories', description: 'Organize your money with categories that match your life.', icon: CircleDollarSign, items: ['Manage expense categories', 'Create custom labels', 'Review category totals'] },
  reports: { title: 'Reports & Analytics', description: 'Understand your cash flow with focused financial insights.', icon: TrendingUp, items: ['Income versus expenses', 'Spending trends', 'Monthly comparisons'] },
  'savings-goals': { title: 'Savings Goals', description: 'Turn plans into progress with visible, motivating savings goals.', icon: Target, items: ['Set a target amount', 'Track contributions', 'Monitor target dates'] },
  reminders: { title: 'Reminders', description: 'Keep your financial habits consistent with helpful reminders.', icon: Bell, items: ['Review upcoming reminders', 'Schedule budget reviews', 'Manage notifications'] },
  settings: { title: 'Settings', description: 'Personalize your Expenses Tracker experience.', icon: Settings, items: ['Currency and preferences', 'Appearance settings', 'Privacy controls'] },
}

export default function ModulePage({ params }: { params: { section: string } }) {
  const module = modules[params.section] ?? modules.transactions
  const Icon = module.icon
  return <main className="min-h-screen bg-[#f6f8fc] text-slate-900 dark:bg-slate-950 dark:text-white">
    <header className="border-b border-slate-200 bg-white/90 px-5 py-5 backdrop-blur dark:border-white/10 dark:bg-slate-950/90 sm:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between"><Link href="/dashboard" className="flex items-center gap-3 font-bold"><span className="flex size-10 items-center justify-center rounded-2xl bg-blue-600 text-white"><Wallet className="size-5" /></span>Expenses Tracker</Link><Link href="/dashboard" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"><ArrowLeft className="size-4" />Back to dashboard</Link></div>
    </header>
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-10"><div className="max-w-2xl"><span className="flex size-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300"><Icon className="size-7" /></span><p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Expenses Tracker module</p><h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{module.title}</h1><p className="mt-5 text-lg leading-8 text-slate-500 dark:text-slate-400">{module.description}</p></div><div className="mt-12 grid gap-4 md:grid-cols-3">{module.items.map((item, index) => <article key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900"><span className="text-sm font-bold text-blue-600">0{index + 1}</span><h2 className="mt-8 font-bold">{item}</h2><p className="mt-2 text-sm text-slate-500">This workspace is ready for your financial data.</p></article>)}</div></section>
  </main>
}
