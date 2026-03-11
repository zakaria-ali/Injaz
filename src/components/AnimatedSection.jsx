import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function AnimatedSection({ children, className = '' }) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.section>
  )
}

export function AnimatedItem({ children, className = '' }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
