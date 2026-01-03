import React, { useState, useRef, useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { chatApi } from '../../services/api'
import type { ChatMessage } from '../../types'
import { ModelSelector } from './ModelSelector'
import { LoadingSpinner } from '../shared/LoadingSpinner'

/**
 * ChatPanel Component
 *
 * Per-instrument conversation interface.
 *
 * CRITICAL: AI responses MUST be descriptive only.
 * The mandatory disclaimer MUST always be displayed.
 *
 * @constitutional PRINCIPLE-3, MN-02
 */
interface ChatPanelProps {
  instrumentId: string
  defaultModel?: string
}

const MANDATORY_DISCLAIMER = 'This is a description of what your charts are showing. The interpretation and any decision is entirely yours.'

export function ChatPanel({ instrumentId, defaultModel = 'claude-3-sonnet' }: ChatPanelProps): React.ReactElement {
  const [input, setInput] = useState('')
  const [selectedModel, setSelectedModel] = useState(defaultModel)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const queryClient = useQueryClient()

  // Fetch conversation history
  const { data: history } = useQuery({
    queryKey: ['chat-history', instrumentId],
    queryFn: () => chatApi.getHistory(instrumentId),
    enabled: !!instrumentId,
  })

  // Send message mutation
  const sendMessage = useMutation({
    mutationFn: (message: string) =>
      chatApi.sendMessage(instrumentId, {
        message,
        model: selectedModel,
        include_context: true,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chat-history', instrumentId] })
      setInput('')
    },
  })

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !sendMessage.isPending) {
      sendMessage.mutate(input.trim())
    }
  }

  // Flatten messages from all conversations
  const allMessages: ChatMessage[] = history?.conversations.flatMap((c) => c.messages) ?? []

  return (
    <div className="bg-white rounded-xl shadow flex flex-col h-[500px]">
      {/* Header with Model Selector */}
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold mb-3">Chat with AI</h3>
        <ModelSelector
          selectedModel={selectedModel}
          onModelChange={setSelectedModel}
          disabled={sendMessage.isPending}
        />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {allMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-800'
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.content}</p>
              {msg.role === 'assistant' && (
                <p className="mt-3 pt-2 border-t border-slate-300 text-xs text-slate-500 italic">
                  {MANDATORY_DISCLAIMER}
                </p>
              )}
            </div>
          </div>
        ))}

        {sendMessage.isPending && (
          <div className="flex justify-start">
            <div className="bg-slate-100 rounded-lg p-3">
              <LoadingSpinner size="sm" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={sendMessage.isPending}
          />
          <button
            type="submit"
            disabled={!input.trim() || sendMessage.isPending}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

