import { useState, useEffect, useRef } from "react"
import type { CSSProperties } from "react"
import { useLocation, Link } from "react-router-dom"

const navItems = [
  { name: "Acceuil", path: "/Acceuil" },
  { name: "Compétences", path: "/Competences" },
  { name: "Projets", path: "/projets" },
  { name: "Tableau de Compétences", path: "/tableau" },
  { name: "Contact", path: "/contact" },
]

const Navbar: React.FC = () => {
  const location = useLocation()
  const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({})
  const itemRefs = useRef<Array<HTMLSpanElement | null>>([])

  useEffect(() => {
    const index = navItems.findIndex((item) => item.path === location.pathname)
    const el = itemRefs.current[index >= 0 ? index : 0]
    if (el) {
      setIndicatorStyle({
        width: el.offsetWidth,
        left: el.offsetLeft,
        transform: "scale(0.80)",
        transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
      })
      setTimeout(() => {
        setIndicatorStyle((prev) => ({ ...prev, transform: "scale(1)" }))
      }, 200)
    }
  }, [location.pathname])

  return (
    <nav className="fixed bottom-0 md:top-4 left-1/2 -translate-x-1/2 z-50 w-full h-32 max-w-xl px-6 py-4">
      <div className="relative flex justify-between items-center bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl px-4 py-2 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-white/0 via-white/40 to-white/0 opacity-30 pointer-events-none"></div>

        <div
          className="absolute top-0 h-full bg-white/40 rounded-full transition-all duration-500 ease-out shadow-lg backdrop-blur-md -z-10"
          style={indicatorStyle}
        ></div>

        {navItems.map((item, idx) => (
          <span
            key={item.name}
            ref={(el) => {
              itemRefs.current[idx] = el
            }}
            className="relative cursor-pointer font-semibold text-black px-4 py-2 hover:text-amber-600 transition-colors"
          >
            <Link to={item.path}>{item.name}</Link>
          </span>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
