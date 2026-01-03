import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Layout } from '../components/layout/Layout'
import { PageHeader } from '../components/layout/PageHeader'
import { instrumentsApi } from '../services/api'
import { Badge } from '../components/shared/Badge'
import { LoadingSpinner } from '../components/shared/LoadingSpinner'

export function InstrumentList(): React.ReactElement {
  const navigate = useNavigate()
  const { data: instruments, isLoading } = useQuery({
    queryKey: ['instruments', false],
    queryFn: () => instrumentsApi.list(false),
  })

  return (
    <Layout>
      <PageHeader
        badge="Instruments"
        title="All Instruments"
        description="Manage your trading instruments"
      />
      <div className="p-10 max-w-4xl">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">Symbol</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {instruments?.map((inst) => (
                  <tr
                    key={inst.instrument_id}
                    onClick={() => navigate(`/instruments/${inst.instrument_id}`)}
                    className="hover:bg-slate-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 font-medium">{inst.symbol}</td>
                    <td className="px-6 py-4 text-slate-600">{inst.display_name}</td>
                    <td className="px-6 py-4">
                      <Badge variant={inst.is_active ? 'success' : 'danger'}>
                        {inst.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  )
}

