import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/layout/PageHeader'
import { ConstitutionalBanner } from '../components/constitutional/ConstitutionalBanner'
import { SignalGrid } from '../components/signals/SignalGrid'
import { ContradictionPanel } from '../components/constitutional/ContradictionPanel'
import { ConfirmationPanel } from '../components/constitutional/ConfirmationPanel'
import { NarrativePanel } from '../components/constitutional/NarrativePanel'
import { InstrumentSelector } from '../components/signals/InstrumentSelector'
import { instrumentsApi, silosApi } from '../services/api'
import { LoadingSpinner } from '../components/shared/LoadingSpinner'

/**
 * Dashboard Page (Command Center)
 *
 * The main dashboard displaying signal overview, contradictions,
 * confirmations, and AI narrative.
 *
 * CRITICAL: ConstitutionalBanner MUST be displayed.
 *
 * @constitutional MN-01
 */
export function Dashboard(): React.ReactElement {
  const [selectedInstrumentId, setSelectedInstrumentId] = useState<string | null>(null)
  const [selectedSiloId, setSelectedSiloId] = useState<string | null>(null)

  // Fetch instruments
  const { data: instruments, isLoading: instrumentsLoading } = useQuery({
    queryKey: ['instruments', true],
    queryFn: () => instrumentsApi.list(true),
  })

  // Fetch silos for selected instrument
  const { data: silos } = useQuery({
    queryKey: ['silos', selectedInstrumentId],
    queryFn: () => silosApi.list(selectedInstrumentId ?? undefined, true),
    enabled: !!selectedInstrumentId,
  })

  // Auto-select first instrument and silo
  React.useEffect(() => {
    if (instruments?.length && !selectedInstrumentId) {
      setSelectedInstrumentId(instruments[0].instrument_id)
    }
  }, [instruments, selectedInstrumentId])

  React.useEffect(() => {
    if (silos?.length && !selectedSiloId) {
      setSelectedSiloId(silos[0].silo_id)
    }
  }, [silos, selectedSiloId])

  return (
    <Layout>
      <PageHeader
        badge="Dashboard"
        title="CIA-SIE Command Center"
        description="Chart Intelligence Auditor & Signal Intelligence Engine"
      />

      <div className="p-10 max-w-6xl">
        {/* CONSTITUTIONAL BANNER - MANDATORY */}
        <ConstitutionalBanner />

        {instrumentsLoading ? (
          <LoadingSpinner label="Loading instruments..." />
        ) : (
          <>
            {/* Instrument & Silo Selection */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-7 bg-blue-600 rounded"></span>
                Select Instrument
              </h2>
              <InstrumentSelector
                selectedId={selectedInstrumentId}
                onSelect={setSelectedInstrumentId}
              />

              {silos && silos.length > 1 && (
                <div className="mt-4">
                  <label className="block text-sm text-slate-600 mb-2">Silo</label>
                  <select
                    value={selectedSiloId ?? ''}
                    onChange={(e) => setSelectedSiloId(e.target.value)}
                    className="px-4 py-2 border border-slate-300 rounded-lg"
                  >
                    {silos.map((silo) => (
                      <option key={silo.silo_id} value={silo.silo_id}>
                        {silo.silo_name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </section>

            {selectedSiloId && (
              <>
                {/* Signal Grid */}
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="w-1 h-7 bg-blue-600 rounded"></span>
                    Signal Overview
                  </h2>
                  <SignalGrid siloId={selectedSiloId} />
                </section>

                {/* Relationships */}
                <section className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ContradictionPanel siloId={selectedSiloId} />
                  <ConfirmationPanel siloId={selectedSiloId} />
                </section>

                {/* AI Narrative */}
                <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="w-1 h-7 bg-blue-600 rounded"></span>
                    AI Narrative
                  </h2>
                  <NarrativePanel siloId={selectedSiloId} />
                </section>
              </>
            )}
          </>
        )}
      </div>
    </Layout>
  )
}

