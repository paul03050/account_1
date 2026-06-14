import { useState, useEffect, useMemo, useCallback } from 'react'
import { pbcItems } from '../data/pbc'
import type { PbcCategory } from '../types'
import PbcExportModal from '../components/PbcExportModal'

const categoryTabs: { key: PbcCategory | 'all'; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'basic-info', label: '基本資料' },
  { key: 'cash-bank', label: '貨幣資金' },
  { key: 'ar-revenue', label: '應收帳款/收入' },
  { key: 'inventory', label: '存貨' },
  { key: 'fixed-assets', label: '固定資產' },
  { key: 'ap-procurement', label: '應付帳款/採購' },
  { key: 'expense-payroll', label: '費用/薪資' },
  { key: 'equity-related-party', label: '股權/關係人' },
  { key: 'tax-other', label: '稅務/其他' },
]

const riskLevels = [
  { key: 'all' as const, label: '全部', color: '' },
  { key: '高' as const, label: '高風險', color: 'badge-error' },
  { key: '中' as const, label: '中風險', color: 'badge-warning' },
  { key: '低' as const, label: '低風險', color: 'badge-success' },
]

function getRiskBadge(level: string) {
  switch (level) {
    case '高': return 'badge-error'
    case '中': return 'badge-warning'
    case '低': return 'badge-success'
    default: return 'badge-ghost'
  }
}

function getCategoryName(cat: PbcCategory) {
  const tab = categoryTabs.find((t) => t.key === cat)
  return tab?.label ?? cat
}

