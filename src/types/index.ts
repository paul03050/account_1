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
