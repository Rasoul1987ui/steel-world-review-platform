import { cn } from '@/lib/utils'

interface SparklineProps {
  data: number[]
  className?: string
  width?: number
  height?: number
}

export function Sparkline({ data, className, width = 120, height = 40 }: SparklineProps) {
  if (data.length < 2) return null
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const padding = 3

  const coords = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width
    const y = height - padding - ((value - min) / range) * (height - padding * 2)
    return [x, y] as const
  })

  const line = coords.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const area = `0,${height} ${line} ${width},${height}`
  const [lastX, lastY] = coords[coords.length - 1]

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn('swr-sparkline overflow-visible', className)}
      aria-hidden="true"
    >
      <polygon points={area} fill="currentColor" opacity={0.12} />
      <polyline
        points={line}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx={lastX} cy={lastY} r={2.5} fill="currentColor" />
    </svg>
  )
}
