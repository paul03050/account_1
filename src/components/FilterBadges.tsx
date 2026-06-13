export default function FilterBadges({
  children,
  onClearAll,
}: {
  children: React.ReactNode
  onClearAll: () => void
}) {
  const count = Array.isArray(children)
    ? children.filter(Boolean).length
    : children
      ? 1
      : 0

  if (count === 0) return null

  return (
    <div className="flex items-center gap-2 mb-4 flex-wrap">
      <span className="text-xs text-base-content/50">篩選條件：</span>
      {children}
      <button
        className="btn btn-ghost btn-xs text-primary"
        onClick={onClearAll}
      >
        清除全部
      </button>
    </div>
  )
}
