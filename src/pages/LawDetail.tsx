import { useParams, Link } from 'react-router-dom'
import { regulations } from '../data/regulations'
import { summaries } from '../data/summaries'
import { categories } from '../data/categories'

export default function LawDetail() {
  const { id } = useParams<{ id: string }>()
  const regulation = regulations.find((r) => r.id === id)
  const summary = summaries.find((s) => s.regulationId === id)

  if (!regulation) {
    return (
      <div className="alert alert-error">
        <span>找不到該法規。</span>
        <Link to="/laws" className="link">
          返回法規列表
        </Link>
      </div>
    )
  }

  const category = categories.find((c) => c.id === regulation.categoryId)

  return (
    <div>
      <div className="breadcrumbs text-sm mb-4">
        <ul>
          <li>
            <Link to="/laws">法規列表</Link>
          </li>
          <li>
            <Link to={`/laws?category=${regulation.categoryId}`}>
              {category?.name}
            </Link>
          </li>
          <li>{regulation.title}</li>
        </ul>
      </div>

      <div className="card bg-base-100 border border-base-300 mb-6">
        <div className="card-body">
          <div className="flex items-start justify-between">
            <h2 className="card-title text-2xl">{regulation.title}</h2>
            <span className="badge badge-lg">
              v{regulation.version}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {regulation.tags.map((tag) => (
              <span key={tag} className="badge badge-primary badge-outline">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-base-content/50">發布日期：</span>
              {regulation.publishDate}
            </div>
            <div>
              <span className="text-base-content/50">生效日期：</span>
              {regulation.effectiveDate}
            </div>
            <div>
              <span className="text-base-content/50">來源：</span>
              <a
                href={regulation.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {regulation.source}
              </a>
            </div>
          </div>
        </div>
      </div>

      {summary && (
        <div className="card bg-base-100 border border-base-300 mb-6">
          <div className="card-body">
            <h3 className="card-title text-lg">📌 稽核重點摘要</h3>
            <div className="mt-2">
              <h4 className="font-medium text-sm text-base-content/70 mb-2">
                關鍵重點
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {summary.keyPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-sm text-base-content/70 mb-2">
                查核重點
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {summary.auditFocus.map((focus, i) => (
                  <li key={i}>{focus}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-sm text-base-content/70 mb-2">
                相關準則
              </h4>
              <div className="flex gap-2">
                {summary.relatedStandards.map((s) => (
                  <span key={s} className="badge badge-ghost">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="card bg-base-100 border border-base-300">
        <div className="card-body">
          <h3 className="card-title text-lg">📄 法規全文</h3>
          <div className="mt-2 prose max-w-none text-sm whitespace-pre-wrap font-mono bg-base-200 p-4 rounded-box">
            {regulation.content}
          </div>
        </div>
      </div>
    </div>
  )
}
