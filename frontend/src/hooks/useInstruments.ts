/**
 * Custom hook for managing instruments.
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { instrumentsApi } from '../services/api'

export function useInstruments(activeOnly = true) {
  return useQuery({
    queryKey: ['instruments', { activeOnly }],
    queryFn: () => instrumentsApi.list(activeOnly),
  })
}

export function useInstrument(id: string) {
  return useQuery({
    queryKey: ['instrument', id],
    queryFn: () => instrumentsApi.get(id),
    enabled: !!id,
  })
}

export function useCreateInstrument() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: { symbol: string; display_name: string }) =>
      instrumentsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['instruments'] })
    },
  })
}

export function useDeleteInstrument() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => instrumentsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['instruments'] })
    },
  })
}
