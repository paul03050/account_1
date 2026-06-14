import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
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

function genReport(completed: Set<string>, activeTab: PbcCategory | 'all') {
  const filtered = activeTab === 'all'
    ? pbcItems
    : pbcItems.filter((i) => i.category === activeTab)

  const done = filtered.filter((i) => completed.has(i.id))
  const now = new Date().toISOString().slice(0, 10)

  let md = `# PBC 檢查報告\n`
  md += `日期：${now}\n\n`
  md += `## 摘要\n\n`
  md += `- 全部項目：${filtered.length}\n`
  md += `- 已完成：${done.length}\n`
  md += `- 未完成：${filtered.length - done.length}\n`
  md += `- 完成率：${filtered.length ? Math.round((done.length / filtered.length) * 100) : 0}%\n\n`

  const byCategory = new Map<PbcCategory, typeof filtered>()
  filtered.forEach((item) => {
    const list = byCategory.get(item.category) ?? []
    list.push(item)
    byCategory.set(item.category, list)
  })

  for (const [cat, items] of byCategory) {
    const catDone = items.filter((i) => completed.has(i.id)).length
    md += `## ${categoryNames[cat] ?? cat}（${catDone}/${items.length} 完成）\n\n`
    for (const item of items) {
      const status = completed.has(item.id) ? 'x' : ' '
      md += `- [${status}] **${item.name}** (${item.riskLevel}風險)\n`
      if (!completed.has(item.id)) {
        md += `  - 稽核重點：${item.auditFocus.slice(0, 2).join('；')}\n`
        md += `  - 常見問題：${item.commonIssues.slice(0, 2).join('；')}\n`
      }
    }
    md += '\n'
  }

  md += `---\n自動產生於 ${now}\n`
  return md
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
  const ref = useRef<HTMLDialogElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (open) el.showModal()
    else el.close()
  }, [open])

  const report = useMemo(() => genReport(completed, activeTab), [completed, activeTab])

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

  return (
    <dialog ref={ref} className="modal" onClose={onClose}>
      <div className="modal-box max-w-3xl max-h-[80vh] overflow-y-auto">
        <h3 className="font-bold text-lg mb-2">📋 PBC 檢查報告</h3>
        <pre className="text-xs bg-base-200 p-4 rounded-box overflow-x-auto whitespace-pre-wrap leading-relaxed">{report}</pre>
        <div className="modal-action">
          <button className="btn btn-sm" onClick={onClose}>關閉</button>
          <button className="btn btn-sm btn-primary" onClick={handleCopy}>
            {copied ? '✅ 已複製' : '📋 複製報告'}
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>關閉</button>
      </form>
    </dialog>
  )
}
