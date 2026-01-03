import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/layout/PageHeader'
import { SignalGrid } from '../components/signals/SignalGrid'
import { ContradictionPanel } from '../components/constitutional/ContradictionPanel'
import { ConfirmationPanel } from '../components/constitutional/ConfirmationPanel'
import { NarrativePanel } from '../components/constitutional/NarrativePanel'
import { useQuery } from '@tanstack/react-query'
import { silosApi } from '../services/api'
import { LoadingSpinner } from '../components/shared/LoadingSpinner'
import { ErrorMessage } from '../components/shared/ErrorMessage'

export function SiloDetail(): React.ReactElement {
  const { id } = useParams<{ id: string }>()

  const { data: silo, isLoading, error, refetch } = useQuery({
    queryKey: ['silo', id],
    queryFn: () => silosApi.get(id!),
    enabled: !!id,
  })

  if (isLoading) {
    return (
      <Layout>
        <div className="p-10">
          <LoadingSpinner label="Loading silo..." />
        </div>
      </Layout>
    )
  }

  if (error || !silo) {
    return (
      <Layout>
        <div className="p-10">
          <ErrorMessage message="Failed to load silo" onRetry={() => refetch()} />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <PageHeader
        badge="Silo"
        title={silo.silo_name}
        description={`Instrument silo configuration`}
      />
      <div className="p-10 max-w-6xl">
        {/* Signal Grid */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-7 bg-blue-600 rounded"></span>
            Signal Overview
          </h2>
          <SignalGrid siloId={silo.silo_id} />
        </section>

        {/* Relationships */}
        <section className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ContradictionPanel siloId={silo.silo_id} />
          <ConfirmationPanel siloId={silo.silo_id} />
        </section>

        {/* AI Narrative */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-7 bg-blue-600 rounded"></span>
            AI Narrative
          </h2>
          <NarrativePanel siloId={silo.silo_id} />
        </section>
      </div>
    </Layout>
  )
}

