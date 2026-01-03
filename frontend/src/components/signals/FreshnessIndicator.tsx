import React from 'react'
import type { FreshnessStatus } from '../../types'

interface FreshnessIndicatorProps {
  status: FreshnessStatus
  showLabel?: boolean
}

const FRESHNESS_CONFIG = {
  CURRENT: {
    icon: '🟢',
    label: 'Current',
    color: 'text-emerald-600',
  },
  RECENT: {
    icon: '🟡',
    label: 'Recent',
    color: 'text-amber-600',
  },
  STALE: {
    icon: '🔴',
    label: 'Stale',
    color: 'text-red-600',
  },
  UNAVAILABLE: {
    icon: '⚫',
    label: 'Unavailable',
    color: 'text-slate-400',
  },
}

export function FreshnessIndicator({ status, showLabel = true }: FreshnessIndicatorProps): React.ReactElement {
  const config = FRESHNESS_CONFIG[status]

  return (
    <span className={`inline-flex items-center gap-1.5 text-sm ${config.color}`}>
      <span>{config.icon}</span>
      {showLabel && <span>{config.label}</span>}
    </span>
  )
}

