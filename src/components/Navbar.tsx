import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { path: '/', label: '首頁', icon: '🏠' },
  { path: '/laws', label: '法規瀏覽', icon: '📖' },
  { path: '/pbc-analysis', label: 'PBC 分析', icon: '📂' },
  { path: '/notes', label: '重點整理', icon: '📝' },
  { path: '/comparison', label: '版本比對', icon: '🔍' },
  { path: '/export', label: '報表匯出', icon: '📥' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = searchInput.trim()
    if (q) {
      navigate(`/laws?q=${encodeURIComponent(q)}`)
    }
  }

  return (
    <nav className="navbar bg-base-100 border-b border-base-200 shadow-sm">
      <div className="navbar-start">
        <label htmlFor="sidebar-drawer" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </label>
        <Link to="/" className="btn btn-ghost text-xl">
          <span className="text-2xl">📚</span>
          會計稅務法規查詢
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex gap-1">
        {navItems.map((item) => {
          const isActive =
            item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path)
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`btn btn-ghost btn-sm ${isActive ? 'btn-active' : ''}`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </div>
      <div className="navbar-end gap-1">
        <div className="hidden sm:flex">
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`btn btn-ghost btn-sm ${isActive ? 'btn-active' : ''}`}
              >
                <span>{item.icon}</span>
              </Link>
            )
          })}
        </div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="搜尋法規..."
            className="input input-bordered input-sm w-32 sm:w-48"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
      </div>
    </nav>
  )
}
