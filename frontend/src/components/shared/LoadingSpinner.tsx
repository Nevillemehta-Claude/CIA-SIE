import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  label?: string
}

const SIZE_CLASSES = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
}

export function LoadingSpinner({ size = 'md', label }: LoadingSpinnerProps): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className={`${SIZE_CLASSES[size]} border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin`} />
      {label && <span className="text-sm text-slate-500">{label}</span>}
    </div>
  )
}

