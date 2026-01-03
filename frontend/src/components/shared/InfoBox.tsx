import React from 'react'

type InfoBoxVariant = 'success' | 'warning' | 'danger' | 'info'

interface InfoBoxProps {
  variant: InfoBoxVariant
  title?: string
  children: React.ReactNode
}

const VARIANT_CLASSES: Record<InfoBoxVariant, { bg: string; border: string; title: string }> = {
  success: { bg: 'bg-emerald-50', border: 'border-emerald-500', title: 'text-emerald-800' },
  warning: { bg: 'bg-amber-50', border: 'border-amber-500', title: 'text-amber-800' },
  danger: { bg: 'bg-red-50', border: 'border-red-500', title: 'text-red-800' },
  info: { bg: 'bg-blue-50', border: 'border-blue-500', title: 'text-blue-800' },
}

export function InfoBox({ variant, title, children }: InfoBoxProps): React.ReactElement {
  const classes = VARIANT_CLASSES[variant]
  return (
    <div className={`${classes.bg} border-l-4 ${classes.border} rounded-lg p-5 mb-4`}>
      {title && <h4 className={`font-semibold mb-2 ${classes.title}`}>{title}</h4>}
      <div className="text-slate-700">{children}</div>
    </div>
  )
}

