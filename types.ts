
export interface Lead {
  id: string;
  name: string;
  email: string;
  message: string;
  interest: 'ALTO' | 'MEDIO' | 'BAJO';
  date: string;
}

export interface ROIResult {
  monthlyLeads: number;
  monthlySales: number;
  monthlyRevenue: number;
  roi: number;
  netProfit: number;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system' | 'function';
  parts: any[]; // Allowed to be flexible for text, functionCall, and functionResponse parts
}
