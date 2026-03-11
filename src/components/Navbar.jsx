import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [gradesOpen, setGradesOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path
  const linkClass = (path) =>
    `block px-4 py-2 rounded-lg transition-colors ${
      isActive(path) ? 'bg-emerald-600 text-white' : 'hover:bg-emerald-50 text-emerald-800'
    }`

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white/95 backdrop-blur shadow-sm sticky top-0 z-50 border-b border-emerald-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-emerald-700 flex items-center gap-2">
            <motion.span
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
              className="text-2xl"
            >
              📚
            </motion.span>
            ملف إنجاز المعلم
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className={linkClass('/')}>
              الرئيسية
            </Link>
            <Link to="/cv" className={linkClass('/cv')}>
              السيرة الذاتية
            </Link>
            <Link to="/specialty" className={linkClass('/specialty')}>
              التخصص
            </Link>

            <Link to="/written-work" className={linkClass('/written-work')}>
              الأعمال الكتابية
            </Link>
            <Link to="/teaching-aids" className={linkClass('/teaching-aids')}>
              الوسائل التعليمية
            </Link>
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname.startsWith('/grade') ? 'bg-emerald-600 text-white' : 'hover:bg-emerald-50 text-emerald-800'
                }`}
              >
                الصفوف
                <span className="text-sm">▼</span>
              </button>
              <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-emerald-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/grade/1"
                  className="block px-4 py-2 hover:bg-emerald-50 text-emerald-800"
                >
                  الصف الأول ثانوي
                </Link>
                <Link
                  to="/grade/2"
                  className="block px-4 py-2 hover:bg-emerald-50 text-emerald-800"
                >
                  الصف الثاني ثانوي
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-emerald-50 text-emerald-700"
            aria-label="القائمة"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-emerald-100"
            >
              <div className="py-4 space-y-1">
                <Link to="/" className={linkClass('/')} onClick={() => setMobileOpen(false)}>
                  الرئيسية
                </Link>
                <Link to="/cv" className={linkClass('/cv')} onClick={() => setMobileOpen(false)}>
                  السيرة الذاتية
                </Link>
                <Link to="/specialty" className={linkClass('/specialty')} onClick={() => setMobileOpen(false)}>
                  التخصص
                </Link>
                <Link to="/written-work" className={linkClass('/written-work')} onClick={() => setMobileOpen(false)}>
                  الأعمال الكتابية
                </Link>
                <Link to="/teaching-aids" className={linkClass('/teaching-aids')} onClick={() => setMobileOpen(false)}>
                  الوسائل التعليمية
                </Link>
              </div>
              <div className="px-4 py-2">
                  <button
                    onClick={() => setGradesOpen(!gradesOpen)}
                    className="w-full text-right flex items-center justify-between gap-2 text-emerald-800 hover:bg-emerald-50 px-4 py-2 rounded-lg"
                  >
                    الصفوف
                    <span className="text-sm">{gradesOpen ? '▲' : '▼'}</span>
                  </button>
                  <AnimatePresence>
                    {gradesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pr-3 mt-1 space-y-1 overflow-hidden"
                      >
                        <Link
                          to="/grade/1"
                          className="block px-4 py-2 rounded-lg hover:bg-emerald-50 text-emerald-700"
                          onClick={() => setMobileOpen(false)}
                        >
                          الصف الأول ثانوي
                        </Link>
                        <Link
                          to="/grade/2"
                          className="block px-4 py-2 rounded-lg hover:bg-emerald-50 text-emerald-700"
                          onClick={() => setMobileOpen(false)}
                        >
                          الصف الثاني ثانوي
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
