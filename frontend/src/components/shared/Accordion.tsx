import React, { useState } from 'react'

interface AccordionItem {
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  defaultOpen?: number
}

export function Accordion({ items, defaultOpen }: AccordionProps): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ?? null)

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-3 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition-colors"
          >
            <span className="font-medium text-slate-900">{item.title}</span>
            <span className="text-slate-500">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 bg-white border-t border-slate-200">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

