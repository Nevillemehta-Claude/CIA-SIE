import React from 'react'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/layout/PageHeader'
import { AIUsagePanel } from '../components/ai/AIUsagePanel'
import { useAIBudget } from '../hooks/useAI'
import { LoadingSpinner } from '../components/shared/LoadingSpinner'
import { ErrorMessage } from '../components/shared/ErrorMessage'

export function Settings(): React.ReactElement {
  const { data: budget, isLoading, error } = useAIBudget()

  return (
    <Layout>
      <PageHeader
        badge="Settings"
        title="System Settings"
        description="Configure CIA-SIE system settings"
      />
      <div className="p-10 max-w-4xl">
        <div className="space-y-6">
          {/* AI Usage */}
          <section>
            <h2 className="text-xl font-semibold mb-4">AI Usage</h2>
            <AIUsagePanel period="monthly" />
          </section>

          {/* Budget Status */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Budget Status</h2>
            {isLoading ? (
              <LoadingSpinner label="Loading budget status..." />
            ) : error ? (
              <ErrorMessage message="Failed to load budget status" />
            ) : budget ? (
              <div className="bg-white rounded-xl shadow p-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-slate-500">Status:</span>
                    <span className={`ml-2 font-semibold ${
                      budget.within_budget ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      {budget.within_budget ? 'Within Budget' : 'Over Budget'}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500">Percentage Used:</span>
                    <span className="ml-2 font-semibold">{budget.percentage_used.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500">Remaining:</span>
                    <span className="ml-2 font-semibold">${budget.remaining.toFixed(2)}</span>
                  </div>
                  {budget.alert_level && (
                    <div>
                      <span className="text-sm text-slate-500">Alert Level:</span>
                      <span className="ml-2 font-semibold capitalize">{budget.alert_level}</span>
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </Layout>
  )
}

