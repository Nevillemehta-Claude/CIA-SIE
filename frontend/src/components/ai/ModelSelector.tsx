import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { aiApi } from '../../services/api'

interface ModelSelectorProps {
  selectedModel: string
  onModelChange: (modelId: string) => void
  disabled?: boolean
}

export function ModelSelector({
  selectedModel,
  onModelChange,
  disabled = false,
}: ModelSelectorProps): React.ReactElement {
  const { data, isLoading } = useQuery({
    queryKey: ['ai-models'],
    queryFn: () => aiApi.listModels(),
    staleTime: 5 * 60 * 1000,
  })

  if (isLoading) {
    return <div className="animate-pulse h-12 bg-slate-200 rounded-lg" />
  }

  return (
    <div className="flex gap-2">
      {data?.models.map((model) => (
        <button
          key={model.id}
          onClick={() => onModelChange(model.id)}
          disabled={disabled}
          className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
            selectedModel === model.id
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-slate-200 hover:border-slate-300'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="font-semibold">{model.display_name}</div>
          <div className="text-xs text-slate-500 mt-1">
            ${model.cost_per_1k_input_tokens}/1K tokens
          </div>
        </button>
      ))}
    </div>
  )
}

