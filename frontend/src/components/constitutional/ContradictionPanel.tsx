import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { relationshipsApi } from '../../services/api'
import { ContradictionAlert } from './ContradictionAlert'
import { LoadingSpinner } from '../shared/LoadingSpinner'
import { ErrorMessage } from '../shared/ErrorMessage'

interface ContradictionPanelProps {
  siloId: string
}

export function ContradictionPanel({ siloId }: ContradictionPanelProps): React.ReactElement {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['relationships', siloId],
    queryFn: () => relationshipsApi.getForSilo(siloId),
    enabled: !!siloId,
    refetchInterval: 60000,
  })

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Contradictions</h3>
        <LoadingSpinner label="Loading contradictions..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Contradictions</h3>
        <ErrorMessage message="Failed to load contradictions" onRetry={() => refetch()} />
      </div>
    )
  }

  const contradictions = data?.contradictions ?? []

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Contradictions</h3>
      {contradictions.length === 0 ? (
        <p className="text-slate-500 text-sm">No contradictions detected.</p>
      ) : (
        <div>
          {contradictions.map((contradiction, index) => (
            <ContradictionAlert key={index} contradiction={contradiction} />
          ))}
        </div>
      )}
    </div>
  )
}

