import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { categories } from '../data/categories'

const functionNavItems = [
  { path: '/pbc-analysis', label: 'PBC 分析', icon: '📂' },
  { path: '/', label: '首頁', icon: '🏠' },
  { path: '/laws', label: '法規瀏覽', icon: '📖' },
  { path: '/notes', label: '重點整理', icon: '📝' },
  { path: '/comparison', label: '版本比對', icon: '🔍' },
  { path: '/export', label: '報表匯出', icon: '📥' },
]

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (catId: string) => {
    const params = new URLSearchParams(location.search)
    return params.get('category') === catId
  }

  const handleCategoryClick = (catId: string) => {
    navigate(`/laws?category=${catId}`)
  }

  useEffect(() => {
    const drawer = document.getElementById('sidebar-drawer') as HTMLInputElement | null
    if (drawer?.checked) drawer.checked = false
  }, [location])

  return (
    <>
      <aside className="hidden lg:block w-64 min-h-[calc(100vh-64px)] bg-base-200 p-4 overflow-y-auto">
        <h2 className="text-sm font-bold text-base-content/60 uppercase tracking-wider mb-3">
          法規分類
        </h2>
        <ul className="menu rounded-box gap-1">
          {categories.map((cat) => (
            <li key={cat.id}>
              <details open={isActive(cat.id)}>
                <summary
                  className={`font-medium ${isActive(cat.id) ? 'bg-primary text-primary-content' : ''}`}
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  <span className="text-lg">{cat.icon}</span>
                  {cat.name}
                </summary>
                {cat.subcategories && (
                  <ul>
                    {cat.subcategories.map((sub) => (
                      <li key={sub.id}>
                        <a
                          onClick={() =>
                            navigate(`/laws?category=${cat.id}&subcategory=${sub.id}`)
                          }
                          className={
                            location.search.includes(`subcategory=${sub.id}`)
                              ? 'active'
                              : ''
                          }
                        >
                          <span className="text-base">{sub.icon}</span>
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </details>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-base-300">
          <a
            onClick={() => navigate('/pbc-analysis')}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-base-300 cursor-pointer"
          >
            <span className="text-lg">📂</span>
            PBC 分析
          </a>
        </div>
      </aside>

      <aside className="lg:hidden w-80 max-w-[85vw] min-h-full bg-base-200 p-4 overflow-y-auto">
        <h2 className="text-sm font-bold text-base-content/60 uppercase tracking-wider mb-4">
          導覽選單
        </h2>

        <div className="space-y-2 mb-6">
          {functionNavItems.map((item) => {
            const isPbc = item.path === '/pbc-analysis'
            return (
              <a
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full card p-3 flex items-center gap-3 cursor-pointer transition-colors ${
                  isPbc
                    ? 'bg-primary text-primary-content'
                    : 'bg-base-100 border border-base-300 hover:border-primary'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </a>
            )
          })}
        </div>

        <div className="border-t border-base-300 pt-4">
          <h3 className="text-sm font-bold text-base-content/60 mb-3">
            法規分類
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <a
                key={cat.id}
                onClick={() => navigate(`/laws?category=${cat.id}`)}
                className={`card p-3 text-center cursor-pointer transition-colors ${
                  isActive(cat.id)
                    ? 'bg-primary text-primary-content'
                    : 'bg-base-100 border border-base-300 hover:border-primary'
                }`}
              >
                <div className="text-2xl mb-1">{cat.icon}</div>
                <div className="text-sm font-medium">{cat.name}</div>
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
