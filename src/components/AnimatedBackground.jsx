import { motion } from 'framer-motion'

const floatingOrbs = [
  { size: 280, x: '10%', y: '15%', color: 'rgba(16, 185, 129, 0.12)', delay: 0, duration: 18 },
  { size: 200, x: '75%', y: '25%', color: 'rgba(20, 184, 166, 0.1)', delay: 2, duration: 22 },
  { size: 160, x: '50%', y: '70%', color: 'rgba(16, 185, 129, 0.08)', delay: 1, duration: 20 },
  { size: 220, x: '85%', y: '60%', color: 'rgba(52, 211, 153, 0.1)', delay: 3, duration: 25 },
  { size: 140, x: '20%', y: '80%', color: 'rgba(20, 184, 166, 0.08)', delay: 0.5, duration: 16 },
  { size: 180, x: '60%', y: '10%', color: 'rgba(16, 185, 129, 0.06)', delay: 2.5, duration: 24 },
]

const floatingDots = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + i * 8}%`,
  top: `${10 + (i % 5) * 22}%`,
  size: 4 + (i % 3) * 2,
  duration: 8 + (i % 4) * 4,
  delay: i * 0.7,
}))

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated gradient base */}
      <div className="absolute inset-0 bg-gradient-animated" />

      {/* Subtle moving grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 40s linear infinite',
        }}
      />

      {/* Floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -25, 15, -10, 0],
            scale: [1, 1.05, 0.98, 1.02, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: orb.delay,
          }}
        />
      ))}

      {/* Small floating dots */}
      {floatingDots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-emerald-400/30"
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.left,
            top: dot.top,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
          }}
        />
      ))}

      {/* Soft top/bottom fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(248, 250, 252, 0.6) 0%, transparent 20%, transparent 80%, rgba(248, 250, 252, 0.5) 100%)',
        }}
      />
    </div>
  )
}
