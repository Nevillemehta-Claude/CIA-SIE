import React from 'react'

/**
 * ConstitutionalBanner Component
 *
 * Displays the three inviolable constitutional principles.
 * This component MUST appear on every dashboard view.
 * The text is EXACT and CANNOT be modified.
 *
 * @constitutional MN-01
 */
export function ConstitutionalBanner(): React.ReactElement {
  const principles = [
    {
      number: 1,
      text: 'Decision-Support NOT Decision-Making',
      bgColor: 'bg-amber-100',
    },
    {
      number: 2,
      text: 'Expose Contradictions, NEVER Resolve Them',
      bgColor: 'bg-amber-100',
    },
    {
      number: 3,
      text: 'Descriptive AI, NOT Prescriptive AI',
      bgColor: 'bg-amber-100',
    },
  ]

  return (
    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-400 rounded-xl p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">⚠️</span>
        <h2 className="text-lg font-semibold text-amber-800">
          Constitutional Principles
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {principles.map((principle) => (
          <div
            key={principle.number}
            className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3"
          >
            <span className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
              {principle.number}
            </span>
            <span className="text-sm text-amber-900 font-medium">
              {principle.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

