import type { RegulationSummary, RegulationVersion } from '../../types'

export const summaries: RegulationSummary[] = [
  {
    regulationId: 'income-tax-law',
    keyPoints: [
      '綜合所得稅課稅範圍為中華民國來源所得',
      '所得分類共十類，各類所得計算方式不同',
      '營利事業所得稅稅率為 20%',
      '扣繳義務人應依規定扣繳稅款',
    ],
    auditFocus: [
      '各類所得是否正確分類',
      '免稅所得與應稅所得是否區分',
      '成本費用歸屬是否合理',
      '扣繳率是否正確適用',
    ],
    relatedStandards: ['查核準則', '營利事業所得稅查核準則'],
  },
  {
    regulationId: 'business-tax-law',
    keyPoints: [
      '銷售貨物或勞務及進口貨物均應課徵營業稅',
      '加值型稅率為 5%，非加值型稅率為 1% 或 2%',
      '零稅率適用於外銷貨物及勞務',
    ],
    auditFocus: [
      '是否依法開立統一發票',
      '進項稅額扣抵是否合規',
      '零稅率申報是否有證明文件',
    ],
    relatedStandards: ['統一發票使用辦法', '營業稅申報作業要點'],
  },
  {
    regulationId: 'tax-collection-law',
    keyPoints: [
      '稅捐稽徵優先於普通債權',
      '核課期間為 5 年至 7 年',
      '徵收期間為 5 年',
    ],
    auditFocus: [
      '核課期間是否屆滿',
      '徵收程序是否合法',
      '行政救濟程序是否完備',
    ],
    relatedStandards: ['行政程序法', '訴願法', '行政訴訟法'],
  },
  {
    regulationId: 'ic-standards',
    keyPoints: [
      '內控五大要素：控制環境、風險評估、控制作業、資訊與溝通、監督',
      '內部控制制度應涵蓋所有營運活動',
      '應以書面方式訂定內部控制制度',
    ],
    auditFocus: [
      '內部控制制度設計是否完整',
      '控制作業是否有效執行',
      '自行檢查是否確實',
    ],
    relatedStandards: ['證券交易法', '審計準則公報第 48 號'],
  },
  {
    regulationId: 'ic-validation',
    keyPoints: [
      '有效性判斷涵蓋五大組成要素',
      '控制環境著重誠信價值觀與組織結構',
      '風險評估需包括舞弊風險評估',
    ],
    auditFocus: [
      '判斷項目是否完整涵蓋各要素',
      '評估結論是否有足夠佐證',
      '缺失改善追蹤是否落實',
    ],
    relatedStandards: ['公開發行公司內部控制處理準則', 'COSO 內部控制整合架構'],
  },
  {
    regulationId: 'ifrs-16',
    keyPoints: [
      '承租人應認列使用權資產及租賃負債',
      '租賃之辨認以控制使用權為判斷基礎',
      '出租人仍區分融資租賃與營業租賃',
    ],
    auditFocus: [
      '租賃合約是否正確辨認',
      '使用權資產及租賃負債衡量是否正確',
      '折舊及利息費用是否合理',
    ],
    relatedStandards: ['IAS 17', 'IFRIC 4'],
  },
  {
    regulationId: 'ifrs-9',
    keyPoints: [
      '金融資產三分類：AC、FVOCI、FVTPL',
      '減損採預期信用損失模式（ECL）',
      '避險會計更貼近企業風險管理實務',
    ],
    auditFocus: [
      '金融資產分類是否恰當',
      '預期信用損失參數是否合理',
      'SPPI 測試是否正確執行',
    ],
    relatedStandards: ['IAS 39', 'IFRS 7', 'IFRS 13'],
  },
  {
    regulationId: 'ifrs-15',
    keyPoints: [
      '五步驟收入認列模型取代各號公報',
      '履約義務辨認為關鍵步驟',
      '交易價格分攤須反映獨立售價',
    ],
    auditFocus: [
      '履約義務是否正確辨認',
      '收入認列時點是否恰當（時點法/期間法）',
      '變動對價估計是否合理',
    ],
    relatedStandards: ['IAS 11', 'IAS 18', 'IFRS 15'],
  },
  {
    regulationId: 'profit-seeking-audit',
    keyPoints: [
      '收入、成本、費用之查核認定標準',
      '關係人交易之查核重點',
      '虧損扣抵之查核程序',
    ],
    auditFocus: [
      '收入認列是否與所得稅法一致',
      '費用是否有合法憑證',
      '虧損扣抵資料是否完整',
    ],
    relatedStandards: ['所得稅法', '營利事業所得稅查核準則'],
  },
  {
    regulationId: 'pbc-checklist',
    keyPoints: [
      'PBC 清單分為公司資料、財務資料、內控資料三大類',
      '委任前應取得完整基本資料',
      '內部控制制度聲明書為必要文件',
    ],
    auditFocus: [
      'PBC 資料是否齊全',
      '資料時效性是否符合查核期間',
      '是否取得足夠之外部佐證文件',
    ],
    relatedStandards: ['審計準則公報第 36 號', 'ISA 210'],
  },
]

export const versionHistory: RegulationVersion[] = [
  {
    regulationId: 'income-tax-law',
    version: 1,
    content: '所得稅法原始版本',
    changeLog: '初始版本',
    date: '2024-01-01',
  },
  {
    regulationId: 'ic-standards',
    version: 1,
    content: '公開發行公司內部控制處理準則原始版本',
    changeLog: '初始版本',
    date: '2024-01-01',
  },
]
