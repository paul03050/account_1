import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { categories } from '../data/categories'

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
    <aside className="w-64 min-h-[calc(100vh-64px)] bg-base-200 p-4 overflow-y-auto">
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
    </aside>
  )
}
