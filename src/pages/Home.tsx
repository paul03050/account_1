import { regulations } from '../data/regulations'
import { categories } from '../data/categories'
import { Link } from 'react-router-dom'

export default function Home() {
  const latestRegulations = regulations.slice(0, 3)

  return (
    <div>
      <div className="hero bg-base-200 rounded-box p-8 mb-8">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-4xl font-bold">會計稅務法規查詢系統</h1>
            <p className="py-4 text-base-content/70 max-w-xl">
              整合稅務法規、會計內控機制、IFRS 準則、查核準則、審計 PBC
              及所得稅申報，提供一站式法規查詢與重點整理服務。
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/laws?category=${cat.id}`}
            className="card bg-base-100 border border-base-300 hover:border-primary transition-colors"
          >
            <div className="card-body">
              <div className="text-3xl mb-2">{cat.icon}</div>
              <h3 className="card-title text-lg">{cat.name}</h3>
              <p className="text-sm text-base-content/60">
                {cat.subcategories?.length ?? 0} 個子分類
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="divider">最新法規動態</div>
      <div className="space-y-3">
        {latestRegulations.map((reg) => (
          <Link
            key={reg.id}
            to={`/laws/${reg.id}`}
            className="block card bg-base-100 border border-base-300 hover:border-primary transition-colors"
          >
            <div className="card-body py-4">
              <h3 className="font-medium">{reg.title}</h3>
              <p className="text-sm text-base-content/60 line-clamp-2">
                {reg.summary}
              </p>
              <div className="flex gap-2 mt-1">
                {reg.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="badge badge-ghost badge-sm">
                    {tag}
                  </span>
                ))}
                <span className="text-xs text-base-content/40 ml-auto">
                  {reg.publishDate}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
