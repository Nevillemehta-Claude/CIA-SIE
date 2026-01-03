import React, { useState } from 'react'

interface CommandBoxProps {
  onExecute: (command: string) => void
  placeholder?: string
  disabled?: boolean
}

export function CommandBox({ onExecute, placeholder = 'Enter command...', disabled = false }: CommandBoxProps): React.ReactElement {
  const [command, setCommand] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (command.trim() && !disabled) {
      onExecute(command.trim())
      setCommand('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed font-mono text-sm"
      />
      <button
        type="submit"
        disabled={!command.trim() || disabled}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Execute
      </button>
    </form>
  )
}

