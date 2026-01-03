export const SAMPLE_CHARTS = [
  { code: '01A', name: 'Momentum Health', timeframe: 'Daily', webhookId: 'SAMPLE_01A' },
  { code: '02', name: 'HTF Structure', timeframe: 'Weekly', webhookId: 'SAMPLE_02' },
  { code: '04A', name: 'Risk Extension', timeframe: '3H', webhookId: 'SAMPLE_04A' },
  { code: '04B', name: 'Support/Resistance', timeframe: '3H', webhookId: 'SAMPLE_04B' },
  { code: '05A', name: 'VWAP Execution', timeframe: 'Daily', webhookId: 'SAMPLE_05A' },
  { code: '05B', name: 'Momentum Exhaustion', timeframe: 'Daily', webhookId: 'SAMPLE_05B' },
  { code: '05C', name: 'Extension Risk', timeframe: 'Daily', webhookId: 'SAMPLE_05C' },
  { code: '05D', name: 'VWAP Deviation', timeframe: 'Daily', webhookId: 'SAMPLE_05D' },
  { code: '06', name: 'Macro Correlation', timeframe: 'Daily', webhookId: 'SAMPLE_06' },
  { code: '07', name: 'Primary Trend', timeframe: 'Daily', webhookId: 'SAMPLE_07' },
  { code: '08', name: 'Volume Analysis', timeframe: 'Daily', webhookId: 'SAMPLE_08' },
  { code: '09', name: 'Order Flow', timeframe: 'Daily', webhookId: 'SAMPLE_09' },
] as const

export type SampleChart = typeof SAMPLE_CHARTS[number]

