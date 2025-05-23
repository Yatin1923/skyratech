// App.tsx
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export function ScrollSection({ label, offset, color }: { label: string, offset: [string, string], color: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset:['start start', 'start start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh'])
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState("⏳ Waiting to start")

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const percent = Math.round(latest * 100)
    setProgress(percent)

    if (percent <= 0) {
      setStatus("⏳ Waiting to start")
    } else if (percent >= 100) {
      setStatus("✅ Animation ended")
    } else {
      setStatus("🎬 Animation in progress...")
    }
  })

  return (
    <div className="section-wrapper">
      <div className="section-label bg-transparent text-yellow-400">
        {label}
        <div className="scroll-info ">
        <div>Status: {status}</div>
        <div>Progress: {progress}%</div>
      </div>
        </div>
     
      <div className="spacer" />
      <div ref={ref} className="box-section bg-black">
        <motion.div className="animated-box" style={{y, background: color }} />
      </div>
      <div className="spacer" />
    </div>
  )
}