/**
 * CIA-SIE TypeScript Types
 *
 * Mirrors the domain models from the backend.
 *
 * CRITICAL DESIGN CONSTRAINTS:
 * - Chart has NO weight property (prohibited by ADR-003)
 * - Signal has NO confidence score (prohibited by ADR-003)
 */

// Enums
export type SignalType = 'HEARTBEAT' | 'STATE_CHANGE' | 'MANUAL'
export type Direction = 'BULLISH' | 'BEARISH' | 'NEUTRAL'
export type FreshnessStatus = 'CURRENT' | 'RECENT' | 'STALE' | 'UNAVAILABLE'
export type BasketType = 'LOGICAL' | 'HIERARCHICAL' | 'CONTEXTUAL' | 'CUSTOM'

// Domain Entities
export interface Instrument {
  instrument_id: string
  symbol: string
  display_name: string
  created_at: string
  updated_at: string
  is_active: boolean
  metadata?: Record<string, unknown>
}

export interface Silo {
  silo_id: string
  instrument_id: string
  silo_name: string
  heartbeat_enabled: boolean
  heartbeat_frequency_min: number
  current_threshold_min: number
  recent_threshold_min: number
  stale_threshold_min: number
  created_at: string
  updated_at: string
  is_active: boolean
}

/**
 * Chart entity.
 *
 * NOTE: NO weight property.
 * All charts have equal standing per ADR-003.
 */
export interface Chart {
  chart_id: string
  silo_id: string
  chart_code: string
  chart_name: string
  timeframe: string
  webhook_id: string
  created_at: string
  updated_at: string
  is_active: boolean
  // NOTE: Deliberately NO weight - prohibited by Section 0B
}

/**
 * Signal entity.
 *
 * NOTE: NO confidence score.
 * Scores imply system judgment which is prohibited.
 */
export interface Signal {
  signal_id: string
  chart_id: string
  received_at: string
  signal_timestamp: string
  signal_type: SignalType
  direction: Direction
  indicators: Record<string, unknown>
  raw_payload: Record<string, unknown>
  // NOTE: Deliberately NO confidence - prohibited by Section 0B
}

export interface AnalyticalBasket {
  basket_id: string
  basket_name: string
  basket_type: BasketType
  description?: string
  instrument_id?: string
  chart_ids: string[]
  created_at: string
  updated_at: string
  is_active: boolean
}

// Relationship Types
export interface Contradiction {
  chart_a_id: string
  chart_a_name: string
  chart_a_direction: Direction
  chart_b_id: string
  chart_b_name: string
  chart_b_direction: Direction
  detected_at: string
}

export interface Confirmation {
  chart_a_id: string
  chart_a_name: string
  chart_b_id: string
  chart_b_name: string
  aligned_direction: Direction
  detected_at: string
}

export interface ChartSignalStatus {
  chart_id: string
  chart_code: string
  chart_name: string
  timeframe: string
  latest_signal: Signal | null
  freshness: FreshnessStatus
}

export interface RelationshipSummary {
  silo_id: string
  silo_name: string
  instrument_id: string
  instrument_symbol: string
  charts: ChartSignalStatus[]
  contradictions: Contradiction[]
  confirmations: Confirmation[]
  generated_at: string
}

// Narrative Types
export interface NarrativeSection {
  section_type: 'SIGNAL_SUMMARY' | 'CONTRADICTION' | 'CONFIRMATION' | 'FRESHNESS'
  content: string
  referenced_chart_ids: string[]
}

export interface Narrative {
  narrative_id: string
  silo_id: string
  sections: NarrativeSection[]
  closing_statement: string
  generated_at: string
}

// API Response Types
export interface ApiError {
  detail: string
}

export interface WebhookResponse {
  status: 'accepted'
  signal_id: string
  chart_id: string
  direction: Direction
  received_at: string
}

// AI Model Types
export type AIModelTier = 'HAIKU' | 'SONNET' | 'OPUS'
export type UsagePeriod = 'daily' | 'weekly' | 'monthly'
export type MessageRole = 'user' | 'assistant'

export interface AIModel {
  id: string
  display_name: string
  description: string
  cost_per_1k_input_tokens: number
  cost_per_1k_output_tokens: number
  max_tokens: number
  capabilities: string[]
  recommended_for: string[]
}

export interface ModelsListResponse {
  models: AIModel[]
  default_model: string
  budget_remaining: number
}

export interface UsageInfo {
  input_tokens: number
  output_tokens: number
  cost: number
  model_used: string
}

export interface BudgetInfo {
  limit: number
  used: number
  remaining: number
  percentage_used: number
}

export interface ModelBreakdown {
  model_id: string
  requests: number
  tokens: number
  cost: number
}

export interface UsageResponse {
  period: UsagePeriod
  period_start: string
  period_end: string
  tokens_used: {
    input: number
    output: number
    total: number
  }
  cost: {
    amount: number
    currency: string
  }
  budget: BudgetInfo
  requests_count: number
  average_tokens_per_request: number
  model_breakdown: ModelBreakdown[]
}

export interface BudgetStatusResponse {
  within_budget: boolean
  percentage_used: number
  remaining: number
  alert_level: 'warning' | 'critical' | 'blocked' | null
  message: string | null
}

// Chat Types
export interface ChatMessage {
  role: MessageRole
  content: string
  timestamp?: string
}

export interface ChatRequest {
  message: string
  model?: string
  include_context?: boolean
  conversation_id?: string
}

export interface ContextInfo {
  signals_included: number
  charts_referenced: string[]
}

export interface ChatResponse {
  conversation_id: string
  message: ChatMessage
  context_used: ContextInfo | null
  usage: UsageInfo
  disclaimer: string
}

export interface ConversationSummary {
  conversation_id: string
  messages: ChatMessage[]
  created_at: string
  total_tokens: number
  total_cost: number
}

export interface ChatHistoryResponse {
  scrip_id: string
  conversations: ConversationSummary[]
}

// Strategy Types
export interface StrategyEvaluationRequest {
  scrip_id: string
  strategy_description: string
  model?: string
}

export interface StrategyAnalysis {
  alignment_with_signals: string
  contradictions_noted: string[]
  confirmations_noted: string[]
  freshness_concerns: string[]
}

export interface StrategyEvaluationResponse {
  analysis: StrategyAnalysis
  disclaimer: string
  usage: UsageInfo
}
