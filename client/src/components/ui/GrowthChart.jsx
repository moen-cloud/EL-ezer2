/**
 * Lightweight, dependency-free line chart for indexed growth data.
 * `data` is an array of numbers (e.g. [100, 118, 137, ...]).
 *
 * This chart renders statically — no internal draw-in animation — because
 * the site's motion system is limited to four types (see lib/motion.js).
 * Wherever this chart is used, wrap it with the `imageReveal` variant so it
 * scales in as a whole graphic, the same way a photo would.
 */
export default function GrowthChart({ data, width = 320, height = 120, color = '#0E8F6F' }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const stepX = width / (data.length - 1)

  const points = data.map((value, i) => {
    const x = i * stepX
    const y = height - ((value - min) / range) * (height - 16) - 8
    return [x, y]
  })

  const path = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
  const areaPath = `${path} L${width},${height} L0,${height} Z`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full overflow-visible">
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#grad-${color.replace('#', '')})`} />
      <path d={path} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {points.map(([x, y], i) =>
        i === points.length - 1 ? <circle key={i} cx={x} cy={y} r="4" fill={color} /> : null
      )}
    </svg>
  )
}
