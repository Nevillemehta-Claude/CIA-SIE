import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { relationshipsApi } from '../../services/api'
import { DirectionBadge } from '../signals/DirectionBadge'
import { LoadingSpinner } from '../shared/LoadingSpinner'
import { ErrorMessage } from '../shared/ErrorMessage'

interface ConfirmationPanelProps {
  siloId: string
}

export function ConfirmationPanel({ siloId }: ConfirmationPanelProps): React.ReactElement {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['relationships', siloId],
    queryFn: () => relationshipsApi.getForSilo(siloId),
    enabled: !!siloId,
    refetchInterval: 60000,
  })

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Confirmations</h3>
        <LoadingSpinner label="Loading confirmations..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Confirmations</h3>
        <ErrorMessage message="Failed to load confirmations" onRetry={() => refetch()} />
      </div>
    )
  }

  const confirmations = data?.confirmations ?? []

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Confirmations</h3>
      {confirmations.length === 0 ? (
        <p className="text-slate-500 text-sm">No confirmations detected.</p>
      ) : (
        <div className="space-y-3">
          {confirmations.map((confirmation, index) => (
            <div
              key={index}
              className="bg-emerald-50 border border-emerald-200 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">✓</span>
                <span className="font-semibold text-emerald-800">ALIGNMENT DETECTED</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex-1 text-center">
                  <div className="text-sm font-medium text-slate-700">{confirmation.chart_a_name}</div>
                </div>
                <DirectionBadge direction={confirmation.aligned_direction} size="md" />
                <div className="flex-1 text-center">
                  <div className="text-sm font-medium text-slate-700">{confirmation.chart_b_name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

