import React from 'react'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/layout/PageHeader'
import { SAMPLE_CHARTS } from '../constants/sampleCharts'
import { Card } from '../components/shared/Card'

export function ChartsReference(): React.ReactElement {
  return (
    <Layout>
      <PageHeader
        badge="Reference"
        title="12 Sample Charts"
        description="Reference guide for the 12 sample charts used in CIA-SIE"
      />
      <div className="p-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SAMPLE_CHARTS.map((chart) => (
            <Card key={chart.code} title={chart.code}>
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-slate-500">Name:</span>
                  <span className="ml-2 font-medium">{chart.name}</span>
                </div>
                <div>
                  <span className="text-sm text-slate-500">Timeframe:</span>
                  <span className="ml-2">{chart.timeframe}</span>
                </div>
                <div>
                  <span className="text-sm text-slate-500">Webhook ID:</span>
                  <span className="ml-2 font-mono text-xs">{chart.webhookId}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

