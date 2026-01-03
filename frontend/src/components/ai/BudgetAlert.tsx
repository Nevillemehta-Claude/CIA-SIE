import React from 'react'

interface BudgetAlertProps {
  percentageUsed: number
  budgetRemaining: number
  onDismiss?: () => void
}

export function BudgetAlert({
  percentageUsed,
  budgetRemaining,
  onDismiss,
}: BudgetAlertProps): React.ReactElement | null {
  // No alert needed if under 80%
  if (percentageUsed < 80) {
    return null
  }

  // Determine alert level
  const isBlocked = percentageUsed >= 100
  const isCritical = percentageUsed >= 90

  const alertConfig = isBlocked
    ? {
        bg: 'bg-red-100 border-red-400',
        icon: '🚫',
        title: 'BUDGET EXHAUSTED',
        message: 'Your monthly AI budget has been exhausted. AI features are disabled until next billing period.',
        dismissible: false,
      }
    : isCritical
    ? {
        bg: 'bg-orange-100 border-orange-400',
        icon: '🔴',
        title: 'BUDGET CRITICAL',
        message: `You have used ${percentageUsed.toFixed(0)}% of your monthly AI budget. Remaining: $${budgetRemaining.toFixed(2)}`,
        dismissible: false,
      }
    : {
        bg: 'bg-amber-100 border-amber-400',
        icon: '⚠️',
        title: 'BUDGET WARNING',
        message: `You have used ${percentageUsed.toFixed(0)}% of your monthly AI budget. Remaining: $${budgetRemaining.toFixed(2)}`,
        dismissible: true,
      }

  return (
    <div className={`rounded-lg border-2 p-4 ${alertConfig.bg}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">{alertConfig.icon}</span>
          <span className="font-bold">{alertConfig.title}</span>
        </div>
        {alertConfig.dismissible && onDismiss && (
          <button onClick={onDismiss} className="text-slate-500 hover:text-slate-700">
            ×
          </button>
        )}
      </div>
      <p className="mt-2 text-sm">{alertConfig.message}</p>
    </div>
  )
}

