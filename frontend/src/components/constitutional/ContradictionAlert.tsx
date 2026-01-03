import React from 'react'
import type { Contradiction } from '../../types'
import { DirectionBadge } from '../signals/DirectionBadge'

/**
 * ContradictionAlert Component
 *
 * Displays a contradiction between two charts.
 *
 * CRITICAL REQUIREMENTS:
 * 1. Both charts MUST have EQUAL visual prominence
 * 2. No visual suggestion of which is "correct"
 * 3. Warning color scheme (amber/yellow)
 * 4. Clear disclaimer that system does NOT resolve conflicts
 *
 * @constitutional PRINCIPLE-2
 */
interface ContradictionAlertProps {
  contradiction: Contradiction
}

export function ContradictionAlert({ contradiction }: ContradictionAlertProps): React.ReactElement {
  return (
    <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 mb-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">⚠️</span>
        <span className="font-semibold text-amber-800">CONTRADICTION DETECTED</span>
      </div>

      {/* Two charts with EQUAL visual weight */}
      <div className="flex items-center justify-center gap-4">
        {/* Chart A - EQUAL SIZE */}
        <div className="flex-1 max-w-[200px] bg-white rounded-lg p-4 text-center border border-amber-200">
          <div className="text-lg font-bold text-slate-700">
            {contradiction.chart_a_name}
          </div>
          <div className="mt-2">
            <DirectionBadge direction={contradiction.chart_a_direction} size="lg" />
          </div>
        </div>

        {/* Bi-directional arrow - NEUTRAL */}
        <div className="text-3xl text-amber-500 flex-shrink-0">⇄</div>

        {/* Chart B - EQUAL SIZE (MUST match Chart A exactly) */}
        <div className="flex-1 max-w-[200px] bg-white rounded-lg p-4 text-center border border-amber-200">
          <div className="text-lg font-bold text-slate-700">
            {contradiction.chart_b_name}
          </div>
          <div className="mt-2">
            <DirectionBadge direction={contradiction.chart_b_direction} size="lg" />
          </div>
        </div>
      </div>

      {/* MANDATORY disclaimer */}
      <p className="mt-4 text-sm text-amber-700 text-center italic">
        This contradiction is shown for your awareness. The system does NOT resolve this conflict.
      </p>
    </div>
  )
}