export default function PbcAnalysis() {
  const [activeTab, setActiveTab] = useState<PbcCategory | 'all'>('all')
  const [riskFilter, setRiskFilter] = useState<'all' | '高' | '中' | '低'>('all')
  const [search, setSearch] = useState('')
  const [completed, setCompleted] = useState<Set<string>>(new Set())
  const [showExport, setShowExport] = useState(false)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('pbc-progress')
      if (saved) setCompleted(new Set(JSON.parse(saved)))
    } catch { /* ignore */ }
  }, [])

  const toggleItem = useCallback((id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      localStorage.setItem('pbc-progress', JSON.stringify([...next]))
      return next
    })
  }, [])

  const filtered = useMemo(() => {
    return pbcItems.filter((item) => {
      if (activeTab !== 'all' && item.category !== activeTab) return false
      if (riskFilter !== 'all' && item.riskLevel !== riskFilter) return false
      if (search && !item.name.includes(search) &&
          !item.auditFocus.some((f) => f.includes(search)) &&
          !item.commonIssues.some((f) => f.includes(search)))
        return false
      return true
    })
  }, [activeTab, riskFilter, search])

  const completedCount = filtered.filter((i) => completed.has(i.id)).length
  const totalCount = filtered.length
  const progressPct = totalCount ? Math.round((completedCount / totalCount) * 100) : 0

  const summaryByCategory = useMemo(() => {
    const cats = new Map<PbcCategory, { total: number; done: number }>()
    const source = activeTab === 'all' ? pbcItems : pbcItems.filter((i) => i.category === activeTab)
    source.forEach((item) => {
      const prev = cats.get(item.category) ?? { total: 0, done: 0 }
      prev.total++
      if (completed.has(item.id)) prev.done++
      cats.set(item.category, prev)
    })
    return [...cats.entries()]
  }, [completed, activeTab])

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-bold">📂 PBC 分析工具</h2>
          <p className="text-sm text-base-content/60">
            對照 PBC 清單逐項檢查，掌握稽核重點與潛在問題
          </p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => setShowExport(true)}>
          📥 匯出檢查報告
        </button>
      </div>

      {/* Progress bar */}
      <div className="bg-base-200 rounded-box p-4 mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">
            進度：{completedCount} / {totalCount} 完成
          </span>
          <span className="text-sm text-base-content/60">{progressPct}%</span>
        </div>
        <progress
          className="progress progress-primary w-full"
          value={totalCount ? completedCount : 0}
          max={totalCount || 1}
        />
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-base-content/50">
          {summaryByCategory.map(([cat, { total, done }]) => (
            <span key={cat}>
              {getCategoryName(cat)}: {done}/{total}
            </span>
          ))}
        </div>
      </div>

      {/* Category tabs */}
      <div className="tabs tabs-box mb-3 overflow-x-auto flex-nowrap">
        {categoryTabs.map((tab) => (
          <button
            key={tab.key}
            className={`tab tab-sm whitespace-nowrap ${activeTab === tab.key ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Risk filter + search */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {riskLevels.map((rl) => (
          <button
            key={rl.key}
            className={`badge ${rl.color} badge-sm cursor-pointer ${riskFilter === rl.key ? 'badge-lg border-2 border-base-content' : ''}`}
            onClick={() => setRiskFilter(rl.key)}
          >
            {rl.label}
          </button>
        ))}
        <div className="divider divider-horizontal mx-1" />
        <input
          type="text"
          placeholder="搜尋項目名稱、稽核重點或常見問題⋯"
          className="input input-bordered input-sm flex-1 min-w-[200px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className="btn btn-ghost btn-xs" onClick={() => setSearch('')}>✕ 清除</button>
        )}
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="alert">
          <span>沒有符合條件的 PBC 項目。</span>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((item) => {
            const isDone = completed.has(item.id)
            const isExpanded = expandedCard === item.id

            return (
              <div
                key={item.id}
                onClick={() => {
                  setExpandedCard(isExpanded ? null : item.id)
                  toggleItem(item.id)
                }}
                className={`card bg-base-100 border transition-all duration-300 cursor-pointer ${
                  isDone
                    ? 'border-success border-2 bg-success/5 shadow-md'
                    : 'border-base-300 shadow-sm'
                }`}
              >
                <div className="card-body py-3 px-4">
                  <div className="flex items-start gap-3">
                    {isDone && (
                      <span className="mt-0.5 text-lg flex-shrink-0">✅</span>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-2">
                        <h3 className={`font-medium ${isDone ? 'line-through' : ''}`}>
                          {item.name}
                        </h3>
                        <span className={`badge badge-sm ${getRiskBadge(item.riskLevel)}`}>
                          {item.riskLevel}風險
                        </span>
                        <span className="badge badge-ghost badge-sm">{item.erpModule}</span>
                      </div>

                      {/* Department tags */}
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.relatedDepartments.map((dept) => (
                          <span key={dept} className="badge badge-outline badge-xs">{dept}</span>
                        ))}
                      </div>

                      {/* Expanded content */}
                      {isExpanded && (
                        <div className="mt-3 space-y-3 text-sm">
                          {/* Audit focus */}
                          <div>
                            <span className="font-medium text-warning">🔍 稽核重點</span>
                            <ul className="list-disc list-inside mt-1 text-base-content/70 space-y-0.5">
                              {item.auditFocus.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Common issues */}
                          <div>
                            <span className="font-medium text-error">⚠️ 常見問題</span>
                            <ul className="list-disc list-inside mt-1 text-base-content/70 space-y-0.5">
                              {item.commonIssues.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Related laws */}
                          {item.relatedLaws.length > 0 && (
                            <div>
                              <span className="font-medium text-info">📜 相關法條</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {item.relatedLaws.map((law, i) => (
                                  <a
                                    key={i}
                                    href={law.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="badge badge-ghost badge-sm hover:badge-primary gap-1"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {law.name}
                                    <span className="text-xs">↗</span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Related reports */}
                          {item.relatedReports.length > 0 && (
                            <div>
                              <span className="font-medium text-secondary">📊 關聯報表</span>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {item.relatedReports.map((r, i) => (
                                  <span key={i} className="badge badge-outline badge-xs">{r}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <PbcExportModal
        open={showExport}
        onClose={() => setShowExport(false)}
        completed={completed}
        activeTab={activeTab}
      />
    </div>
  )
}
