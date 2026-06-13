import type { Category } from '../../types'

export const categories: Category[] = [
  {
    id: 'tax',
    name: '稅務法規',
    icon: '💰',
    subcategories: [
      { id: 'income-tax', name: '所得稅法及施行細則', icon: '📋' },
      { id: 'business-tax', name: '營業稅法', icon: '🧾' },
      { id: 'tax-collection', name: '稅捐稽徵法', icon: '📁' },
    ],
  },
  {
    id: 'internal-control',
    name: '會計內控機制',
    icon: '🔒',
    subcategories: [
      { id: 'ic-standards', name: '公開發行公司內部控制處理準則', icon: '📘' },
      { id: 'ic-validation', name: '內部控制制度有效性判斷項目', icon: '✅' },
    ],
  },
  {
    id: 'ifrs',
    name: 'IFRS 準則',
    icon: '🌐',
    subcategories: [
      { id: 'ifrs-standards', name: 'IFRS 各號公報', icon: '📗' },
      { id: 'tifrs-diff', name: 'TIFRS 差異對照', icon: '🔍' },
    ],
  },
  {
    id: 'audit',
    name: '查核準則',
    icon: '📊',
    subcategories: [
      { id: 'profit-seeking', name: '營利事業所得稅查核準則', icon: '📕' },
      { id: 'industry-notes', name: '各行業查核注意事項', icon: '📋' },
    ],
  },
  {
    id: 'pbc',
    name: '審計 PBC',
    icon: '📂',
    subcategories: [
      { id: 'pbc-templates', name: 'PBC 清單範本', icon: '📄' },
      { id: 'audit-procedures', name: '審計程序對照', icon: '📝' },
    ],
  },
  {
    id: 'tax-filing',
    name: '所得稅申報',
    icon: '📈',
    subcategories: [
      { id: 'profit-tax', name: '營所稅結算申報', icon: '🏢' },
      { id: 'individual-tax', name: '綜合所得稅申報', icon: '👤' },
    ],
  },
]
