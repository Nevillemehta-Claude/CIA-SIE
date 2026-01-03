import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/layout/PageHeader'
import { instrumentsApi, silosApi } from '../services/api'
import { LoadingSpinner } from '../components/shared/LoadingSpinner'
import { ErrorMessage } from '../components/shared/ErrorMessage'
import { ChatPanel } from '../components/ai/ChatPanel'
import { Badge } from '../components/shared/Badge'

export function InstrumentDetail(): React.ReactElement {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data: instrument, isLoading, error, refetch } = useQuery({
    queryKey: ['instrument', id],
    queryFn: () => instrumentsApi.get(id!),
    enabled: !!id,
  })

  const { data: silos } = useQuery({
    queryKey: ['silos', id],
    queryFn: () => silosApi.list(id, true),
    enabled: !!id,
  })

  if (isLoading) {
    return (
      <Layout>
        <div className="p-10">
          <LoadingSpinner label="Loading instrument..." />
        </div>
      </Layout>
    )
  }

  if (error || !instrument) {
    return (
      <Layout>
        <div className="p-10">
          <ErrorMessage message="Failed to load instrument" onRetry={() => refetch()} />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <PageHeader
        badge="Instrument"
        title={instrument.display_name}
        description={`Symbol: ${instrument.symbol}`}
      />
      <div className="p-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Instrument Info */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Details</h2>
            <div className="space-y-3">
              <div>
                <span className="text-sm text-slate-500">Symbol:</span>
                <span className="ml-2 font-medium">{instrument.symbol}</span>
              </div>
              <div>
                <span className="text-sm text-slate-500">Status:</span>
                <span className="ml-2">
                  <Badge variant={instrument.is_active ? 'success' : 'danger'}>
                    {instrument.is_active ? 'Active' : 'Inactive'}
                  </Badge>
                </span>
              </div>
              <div>
                <span className="text-sm text-slate-500">Created:</span>
                <span className="ml-2">{new Date(instrument.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Silos */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Silos</h2>
            {silos && silos.length > 0 ? (
              <div className="space-y-2">
                {silos.map((silo) => (
                  <button
                    key={silo.silo_id}
                    onClick={() => navigate(`/silos/${silo.silo_id}`)}
                    className="w-full text-left px-4 py-2 border border-slate-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium">{silo.silo_name}</div>
                    <div className="text-sm text-slate-500">
                      {silo.heartbeat_enabled ? 'Heartbeat enabled' : 'Heartbeat disabled'}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 text-sm">No silos configured for this instrument.</p>
            )}
          </div>
        </div>

        {/* Chat Panel */}
        {id && (
          <div className="mt-6">
            <ChatPanel instrumentId={id} />
          </div>
        )}
      </div>
    </Layout>
  )
}

