import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { narrativesApi } from '../../services/api'
import { LoadingSpinner } from '../shared/LoadingSpinner'
import { ErrorMessage } from '../shared/ErrorMessage'

/**
 * NarrativePanel Component
 *
 * Displays AI-generated narrative about silo signals.
 *
 * CRITICAL: The disclaimer is MANDATORY and CANNOT be removed or abbreviated.
 *
 * @constitutional MN-02, PRINCIPLE-3
 */
interface NarrativePanelProps {
  siloId: string
  useAi?: boolean
}

const MANDATORY_DISCLAIMER = `This is a description of what your charts are showing. The interpretation and any decision is entirely yours.`

export function NarrativePanel({ siloId, useAi = true }: NarrativePanelProps): React.ReactElement {
  const { data: narrative, isLoading, error, refetch } = useQuery({
    queryKey: ['narrative', siloId, useAi],
    queryFn: () => narrativesApi.generateForSilo(siloId, useAi),
    enabled: !!siloId,
    staleTime: 5 * 60 * 1000, // 5 minutes (expensive AI call)
  })

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">AI Narrative</h3>
        <LoadingSpinner label="Generating narrative..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">AI Narrative</h3>
        <ErrorMessage
          message="Failed to generate narrative"
          onRetry={() => refetch()}
        />
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">AI Narrative</h3>

      {/* Narrative sections */}
      <div className="space-y-4 mb-6">
        {narrative?.sections.map((section, index) => (
          <div key={index} className="text-slate-700">
            {section.section_type === 'SIGNAL_SUMMARY' && (
              <p className="font-medium">{section.content}</p>
            )}
            {section.section_type === 'CONTRADICTION' && (
              <p className="text-amber-700 bg-amber-50 p-3 rounded-lg">
                ⚠️ {section.content}
              </p>
            )}
            {section.section_type === 'CONFIRMATION' && (
              <p className="text-emerald-700 bg-emerald-50 p-3 rounded-lg">
                ✓ {section.content}
              </p>
            )}
            {section.section_type === 'FRESHNESS' && (
              <p className="text-slate-500 text-sm">{section.content}</p>
            )}
          </div>
        ))}
      </div>

      {/* MANDATORY DISCLAIMER - CANNOT BE REMOVED OR MODIFIED */}
      <div className="border-t pt-4 mt-4">
        <p className="text-sm text-slate-500 italic bg-slate-50 p-4 rounded-lg border-l-4 border-slate-300">
          {narrative?.closing_statement || MANDATORY_DISCLAIMER}
        </p>
      </div>
    </div>
  )
}

