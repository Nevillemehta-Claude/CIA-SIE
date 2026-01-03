import React from 'react'

interface CostDisplayProps {
  cost: number
  currency?: string
}

export function CostDisplay({ cost, currency = 'USD' }: CostDisplayProps): React.ReactElement {
  return (
    <div className="flex items-center gap-2">
      <span className="text-slate-500 text-sm">Cost:</span>
      <span className="font-mono font-semibold">
        {currency} ${cost.toFixed(4)}
      </span>
    </div>
  )
}

