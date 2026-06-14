export interface Category {
  id: string
  name: string
  icon: string
  subcategories?: Category[]
}

export interface Regulation {
  id: string
  title: string
  categoryId: string
  subcategoryId?: string
  summary: string
  content: string
  source: string
  sourceUrl: string
  publishDate: string
  effectiveDate: string
  tags: string[]
  version: number
}

export interface RegulationSummary {
  regulationId: string
  keyPoints: string[]
  auditFocus: string[]
  relatedStandards: string[]
}

export interface RegulationVersion {
  regulationId: string
  version: number
  content: string
  changeLog: string
  date: string
}

export interface PbcRelatedLaw {
  name: string
  url: string
}

export type PbcCategory =
  | 'basic-info'
  | 'cash-bank'
  | 'ar-revenue'
  | 'inventory'
  | 'fixed-assets'
  | 'ap-procurement'
  | 'expense-payroll'
  | 'equity-related-party'
  | 'tax-other'

export interface PbcItem {
  id: string
  name: string
  category: PbcCategory
  riskLevel: '高' | '中' | '低'
  erpModule: string
  relatedDepartments: string[]
  auditFocus: string[]
  commonIssues: string[]
  relatedLaws: PbcRelatedLaw[]
  relatedReports: string[]
}
