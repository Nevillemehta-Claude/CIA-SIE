import { useQuery } from '@tanstack/react-query'
import { aiApi } from '../services/api'
import type { UsagePeriod } from '../types'

export function useAIModels() {
  return useQuery({
    queryKey: ['ai-models'],
    queryFn: () => aiApi.listModels(),
    staleTime: 10 * 60 * 1000,
  })
}

export function useAIUsage(period: UsagePeriod = 'monthly') {
  return useQuery({
    queryKey: ['ai-usage', period],
    queryFn: () => aiApi.getUsage(period),
    refetchInterval: 60000,
  })
}

export function useAIBudget() {
  return useQuery({
    queryKey: ['ai-budget'],
    queryFn: () => aiApi.checkBudget(),
    refetchInterval: 60000,
  })
}

