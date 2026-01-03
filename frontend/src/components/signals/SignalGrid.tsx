import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { relationshipsApi } from '../../services/api'
import { ChartSignalCard } from './ChartSignalCard'
import { LoadingSpinner } from '../shared/LoadingSpinner'
import { ErrorMessage } from '../shared/ErrorMessage'

interface SignalGridProps {
  siloId: string
}

export function SignalGrid({ siloId }: SignalGridProps): React.ReactElement {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['relationships', siloId],
    queryFn: () => relationshipsApi.getForSilo(siloId),
    enabled: !!siloId,
    refetchInterval: 60000, // Refresh every minute
  })

  if (isLoading) {
    return <LoadingSpinner label="Loading signals..." />
  }

  if (error) {
    return <ErrorMessage message="Failed to load signals" onRetry={() => refetch()} />
  }

  if (!data || data.charts.length === 0) {
    return (
      <div className="text-center text-slate-500 py-8">
        No charts configured for this silo.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {data.charts.map((chart) => (
        <ChartSignalCard
          key={chart.chart_id}
          chartCode={chart.chart_code}
          chartName={chart.chart_name}
          timeframe={chart.timeframe}
          direction={chart.latest_signal?.direction ?? null}
          freshness={chart.freshness}
        />
      ))}
    </div>
  )
}

