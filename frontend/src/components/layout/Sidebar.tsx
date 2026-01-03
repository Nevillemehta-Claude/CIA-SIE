import React from 'react'
import { NavLink } from 'react-router-dom'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const NAV_SECTIONS = [
  {
    title: 'Dashboard',
    items: [
      { to: '/', label: 'Command Center', icon: '📊' },
    ],
  },
  {
    title: 'Data',
    items: [
      { to: '/instruments', label: 'Instruments', icon: '📈' },
      { to: '/charts', label: '12 Sample Charts', icon: '📋' },
    ],
  },
  {
    title: 'System',
    items: [
      { to: '/settings', label: 'Settings', icon: '⚙️' },
      { to: '/troubleshooting', label: 'Troubleshooting', icon: '🔧' },
    ],
  },
]

export function Sidebar({ isOpen, onClose }: SidebarProps): React.ReactElement {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-slate-900 text-white z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold">CIA-SIE</h1>
          <p className="text-xs text-slate-400 mt-1">
            Chart Intelligence Auditor
          </p>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="mb-6">
              <h2 className="text-xs uppercase tracking-wider text-slate-400 px-3 mb-2">
                {section.title}
              </h2>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-300 hover:bg-white/10 hover:text-white'
                        }`
                      }
                    >
                      <span>{item.icon}</span>
                      <span className="text-sm">{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}

