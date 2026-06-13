import type { Regulation } from '../types'

export default function TagCloud({
  regulations,
  selectedTags,
  onToggle,
}: {
  regulations: Regulation[]
  selectedTags: string[]
  onToggle: (tag: string) => void
}) {
  const tagCounts = new Map<string, number>()

  regulations.forEach((reg) => {
    reg.tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1)
    })
  })

  const sorted = [...tagCounts.entries()].sort((a, b) => b[1] - a[1])

  if (sorted.length === 0) return null

  return (
    <div className="flex flex-wrap gap-1.5 mb-4">
      {sorted.map(([tag, count]) => {
        const isSelected = selectedTags.includes(tag)
        return (
          <button
            key={tag}
            onClick={() => onToggle(tag)}
            className={`badge badge-sm cursor-pointer transition-all ${
              isSelected ? 'badge-primary' : 'badge-ghost hover:badge-outline'
            }`}
          >
            {tag} {count}
          </button>
        )
      })}
    </div>
  )
}
