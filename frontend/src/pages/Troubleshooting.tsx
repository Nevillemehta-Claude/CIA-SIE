import React from 'react'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/layout/PageHeader'
import { InfoBox } from '../components/shared/InfoBox'
import { Accordion } from '../components/shared/Accordion'

export function Troubleshooting(): React.ReactElement {
  const faqItems = [
    {
      title: 'No signals appearing',
      content: (
        <div className="space-y-2">
          <p>Check that:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Charts are configured and active</li>
            <li>Webhooks are properly set up</li>
            <li>Instruments are active</li>
            <li>Check the freshness indicators - signals may be stale</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'AI features not working',
      content: (
        <div className="space-y-2">
          <p>Verify:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>AI API key is configured</li>
            <li>Budget has not been exhausted</li>
            <li>Check budget status in Settings</li>
            <li>Verify AI service health</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Contradictions not showing',
      content: (
        <div className="space-y-2">
          <p>Ensure:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Multiple charts are configured for the silo</li>
            <li>Charts have different directions</li>
            <li>Signals are current (not stale)</li>
          </ul>
        </div>
      ),
    },
  ]

  return (
    <Layout>
      <PageHeader
        badge="Troubleshooting"
        title="Troubleshooting Guide"
        description="Common issues and solutions"
      />
      <div className="p-10 max-w-4xl">
        <div className="space-y-6">
          <InfoBox variant="info" title="Need Help?">
            <p>If you encounter issues, check the sections below for common solutions.</p>
          </InfoBox>

          <section>
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <Accordion items={faqItems} />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">System Status</h2>
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-slate-600">
                For detailed system status and health checks, visit the Settings page.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

