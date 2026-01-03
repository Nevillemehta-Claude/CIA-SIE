/**
 * CIA-SIE API Service
 *
 * Axios-based HTTP client for backend communication.
 */

import axios from 'axios'
import type {
  Instrument,
  Silo,
  Chart,
  Signal,
  RelationshipSummary,
  Narrative,
  AnalyticalBasket,
  ModelsListResponse,
  UsageResponse,
  BudgetStatusResponse,
  UsagePeriod,
  ChatRequest,
  ChatResponse,
  ChatHistoryResponse,
  StrategyEvaluationRequest,
  StrategyEvaluationResponse,
} from '../types'

const api = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Instruments
export const instrumentsApi = {
  list: async (activeOnly = true): Promise<Instrument[]> => {
    const { data } = await api.get('/instruments/', { params: { active_only: activeOnly } })
    return data
  },

  get: async (id: string): Promise<Instrument> => {
    const { data } = await api.get(`/instruments/${id}`)
    return data
  },

  getBySymbol: async (symbol: string): Promise<Instrument> => {
    const { data } = await api.get(`/instruments/symbol/${symbol}`)
    return data
  },

  create: async (instrument: { symbol: string; display_name: string }): Promise<Instrument> => {
    const { data } = await api.post('/instruments/', instrument)
    return data
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/instruments/${id}`)
  },
}

// Silos
export const silosApi = {
  list: async (instrumentId?: string, activeOnly = true): Promise<Silo[]> => {
    const { data } = await api.get('/silos/', {
      params: { instrument_id: instrumentId, active_only: activeOnly },
    })
    return data
  },

  get: async (id: string): Promise<Silo> => {
    const { data } = await api.get(`/silos/${id}`)
    return data
  },

  create: async (silo: Partial<Silo>): Promise<Silo> => {
    const { data } = await api.post('/silos/', silo)
    return data
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/silos/${id}`)
  },
}

// Charts
export const chartsApi = {
  list: async (siloId?: string, activeOnly = true): Promise<Chart[]> => {
    const { data } = await api.get('/charts/', {
      params: { silo_id: siloId, active_only: activeOnly },
    })
    return data
  },

  get: async (id: string): Promise<Chart> => {
    const { data } = await api.get(`/charts/${id}`)
    return data
  },

  getByWebhook: async (webhookId: string): Promise<Chart> => {
    const { data } = await api.get(`/charts/webhook/${webhookId}`)
    return data
  },

  create: async (chart: Partial<Chart>): Promise<Chart> => {
    const { data } = await api.post('/charts/', chart)
    return data
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/charts/${id}`)
  },
}

// Signals
export const signalsApi = {
  listForChart: async (chartId: string, limit = 100): Promise<Signal[]> => {
    const { data } = await api.get(`/signals/chart/${chartId}`, { params: { limit } })
    return data
  },

  getLatest: async (chartId: string): Promise<Signal | null> => {
    const { data } = await api.get(`/signals/chart/${chartId}/latest`)
    return data
  },

  get: async (id: string): Promise<Signal> => {
    const { data } = await api.get(`/signals/${id}`)
    return data
  },
}

// Relationships
export const relationshipsApi = {
  getForSilo: async (siloId: string): Promise<RelationshipSummary> => {
    const { data } = await api.get(`/relationships/silo/${siloId}`)
    return data
  },

  getForInstrument: async (instrumentId: string): Promise<RelationshipSummary[]> => {
    const { data } = await api.get(`/relationships/instrument/${instrumentId}`)
    return data
  },

  getContradictions: async (siloId: string) => {
    const { data } = await api.get(`/relationships/contradictions/silo/${siloId}`)
    return data
  },
}

// Narratives
export const narrativesApi = {
  generateForSilo: async (siloId: string, useAi = true): Promise<Narrative> => {
    const { data } = await api.get(`/narratives/silo/${siloId}`, { params: { use_ai: useAi } })
    return data
  },

  getPlainText: async (siloId: string, useAi = true) => {
    const { data } = await api.get(`/narratives/silo/${siloId}/plain`, { params: { use_ai: useAi } })
    return data
  },
}

// Baskets
export const basketsApi = {
  list: async (instrumentId?: string, activeOnly = true): Promise<AnalyticalBasket[]> => {
    const { data } = await api.get('/baskets/', {
      params: { instrument_id: instrumentId, active_only: activeOnly },
    })
    return data
  },

  get: async (id: string): Promise<AnalyticalBasket> => {
    const { data } = await api.get(`/baskets/${id}`)
    return data
  },

  create: async (basket: Partial<AnalyticalBasket>): Promise<AnalyticalBasket> => {
    const { data } = await api.post('/baskets/', basket)
    return data
  },

  addChart: async (basketId: string, chartId: string): Promise<void> => {
    await api.post(`/baskets/${basketId}/charts/${chartId}`)
  },

  removeChart: async (basketId: string, chartId: string): Promise<void> => {
    await api.delete(`/baskets/${basketId}/charts/${chartId}`)
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/baskets/${id}`)
  },
}

// AI Management
export const aiApi = {
  /**
   * List available Claude AI models.
   */
  listModels: async (): Promise<ModelsListResponse> => {
    const { data } = await api.get('/ai/models')
    return data
  },

  /**
   * Get AI usage statistics for a period.
   */
  getUsage: async (period: UsagePeriod = 'monthly'): Promise<UsageResponse> => {
    const { data } = await api.get('/ai/usage', { params: { period } })
    return data
  },

  /**
   * Check current budget status.
   */
  checkBudget: async (): Promise<BudgetStatusResponse> => {
    const { data } = await api.get('/ai/budget')
    return data
  },

  /**
   * Configure AI settings (in-memory only).
   */
  configure: async (config: {
    default_model?: string
    budget_limit?: number
    alert_threshold?: number
  }): Promise<{ status: string; settings: Record<string, unknown> }> => {
    const { data } = await api.post('/ai/configure', config)
    return data
  },

  /**
   * Check AI service health.
   */
  healthCheck: async (): Promise<{
    status: string
    model: string
    api_configured: boolean
    error?: string
  }> => {
    const { data } = await api.get('/ai/health')
    return data
  },
}

// AI Chat (Per-Instrument)
export const chatApi = {
  /**
   * Send a chat message about a specific instrument.
   * Returns AI-generated DESCRIPTIVE response (never recommendations).
   */
  sendMessage: async (scripId: string, request: ChatRequest): Promise<ChatResponse> => {
    const { data } = await api.post(`/chat/${scripId}`, request)
    return data
  },

  /**
   * Get conversation history for an instrument.
   */
  getHistory: async (scripId: string, limit = 50): Promise<ChatHistoryResponse> => {
    const { data } = await api.get(`/chat/${scripId}/history`, { params: { limit } })
    return data
  },
}

// Strategy Evaluation
export const strategyApi = {
  /**
   * Evaluate how a stated strategy aligns with current signals.
   *
   * IMPORTANT: This returns a DESCRIPTION of alignment, NOT a recommendation.
   * The response describes which signals support or contradict the stated strategy.
   * It does NOT advise whether to proceed.
   */
  evaluate: async (request: StrategyEvaluationRequest): Promise<StrategyEvaluationResponse> => {
    const { data } = await api.post('/strategy/evaluate', request)
    return data
  },
}

export default api
