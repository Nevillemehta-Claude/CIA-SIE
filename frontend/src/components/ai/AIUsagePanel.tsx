import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { aiApi } from '../../services/api'
import type { UsagePeriod } from '../../types'
import { LoadingSpinner } from '../shared/LoadingSpinner'
import { ErrorMessage } from '../shared/ErrorMessage'
import { BudgetAlert } from './BudgetAlert'
import { TokenDisplay } from './TokenDisplay'
import { CostDisplay } from './CostDisplay'

interface AIUsagePanelProps {
  period?: UsagePeriod
}

export function AIUsagePanel({ period = 'monthly' }: AIUsagePanelProps): React.ReactElement | null {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['ai-usage', period],
    queryFn: () => aiApi.getUsage(period),
    refetchInterval: 60000,
  })

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">AI Usage</h3>
        <LoadingSpinner label="Loading usage data..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">AI Usage</h3>
        <ErrorMessage message="Failed to load usage data" onRetry={() => refetch()} />
      </div>
    )
  }

  if (!data) {
    return null
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">AI Usage ({period})</h3>

      {/* Budget Alert */}
      <div className="mb-4">
        <BudgetAlert
          percentageUsed={data.budget.percentage_used}
          budgetRemaining={data.budget.remaining}
        />
      </div>

      {/* Usage Stats */}
      <div className="space-y-4">
        <div>
          <TokenDisplay
            inputTokens={data.tokens_used.input}
            outputTokens={data.tokens_used.output}
            showTotal={true}
          />
        </div>

        <div>
          <CostDisplay cost={data.cost.amount} currency={data.cost.currency} />
        </div>

        <div className="pt-4 border-t">
          <div className="text-sm text-slate-600">
            <div>Requests: {data.requests_count}</div>
            <div>Avg tokens/request: {data.average_tokens_per_request.toLocaleString()}</div>
          </div>
        </div>

        {/* Model Breakdown */}
        {data.model_breakdown.length > 0 && (
          <div className="pt-4 border-t">
            <h4 className="text-sm font-semibold mb-2">Model Breakdown</h4>
            <div className="space-y-2">
              {data.model_breakdown.map((model) => (
                <div key={model.model_id} className="text-sm bg-slate-50 p-2 rounded">
                  <div className="font-medium">{model.model_id}</div>
                  <div className="text-slate-600">
                    {model.requests} requests, {model.tokens.toLocaleString()} tokens, ${model.cost.toFixed(4)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

