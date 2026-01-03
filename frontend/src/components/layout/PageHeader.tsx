import React from 'react'

interface PageHeaderProps {
  badge: string
  title: string
  description: string
}

export function PageHeader({ badge, title, description }: PageHeaderProps): React.ReactElement {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white px-10 py-16">
      <div className="max-w-5xl">
        {/* Badge */}
        <span className="inline-block bg-white/15 border border-white/20 px-3.5 py-1.5 rounded-full text-xs mb-4">
          {badge}
        </span>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-3">{title}</h1>

        {/* Description */}
        <p className="text-lg text-white/80 max-w-xl">{description}</p>
      </div>
    </header>
  )
}

