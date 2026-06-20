import { useSearchParams, Link } from 'react-router-dom'
import { useState, useMemo, useCallback } from 'react'
import { regulations } from '../data/regulations'
import { categories } from '../data/categories'
import { useSearch, getMatchSnippet } from '../hooks/useSearch'
import TagCloud from '../components/TagCloud'
import Pagination from '../components/Pagination'
import FilterBadges from '../components/FilterBadges'

const PAGE_SIZE = 10
type SortKey = 'date-desc' | 'date-asc' | 'title'

export default function Laws() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryId = searchParams.get('category')
  const subcategoryId = searchParams.get('subcategory')
  const query = searchParams.get('q') ?? ''
  const selectedTags = searchParams.get('tags')?.split(',').filter(Boolean) ?? []
  const page = Math.max(1, Number(searchParams.get('page')) || 1)
  const [sort, setSort] = useState<SortKey>('date-desc')

  const category = categories.find((c) => c.id === categoryId)
  const subcategory = category?.subcategories?.find((s) => s.id === subcategoryId)

  const updateParams = useCallback(
    (updates: Record<string, string | null>) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev)
        Object.entries(updates).forEach(([key, val]) => {
          if (val === null || val === '') next.delete(key)
          else next.set(key, val)
        })
        return next
      })
    },
    [setSearchParams]
  )

  const catFiltered = useMemo(() => {
    return regulations.filter((r) => {
      if (subcategoryId) return r.subcategoryId === subcategoryId
      if (categoryId) return r.categoryId === categoryId
      return true
    })
  }, [categoryId, subcategoryId])

  const searched = useSearch(catFiltered, query)

  const tagFiltered = useMemo(() => {
    if (selectedTags.length === 0) return searched
    return searched.filter((r) =>
      selectedTags.every((t) => r.tags.includes(t))
    )
  }, [searched, selectedTags])

  const sorted = useMemo(() => {
    const copy = [...tagFiltered]
    switch (sort) {
      case 'date-asc':
        return copy.sort(
          (a, b) => a.effectiveDate.localeCompare(b.effectiveDate)
        )
      case 'date-desc':
        return copy.sort(
          (a, b) => b.effectiveDate.localeCompare(a.effectiveDate)
        )
      case 'title':
        return copy.sort((a, b) => a.title.localeCompare(b.title, 'zh-TW'))
      default:
        return copy
    }
  }, [tagFiltered, sort])

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const pageItems = sorted.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  const handleTagToggle = (tag: string) => {
    const next = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag]
    updateParams({ tags: next.length > 0 ? next.join(',') : null, page: '1' })
  }

  const handlePageChange = (p: number) => {
    updateParams({ page: String(p) })
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          {query ? (
            <>搜尋「{query}」</>
          ) : subcategory ? (
            <>
              <span className="text-lg">{category?.icon}</span> {category?.name} / {subcategory.name}
            </>
          ) : category ? (
            <>
              <span className="text-lg">{category.icon}</span> {category.name}
            </>
          ) : (
            '所有法規'
          )}
        </h2>
        <p className="text-base-content/60 text-sm mt-1">
          {query
            ? `找到 ${sorted.length} 筆符合「${query}」的結果`
            : `共 ${sorted.length} 筆法規`}
        </p>
      </div>

      <TagCloud
        regulations={catFiltered}
        selectedTags={selectedTags}
        onToggle={handleTagToggle}
      />

      <FilterBadges onClearAll={() => setSearchParams({})}>
        {query && (
          <span className="badge badge-ghost gap-1">
            搜尋：{query}
            <button
              className="ml-1 text-xs cursor-pointer"
              onClick={() => updateParams({ q: null, page: '1' })}
            >
              ✕
            </button>
          </span>
        )}
        {category && !subcategoryId && (
          <span className="badge badge-ghost gap-1">
            分類：{category.name}
            <button
              className="ml-1 text-xs cursor-pointer"
              onClick={() => updateParams({ category: null, subcategory: null, page: '1' })}
            >
              ✕
            </button>
          </span>
        )}
        {subcategory && (
          <span className="badge badge-ghost gap-1">
            子分類：{subcategory.name}
            <button
              className="ml-1 text-xs cursor-pointer"
              onClick={() => updateParams({ subcategory: null, page: '1' })}
            >
              ✕
            </button>
          </span>
        )}
        {selectedTags.map((tag) => (
          <span key={tag} className="badge badge-primary gap-1">
            {tag}
            <button
              className="ml-1 text-xs cursor-pointer"
              onClick={() => handleTagToggle(tag)}
            >
              ✕
            </button>
          </span>
        ))}
      </FilterBadges>

      <div className="flex items-center justify-end mb-4">
        <select
          className="select select-bordered select-sm w-full sm:w-auto"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
        >
          <option value="date-desc">生效日期（新→舊）</option>
          <option value="date-asc">生效日期（舊→新）</option>
          <option value="title">標題排序</option>
        </select>
      </div>

      {pageItems.length === 0 ? (
        <div className="alert">
          <span>
            {query
              ? `找不到與「${query}」相關的法規，請嘗試其他關鍵字。`
              : '此分類尚無法規資料。'}
          </span>
        </div>
      ) : (
        <div className="space-y-3">
          {pageItems.map((reg) => (
            <Link
              key={reg.id}
              to={`/laws/${reg.id}`}
              className="block card bg-base-100 border border-base-300 hover:border-primary transition-colors"
            >
              <div className="card-body py-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium text-lg">{reg.title}</h3>
                  <span className="badge badge-outline badge-sm">
                    v{reg.version}
                  </span>
                </div>
                <p className="text-sm text-base-content/70 line-clamp-2">
                  {query ? getMatchSnippet(reg.summary, query) : reg.summary}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {reg.tags.map((tag) => (
                    <span key={tag} className="badge badge-ghost badge-sm">
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-base-content/40 ml-auto">
                    生效日：{reg.effectiveDate}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <Pagination
        currentPage={safePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
