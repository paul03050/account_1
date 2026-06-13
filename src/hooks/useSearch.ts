import { useMemo } from 'react'
import type { Regulation } from '../types'

export function useSearch(regulations: Regulation[], query: string): Regulation[] {
  return useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) return regulations

    const keywords = trimmed.split(/\s+/).filter(Boolean)

    return regulations.filter((reg) => {
      const searchable = [
        reg.title,
        reg.summary,
        reg.content,
        ...reg.tags,
        reg.source,
      ]
        .join(' ')
        .toLowerCase()

      return keywords.every((kw) => searchable.includes(kw))
    })
  }, [regulations, query])
}

export function getMatchSnippet(content: string, query: string, maxLen = 80): string {
  if (!query.trim()) return content.slice(0, maxLen) + '…'

  const lower = content.toLowerCase()
  const idx = lower.indexOf(query.trim().toLowerCase())

  if (idx === -1) return content.slice(0, maxLen) + '…'

  const start = Math.max(0, idx - Math.floor((maxLen - query.length) / 2))
  const end = Math.min(content.length, start + maxLen)

  let snippet = content.slice(start, end)
  if (start > 0) snippet = '…' + snippet
  if (end < content.length) snippet += '…'

  return snippet
}
