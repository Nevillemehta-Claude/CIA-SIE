import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { chatApi } from '../services/api'
import type { ChatRequest } from '../types'

export function useChat(instrumentId: string) {
  const queryClient = useQueryClient()

  const history = useQuery({
    queryKey: ['chat-history', instrumentId],
    queryFn: () => chatApi.getHistory(instrumentId),
    enabled: !!instrumentId,
  })

  const sendMessage = useMutation({
    mutationFn: (request: ChatRequest) => chatApi.sendMessage(instrumentId, request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chat-history', instrumentId] })
    },
  })

  return { history, sendMessage }
}

