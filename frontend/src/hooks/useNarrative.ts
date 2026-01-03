import { useQuery } from '@tanstack/react-query'
import { narrativesApi } from '../services/api'

export function useNarrative(siloId: string, useAi = true) {
  return useQuery({
    queryKey: ['narrative', siloId, useAi],
    queryFn: () => narrativesApi.generateForSilo(siloId, useAi),
    enabled: !!siloId,
    staleTime: 5 * 60 * 1000,
  })
}

