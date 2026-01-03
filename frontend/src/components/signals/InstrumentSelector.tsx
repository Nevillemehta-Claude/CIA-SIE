import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { instrumentsApi } from '../../services/api'
import { LoadingSpinner } from '../shared/LoadingSpinner'
import { ErrorMessage } from '../shared/ErrorMessage'

interface InstrumentSelectorProps {
  selectedId: string | null
  onSelect: (instrumentId: string) => void
}

export function InstrumentSelector({ selectedId, onSelect }: InstrumentSelectorProps): React.ReactElement {
  const { data: instruments, isLoading, error, refetch } = useQuery({
    queryKey: ['instruments', true],
    queryFn: () => instrumentsApi.list(true),
  })

  if (isLoading) {
    return <LoadingSpinner label="Loading instruments..." />
  }

  if (error) {
    return <ErrorMessage message="Failed to load instruments" onRetry={() => refetch()} />
  }

  return (
    <div className="flex flex-wrap gap-2">
      {instruments?.map((instrument) => (
        <button
          key={instrument.instrument_id}
          onClick={() => onSelect(instrument.instrument_id)}
          className={`px-4 py-2 rounded-lg border-2 transition-all ${
            selectedId === instrument.instrument_id
              ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
              : 'border-slate-300 hover:border-slate-400 text-slate-700'
          }`}
        >
          {instrument.symbol} - {instrument.display_name}
        </button>
      ))}
    </div>
  )
}

