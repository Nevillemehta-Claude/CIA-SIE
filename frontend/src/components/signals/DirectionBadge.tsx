import React from 'react'
import type { Direction } from '../../types'

interface DirectionBadgeProps {
  direction: Direction | null
  size?: 'sm' | 'md' | 'lg'
}

const DIRECTION_CONFIG = {
  BULLISH: {
    arrow: '↑',
    label: 'BULLISH',
    bgColor: 'bg-emerald-100',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-300',
  },
  BEARISH: {
    arrow: '↓',
    label: 'BEARISH',
    bgColor: 'bg-red-100',
    textColor: 'text-red-700',
    borderColor: 'border-red-300',
  },
  NEUTRAL: {
    arrow: '→',
    label: 'NEUTRAL',
    bgColor: 'bg-slate-100',
    textColor: 'text-slate-600',
    borderColor: 'border-slate-300',
  },
}

const SIZE_CLASSES = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1.5',
  lg: 'text-base px-4 py-2',
}

export function DirectionBadge({ direction, size = 'md' }: DirectionBadgeProps): React.ReactElement {
  if (!direction) {
    return (
      <span className={`inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 ${SIZE_CLASSES[size]}`}>
        <span>—</span>
        <span>NO SIGNAL</span>
      </span>
    )
  }

  const config = DIRECTION_CONFIG[direction]

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border ${config.bgColor} ${config.textColor} ${config.borderColor} ${SIZE_CLASSES[size]} font-medium`}>
      <span className="text-lg">{config.arrow}</span>
      <span>{config.label}</span>
    </span>
  )
}

