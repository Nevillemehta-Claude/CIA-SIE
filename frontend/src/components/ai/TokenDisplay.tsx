import React from 'react'

interface TokenDisplayProps {
  inputTokens: number
  outputTokens: number
  showTotal?: boolean
}

export function TokenDisplay({ inputTokens, outputTokens, showTotal = true }: TokenDisplayProps): React.ReactElement {
  const total = inputTokens + outputTokens

  return (
    <div className="flex items-center gap-4 text-sm">
      <div>
        <span className="text-slate-500">Input:</span>
        <span className="ml-2 font-mono font-semibold">{inputTokens.toLocaleString()}</span>
      </div>
      <div>
        <span className="text-slate-500">Output:</span>
        <span className="ml-2 font-mono font-semibold">{outputTokens.toLocaleString()}</span>
      </div>
      {showTotal && (
        <div>
          <span className="text-slate-500">Total:</span>
          <span className="ml-2 font-mono font-semibold">{total.toLocaleString()}</span>
        </div>
      )}
    </div>
  )
}

