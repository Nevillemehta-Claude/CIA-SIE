import React from 'react'
import type { Direction, FreshnessStatus } from '../../types'
import { DirectionBadge } from './DirectionBadge'
import { FreshnessIndicator } from './FreshnessIndicator'

/**
 * ChartSignalCard Component
 *
 * Displays a single chart with its current signal status.
 *
 * CRITICAL: NO weight or score displays (prohibited by PR-02, PR-03)
 */
interface ChartSignalCardProps {
  chartCode: string
  chartName: string
  timeframe: string
  direction: Direction | null
  freshness: FreshnessStatus
  onClick?: () => void
}

export function ChartSignalCard({
  chartCode,
  chartName,
  timeframe,
  direction,
  freshness,
  onClick,
}: ChartSignalCardProps): React.ReactElement {
  return (
    <div
      className="bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer"
      onClick={onClick}
    >
      {/* Chart Code - Primary identifier */}
      <div className="text-xl font-bold text-blue-600 mb-1">{chartCode}</div>

      {/* Chart Name */}
      <div className="text-sm text-slate-600 mb-2">{chartName}</div>

      {/* Timeframe Badge */}
      <div className="mb-3">
        <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
          {timeframe}
        </span>
      </div>

      {/* Direction - NO weight or score */}
      <div className="mb-2">
        <DirectionBadge direction={direction} size="sm" />
      </div>

      {/* Freshness Status */}
      <div className="text-right">
        <FreshnessIndicator status={freshness} showLabel={true} />
      </div>

      {/* NOTE: Deliberately NO weight, score, or confidence display */}
    </div>
  )
}

