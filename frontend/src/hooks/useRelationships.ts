/**
 * Custom hook for managing relationships.
 */

import { useQuery } from '@tanstack/react-query'
import { relationshipsApi, narrativesApi } from '../services/api'

export function useSiloRelationships(siloId: string) {
  return useQuery({
    queryKey: ['relationships', 'silo', siloId],
    queryFn: () => relationshipsApi.getForSilo(siloId),
    enabled: !!siloId,
    refetchInterval: 60000, // Refresh every minute
  })
}

export function useInstrumentRelationships(instrumentId: string) {
  return useQuery({
    queryKey: ['relationships', 'instrument', instrumentId],
    queryFn: () => relationshipsApi.getForInstrument(instrumentId),
    enabled: !!instrumentId,
    refetchInterval: 60000,
  })
}

export function useSiloContradictions(siloId: string) {
  return useQuery({
    queryKey: ['contradictions', siloId],
    queryFn: () => relationshipsApi.getContradictions(siloId),
    enabled: !!siloId,
  })
}

export function useSiloNarrative(siloId: string, useAi = true) {
  return useQuery({
    queryKey: ['narrative', siloId, { useAi }],
    queryFn: () => narrativesApi.generateForSilo(siloId, useAi),
    enabled: !!siloId,
    staleTime: 300000, // 5 minutes - narratives are expensive
  })
}
