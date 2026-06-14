import { useState, useCallback } from 'react'
import { pbcItems } from '../data/pbc'
import type { PbcCategory } from '../types'

const categoryNames: Record<PbcCategory, string> = {
  'basic-info': '基本資料',
  'cash-bank': '貨幣資金',
  'ar-revenue': '應收帳款/收入',
  inventory: '存貨',
  'fixed-assets': '固定資產',
  'ap-procurement': '應付帳款/採購',
  'expense-payroll': '費用/薪資',
  'equity-related-party': '股權/關係人',
  'tax-other': '稅務/其他',
}

export default function PbcExportModal({
  open,
  onClose,
  completed,
  activeTab,
}: {
  open: boolean
  onClose: () => void
  completed: Set<string>
  activeTab: PbcCategory | 'all'
}) {
  const [copied, setCopied] = useState(false)

  const filtered = activeTab === 'all'
    ? pbcItems
    : pbcItems.filter((i) => i.category === activeTab)

  const done = filtered.filter((i) => completed.has(i.id))
  const now = new Date().toISOString().slice(0, 10)

  let report = ''
  try {
    report = `# PBC 檢查報告
日期：${now}

## 摘要

- 全部項目：${filtered.length}
- 已完成：${done.length}
- 未完成：${filtered.length - done.length}
- 完成率：${filtered.length ? Math.round((done.length / filtered.length) * 100) : 0}%

`
    const byCategory = new Map<PbcCategory, typeof filtered>()
    filtered.forEach((item) => {
      const list = byCategory.get(item.category) ?? []
      list.push(item)
      byCategory.set(item.category, list)
    })

    for (const [cat, items] of byCategory) {
      const catDone = items.filter((i) => completed.has(i.id)).length
      report += `## ${categoryNames[cat] ?? cat}（${catDone}/${items.length} 完成）\n\n`
      for (const item of items) {
        const status = completed.has(item.id) ? 'x' : ' '
        report += `- [${status}] **${item.name}** (${item.riskLevel}風險)\n`
        if (!completed.has(item.id)) {
          report += `  - 稽核重點：${item.auditFocus.slice(0, 2).join('；')}\n`
          report += `  - 常見問題：${item.commonIssues.slice(0, 2).join('；')}\n`
        }
      }
      report += '\n'
    }

    report += `---\n自動產生於 ${now}\n`
  } catch {
    report = '⚠️ 報表產生失敗，請稍後再試。'
  }

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(report)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = report
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [report])

  const handleBackdrop = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose]
  )

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleBackdrop}
    >
      <div className="bg-base-100 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] flex flex-col mx-4">
        <div className="flex items-center justify-between px-6 py-4 border-b border-base-300">
          <h3 className="font-bold text-lg">📋 PBC 檢查報告</h3>
          <button className="btn btn-sm btn-ghost btn-square" onClick={onClose}>✕</button>
        </div>
        <pre className="flex-1 overflow-y-auto p-6 text-xs leading-relaxed whitespace-pre-wrap font-mono">
          {report}
        </pre>
        <div className="flex justify-end gap-2 px-6 py-3 border-t border-base-300 bg-base-200 rounded-b-2xl">
          <button className="btn btn-sm" onClick={onClose}>關閉</button>
          <button className="btn btn-sm btn-primary" onClick={handleCopy}>
            {copied ? '✅ 已複製' : '📋 複製報告'}
          </button>
        </div>
      </div>
    </div>
  )
}
