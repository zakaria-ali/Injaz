import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import AnimatedBackground from './AnimatedBackground'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.2 },
  },
}

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-1 py-8 px-4 max-w-6xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-emerald-800 text-white py-6 mt-auto"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-emerald-100">
            ملف إنجاز المعلم م. زكريا ولدعلي — تخصص الحاسوب والشبكات
          </p>
          <p className="text-emerald-200 text-sm mt-1">
            مدرسة محمود خليل أبو الرب المهنية
          </p>
        </div>
      </motion.footer>
    </div>
  )
}
