import type { PbcItem } from '../../types'

export const pbcItems: PbcItem[] = [
  // ============================================================
  // 1. 基本資料與整體勾稽類
  // ============================================================
  {
    id: 'pbc-trial-balance',
    name: '試算表（Trial Balance）——期初、期末、調整後',
    category: 'basic-info',
    riskLevel: '低',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['會計部'],
    auditFocus: [
      '期初餘額是否與前期期末餘額一致',
      '調整分錄是否完整且合理',
      '試算表借貸方總額是否平衡',
    ],
    commonIssues: [
      '期初餘額與前期查核報告不一致 → 資產負債表保留盈餘可能錯誤',
      '調整分錄缺乏佐證文件 → 損益表費用歸屬期間不正確',
    ],
    relatedLaws: [
      { name: '商業會計法第 33 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['資產負債表-全部科目', '損益表-全部科目'],
  },
  {
    id: 'pbc-general-ledger',
    name: '總分類帳（General Ledger）完整檔（Excel 或系統匯出）',
    category: 'basic-info',
    riskLevel: '低',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['會計部', '資訊部'],
    auditFocus: [
      '總帳科目餘額與試算表是否一致',
      '各科目交易明細是否完整可追溯',
      '異常分錄（如整數大額、夜間登打）是否有合理說明',
    ],
    commonIssues: [
      '總帳與試算表餘額不一致 → 財務報表可能錯誤表達',
      '缺乏異常分錄審核紀錄 → 舞弊風險提高',
    ],
    relatedLaws: [
      { name: '商業會計法第 21 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['資產負債表-全部科目', '損益表-全部科目'],
  },
  {
    id: 'pbc-account-balance',
    name: '科目餘額表（Account Balance Listing）',
    category: 'basic-info',
    riskLevel: '低',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['會計部'],
    auditFocus: [
      '科目餘額與總帳分類帳是否勾稽一致',
      '借方餘額科目是否無異常貸方餘額（反之亦然）',
      '科目餘額重大變動是否合理說明',
    ],
    commonIssues: [
      '應收帳款出現貸方餘額未重分類 → 資產負債表應收/應付可能錯誤',
      '科目餘額年度間劇烈變動未說明 → 損益表收入/成本可能有誤',
    ],
    relatedLaws: [
      { name: '商業會計法第 22 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['資產負債表-全部科目'],
  },
  {
    id: 'pbc-financial-statements',
    name: '自編資產負債表、綜合損益表、現金流量表、權益變動表（含附註草稿）',
    category: 'basic-info',
    riskLevel: '低',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['會計部'],
    auditFocus: [
      '四大報表間勾稽關係是否正確（如：淨利→權益變動表→現金流量表）',
      '附註揭露是否完整且與報表數字一致',
      '會計政策是否一貫採用',
    ],
    commonIssues: [
      '現金流量表與資產負債表現金數字不一致 → 現金流量可能錯誤表達',
      '附註數字與報表主表不一致 → 財務報表可信度受影響',
    ],
    relatedLaws: [
      { name: '商業會計法第 28 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
      { name: '證券交易法第 36 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340006' },
    ],
    relatedReports: ['資產負債表', '綜合損益表', '現金流量表', '權益變動表'],
  },
  {
    id: 'pbc-org-structure',
    name: '組織架構圖、股權結構圖、關係人清冊',
    category: 'basic-info',
    riskLevel: '中',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['財務部', '法務部'],
    auditFocus: [
      '股權結構是否與公司登記一致',
      '關係人清冊是否完整（含實質關係人）',
      '組織架構是否反映實際營運流程',
    ],
    commonIssues: [
      '關係人清冊遺漏 → 可能導致關係人交易未揭露，違反證券交易法',
      '股權結構與登記不一致 → 所有權權益表達錯誤',
    ],
    relatedLaws: [
      { name: '證券交易法第 22-2 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340006' },
      { name: '所得稅法第 43-1 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['股東權益變動表'],
  },
  {
    id: 'pbc-corporate-docs',
    name: '公司章程、董監事名冊、股東名冊（最新版）',
    category: 'basic-info',
    riskLevel: '低',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['法務部', '財務部'],
    auditFocus: [
      '章程修訂是否已完成登記',
      '董監事任期是否合法',
      '股東名冊與股務代理紀錄是否一致',
    ],
    commonIssues: [
      '章程未更新至最新版 → 增資減資等重大事項可能未合法登記',
      '董監事名冊與實際不符 → 股東會決議效力可能受影響',
    ],
    relatedLaws: [
      { name: '公司法第 129 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['股東權益變動表'],
  },
  {
    id: 'pbc-internal-control',
    name: '內部控制制度文件（流程圖、風險控制矩陣 RCM）',
    category: 'basic-info',
    riskLevel: '中',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['稽核部', '會計部'],
    auditFocus: [
      '內部控制制度是否涵蓋所有重大營運流程',
      'RCM 風險控制矩陣是否完整',
      '內控制度是否符合金管會規範',
    ],
    commonIssues: [
      '流程圖與實際作業不符 → 控制測試可能無效',
      'RCM 未涵蓋所有重大風險 → 關鍵控制點可能遺漏',
    ],
    relatedLaws: [
      { name: '公開發行公司內部控制處理準則', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340003' },
    ],
    relatedReports: [],
  },

  // ============================================================
  // 2. 貨幣資金 / 銀行類
  // ============================================================
  {
    id: 'pbc-bank-statements',
    name: '所有銀行帳戶對帳單（全年度 + 期後）',
    category: 'cash-bank',
    riskLevel: '高',
    erpModule: 'TR-資金管理',
    relatedDepartments: ['財務部'],
    auditFocus: [
      '銀行對帳單餘額與銀行調節表是否一致',
      '期後大額交易是否有合理商業目的',
      '所有銀行帳戶是否均已取得對帳單',
    ],
    commonIssues: [
      '未入帳調節項目未合理說明 → 資產負債表貨幣資金可能不實',
      '長期未兌現支票未處理 → 應付票據可能高估',
      '部分帳戶遺漏未提供對帳單 → 資金餘額可能不完整',
    ],
    relatedLaws: [
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
      { name: '商業會計法第 38 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['資產負債表-貨幣資金', '現金流量表'],
  },
  {
    id: 'pbc-bank-confirmation',
    name: '銀行存款餘額證明函（Bank Confirmation）草稿或已寄出副本',
    category: 'cash-bank',
    riskLevel: '高',
    erpModule: 'TR-資金管理',
    relatedDepartments: ['財務部', '會計部'],
    auditFocus: [
      '銀行回函金額是否與帳載一致',
      '所有銀行帳戶是否均已發函',
      '回函是否直接寄回會計師事務所',
    ],
    commonIssues: [
      '部分帳戶遺漏未發函 → 貨幣資金餘額查核範圍不足',
      '回函差異未及時調節 → 損益表利息收入可能錯誤',
      '回函由客戶轉交而非直接寄回 → 證據力不足',
    ],
    relatedLaws: [
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
      { name: '營利事業所得稅查核準則第 15 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004' },
    ],
    relatedReports: ['資產負債表-貨幣資金', '損益表-利息收入'],
  },
  {
    id: 'pbc-bank-details',
    name: '銀行往來明細、利息計算表',
    category: 'cash-bank',
    riskLevel: '中',
    erpModule: 'TR-資金管理',
    relatedDepartments: ['財務部'],
    auditFocus: [
      '利息收入是否與銀行存款平均餘額匹配',
      '手續費支出是否有合理依據',
      '大額資金移轉是否有恰當授權',
    ],
    commonIssues: [
      '利息收入明顯偏低 → 可能有未入帳帳戶或資金遭挪用',
      '手續費異常偏高 → 可能有異常交易',
    ],
    relatedLaws: [
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['損益表-利息收入', '損益表-手續費'],
  },
  {
    id: 'pbc-time-deposits',
    name: '定期存款 / 外幣存款明細、到期日、利率',
    category: 'cash-bank',
    riskLevel: '中',
    erpModule: 'TR-資金管理',
    relatedDepartments: ['財務部'],
    auditFocus: [
      '定存到期日是否在資產負債表日後一年內（流動性分類）',
      '利率是否符合市場行情',
      '外幣存款評價損益是否已正確認列',
    ],
    commonIssues: [
      '定存到期日超過一年未正確分類 → 流動資產可能高估',
      '外幣評價未依匯率調整 → 損益表匯兌損益可能錯誤',
    ],
    relatedLaws: [
      { name: '商業會計法第 41 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['資產負債表-貨幣資金', '損益表-匯兌損益'],
  },
  {
    id: 'pbc-petty-cash',
    name: '零用金 / 備用金明細及盤點表',
    category: 'cash-bank',
    riskLevel: '低',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['財務部', '會計部'],
    auditFocus: [
      '零用金盤點金額是否與帳面一致',
      '零用金報銷是否有合理憑證',
      '備用金限額是否合理',
    ],
    commonIssues: [
      '零用金盤盈虧未入帳 → 損益表其他收入/費用人帳不實',
      '報銷憑證不足 → 可能有費用浮報情形',
    ],
    relatedLaws: [
      { name: '商業會計法第 38 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['資產負債表-貨幣資金', '損益表-其他費用'],
  },

  // ============================================================
  // 3. 應收帳款 / 收入循環
  // ============================================================
  {
    id: 'pbc-ar-aging',
    name: '應收帳款 / 票據明細表（aging analysis，按客戶分）',
    category: 'ar-revenue',
    riskLevel: '高',
    erpModule: 'SD-銷售配銷',
    relatedDepartments: ['業務部', '會計部'],
    auditFocus: [
      '帳齡分析是否按發票日期正確計算',
      '逾期帳款是否已提列足夠備抵損失',
      '大額或異常客戶餘額是否有合理說明',
    ],
    commonIssues: [
      '帳齡計算基準不一致 → 備抵損失可能低估或高估',
      '長期逾期帳款未催收亦未提列損失 → 資產可能高估',
      '客戶餘額與對帳單不一致 → 收入認列可能有誤',
    ],
    relatedLaws: [
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
      { name: '營利事業所得稅查核準則第 15 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004' },
    ],
    relatedReports: ['資產負債表-應收帳款', '損益表-呆帳費用'],
  },
  {
    id: 'pbc-ar-confirmation',
    name: '客戶對帳單或對帳回函（Confirmation）樣本',
    category: 'ar-revenue',
    riskLevel: '高',
    erpModule: 'SD-銷售配銷',
    relatedDepartments: ['業務部', '會計部'],
    auditFocus: [
      '選樣客戶是否涵蓋重大餘額及逾期帳款',
      '回函差異是否已查明並調整',
      '未回函客戶是否已執行替代查核程序',
    ],
    commonIssues: [
      '回函差異未處理 → 應收帳款餘額可能不實',
      '替代程序未執行 → 查核證據不足',
      '選樣未涵蓋高風險客戶 → 重大不實表達可能遺漏',
    ],
    relatedLaws: [
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['資產負債表-應收帳款'],
  },
  {
    id: 'pbc-sales-detail',
    name: '銷貨明細表、統一發票明細、銷貨日報表',
    category: 'ar-revenue',
    riskLevel: '高',
    erpModule: 'SD-銷售配銷',
    relatedDepartments: ['業務部', '會計部'],
    auditFocus: [
      '銷貨明細與開立發票是否一致',
      '銷貨截止是否正確（資產負債表日前後交易）',
      '銷貨退回及折讓是否已正確入帳',
    ],
    commonIssues: [
      '銷貨截止錯誤 → 損益表收入認列期間不正確',
      '銷貨退回未入帳 → 收入高估',
      '發票開立與實際出貨不一致 → 營業稅申報可能錯誤',
    ],
    relatedLaws: [
      { name: '營業稅法第 32 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340002' },
      { name: '營利事業所得稅查核準則第 15 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004' },
    ],
    relatedReports: ['損益表-營業收入', '資產負債表-應收帳款'],
  },
  {
    id: 'pbc-customer-contracts',
    name: '主要客戶合約 / 訂單 / 出貨單 / 驗收單抽樣',
    category: 'ar-revenue',
    riskLevel: '高',
    erpModule: 'SD-銷售配銷',
    relatedDepartments: ['業務部', '法務部'],
    auditFocus: [
      '合約條款與收入認列方式是否一致',
      '出貨單與驗收單是否經客戶簽署',
      '訂單、出貨單、發票三者是否勾稽一致',
    ],
    commonIssues: [
      '收入認列時點與合約規定不一致 → 收入可能提前或延後認列',
      '驗收單遺失 → 收入存在性無法確認',
      '未依合約條件出貨 → 可能有退貨風險',
    ],
    relatedLaws: [
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['損益表-營業收入'],
  },
  {
    id: 'pbc-bad-debt',
    name: '壞帳準備計算表（預期信用減損模型、歷史呆帳率、前瞻性調整）',
    category: 'ar-revenue',
    riskLevel: '高',
    erpModule: 'SD-銷售配銷',
    relatedDepartments: ['會計部', '財務部'],
    auditFocus: [
      '預期信用損失模型參數（PD/LGD/EAD）是否合理',
      '歷史呆帳率計算期間是否足夠',
      '前瞻性調整是否反映當前經濟狀況',
    ],
    commonIssues: [
      '前瞻性調整過於樂觀 → 備抵損失可能低估',
      '歷史資料期間不足 → 損失率估計不準確',
      '未區分不同客戶群體的信用風險 → 減損模型不夠精確',
    ],
    relatedLaws: [
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
      { name: '營利事業所得稅查核準則第 15 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004' },
    ],
    relatedReports: ['損益表-呆帳費用', '資產負債表-備抵損失'],
  },
  {
    id: 'pbc-revenue-policy',
    name: '收入認列政策說明及長期合約（若適用完工比例法）進度表',
    category: 'ar-revenue',
    riskLevel: '高',
    erpModule: 'SD-銷售配銷',
    relatedDepartments: ['業務部', '會計部'],
    auditFocus: [
      '收入認列政策是否符合 IFRS 15 五步驟模型',
      '完工比例衡量方法是否合理（投入成本法/產出法）',
      '合約總成本估計是否有定期檢討更新',
    ],
    commonIssues: [
      '完工比例估計不準確 → 收入認列金額可能錯誤',
      '合約損失未即時認列 → 損益可能高估',
      '收入認列政策與實際作法不一致 → 財務報表比較性受影響',
    ],
    relatedLaws: [
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['損益表-營業收入', '資產負債表-合約資產/負債'],
  },

  // ============================================================
  // 4. 存貨類
  // ============================================================
  {
    id: 'pbc-inventory-list',
    name: '存貨明細表（按品項 / 倉庫 / 批次）',
    category: 'inventory',
    riskLevel: '高',
    erpModule: 'MM-物料管理',
    relatedDepartments: ['生產部', '會計部'],
    auditFocus: [
      '存貨數量是否與 ERP 系統一致',
      '存貨單價計算方法（加權平均/先進先出）是否一貫',
      '滯銷或過時存貨是否已辨認',
    ],
    commonIssues: [
      '存貨數量與系統不符 → 資產負債表存貨可能不實',
      '存貨計價方法未一貫採用 → 損益表銷貨成本比較性受影響',
    ],
    relatedLaws: [
      { name: '商業會計法第 43 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['資產負債表-存貨', '損益表-銷貨成本'],
  },
  {
    id: 'pbc-inventory-count',
    name: '期末盤點表、盤盈虧調整表、盤點照片 / 紀錄',
    category: 'inventory',
    riskLevel: '高',
    erpModule: 'MM-物料管理',
    relatedDepartments: ['生產部', '會計部', '稽核部'],
    auditFocus: [
      '盤點計畫是否涵蓋所有存貨地點',
      '盤盈虧原因是否已查明並調整',
      '第三方倉庫存貨是否已取得保管證明',
    ],
    commonIssues: [
      '盤點未涵蓋全部倉庫 → 存貨存在性無法確認',
      '盤盈虧原因不明未調整 → 損益表影響未反映',
      '第三方倉庫未函證 → 存貨權利歸屬不明',
    ],
    relatedLaws: [
      { name: '商業會計法第 44 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['資產負債表-存貨', '損益表-存貨盤盈虧'],
  },
  {
    id: 'pbc-purchases',
    name: '進貨明細、進貨發票、進貨退回明細',
    category: 'inventory',
    riskLevel: '中',
    erpModule: 'MM-物料管理',
    relatedDepartments: ['採購部', '會計部'],
    auditFocus: [
      '進貨是否均經驗收程序',
      '進貨退回是否已取得供應商確認',
      '進貨截止是否正確',
    ],
    commonIssues: [
      '進貨未入帳 → 資產負債表存貨低估、應付帳款低估',
      '進貨退回未入帳 → 存貨金額可能高估',
    ],
    relatedLaws: [
      { name: '營利事業所得稅查核準則第 20 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004' },
    ],
    relatedReports: ['資產負債表-存貨', '損益表-進貨'],
  },
  {
    id: 'pbc-cost-calculation',
    name: '成本計算表（BOM、製造費用分攤表）',
    category: 'inventory',
    riskLevel: '高',
    erpModule: 'PP-生產規劃',
    relatedDepartments: ['生產部', '會計部'],
    auditFocus: [
      'BOM 表是否與實際用料一致',
      '製造費用分攤基礎是否合理且一貫',
      '在製品成本計算是否正確',
    ],
    commonIssues: [
      'BOM 表未即時更新 → 產品成本可能不正確',
      '製造費用分攤率不合理 → 存貨成本高估或低估',
      '在製品計算錯誤 → 期末存貨金額不實',
    ],
    relatedLaws: [
      { name: '商業會計法第 43 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['資產負債表-存貨', '損益表-銷貨成本'],
  },
  {
    id: 'pbc-inventory-valuation',
    name: '低價或滯銷存貨評估表、跌價準備計算',
    category: 'inventory',
    riskLevel: '高',
    erpModule: 'MM-物料管理',
    relatedDepartments: ['生產部', '會計部'],
    auditFocus: [
      '存貨淨變現價值評估是否合理',
      '滯銷存貨是否已正確辨認並提列跌價損失',
      '跌價準備計算方法是否一貫',
    ],
    commonIssues: [
      '淨變現價值估計過於樂觀 → 存貨跌價損失可能低估',
      '滯銷存貨未即時辨認 → 存貨金額可能高估',
      '跌價準備迴轉處理不當 → 損益波動異常',
    ],
    relatedLaws: [
      { name: '商業會計法第 43 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['資產負債表-存貨', '損益表-存貨跌價損失'],
  },

  // ============================================================
  // 5. 固定資產 / 使用權資產 / 無形資產
  // ============================================================
  {
    id: 'pbc-fixed-asset-list',
    name: '固定資產明細表（取得日期、成本、耐用年限、累計折舊）',
    category: 'fixed-assets',
    riskLevel: '中',
    erpModule: 'AM-固定資產管理',
    relatedDepartments: ['會計部', '財務部'],
    auditFocus: [
      '資產耐用年限是否與公司政策一致',
      '新增資產是否經適當授權',
      '報廢或處分資產是否已正確除帳',
    ],
    commonIssues: [
      '耐用年限估計不合理 → 折舊費用可能錯誤',
      '資產已報廢未除帳 → 固定資產淨額高估',
      '新增資產資本化 vs 費用化判斷不一致 → 損益可能錯誤',
    ],
    relatedLaws: [
      { name: '所得稅法第 51 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['資產負債表-固定資產', '損益表-折舊費用'],
  },
  {
    id: 'pbc-depreciation',
    name: '折舊計算表、資產增減異動表',
    category: 'fixed-assets',
    riskLevel: '中',
    erpModule: 'AM-固定資產管理',
    relatedDepartments: ['會計部'],
    auditFocus: [
      '折舊方法是否一貫採用',
      '新增資產折舊起始時間是否正確（取得日/使用日）',
      '資產減損跡象是否已評估',
    ],
    commonIssues: [
      '折舊計算錯誤 → 累計折舊及折舊費用不正確',
      '資產減損未評估 → 資產帳面價值可能高估',
    ],
    relatedLaws: [
      { name: '所得稅法第 51 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
      { name: '營利事業所得稅查核準則第 29 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004' },
    ],
    relatedReports: ['資產負債表-固定資產', '損益表-折舊費用'],
  },
  {
    id: 'pbc-lease',
    name: '租賃合約（IFRS 16 使用權資產）、租金攤銷表',
    category: 'fixed-assets',
    riskLevel: '中',
    erpModule: 'AM-固定資產管理',
    relatedDepartments: ['財務部', '法務部'],
    auditFocus: [
      '租賃合約是否正確辨認為使用權資產',
      '租賃隱含利率或增量借款利率是否合理',
      '使用權資產減損跡象是否已評估',
    ],
    commonIssues: [
      '短期租賃或低價值租賃豁免判斷不一致 → 使用權資產可能遺漏',
      '增量借款利率估計不準確 → 租賃負債衡量錯誤',
      '租約修改未重新評估 → 使用權資產及租賃負債可能不正確',
    ],
    relatedLaws: [
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['資產負債表-使用權資產', '損益表-折舊費用/利息費用'],
  },
  {
    id: 'pbc-intangible',
    name: '無形資產明細（軟體、專利、商譽）、減損測試報告 / 假設說明',
    category: 'fixed-assets',
    riskLevel: '高',
    erpModule: 'AM-固定資產管理',
    relatedDepartments: ['會計部', '研發部'],
    auditFocus: [
      '無形資產耐用年限（有限/非確定）分類是否合理',
      '商譽減損測試現金產生單位劃分是否適當',
      '減損測試關鍵假設（成長率、折現率）是否合理',
    ],
    commonIssues: [
      '商譽減損測試假設過於樂觀 → 商譽可能高估',
      '無形資產攤銷年限不合理 → 攤銷費用錯誤',
      '內部產生無形資產研究/發展階段劃分不當 → 費用化/資本化錯誤',
    ],
    relatedLaws: [
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['資產負債表-無形資產', '損益表-攤銷費用/減損損失'],
  },
  {
    id: 'pbc-asset-count',
    name: '資產盤點表、工程中資產明細',
    category: 'fixed-assets',
    riskLevel: '中',
    erpModule: 'AM-固定資產管理',
    relatedDepartments: ['會計部', '生產部'],
    auditFocus: [
      '固定資產盤點結果與帳載是否一致',
      '工程中資產是否確實仍在興建中',
      '已完工資產是否已轉列適當科目並開始提列折舊',
    ],
    commonIssues: [
      '盤點發現資產遺失或閒置未處理 → 資產淨額高估',
      '已完工未轉列 → 折舊費用低估',
      '工程中資本化利息計算是否正確 → 資產成本可能錯誤',
    ],
    relatedLaws: [
      { name: '所得稅法第 51 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['資產負債表-固定資產/工程中資產'],
  },

  // ============================================================
  // 6. 應付帳款 / 採購循環
  // ============================================================
  {
    id: 'pbc-ap-aging',
    name: '應付帳款 / 票據明細表（aging）',
    category: 'ap-procurement',
    riskLevel: '中',
    erpModule: 'MM-物料管理',
    relatedDepartments: ['採購部', '會計部'],
    auditFocus: [
      '應付帳款帳齡是否合理',
      '長期未付帳款是否有合理原因',
      '借方餘額是否已重分類至應收帳款',
    ],
    commonIssues: [
      '長期未付供應商款項 → 可能有爭議或未入帳調整',
      '借方餘額未重分類 → 資產負債表表達錯誤',
    ],
    relatedLaws: [
      { name: '商業會計法第 38 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['資產負債表-應付帳款'],
  },
  {
    id: 'pbc-ap-confirmation',
    name: '供應商對帳單或對帳回函',
    category: 'ap-procurement',
    riskLevel: '中',
    erpModule: 'MM-物料管理',
    relatedDepartments: ['採購部', '會計部'],
    auditFocus: [
      '供應商餘額與帳載是否一致',
      '差異原因是否已查明',
      '未入帳負債是否已辨認',
    ],
    commonIssues: [
      '供應商餘額不一致 → 應付帳款可能低估',
      '已收貨未入帳 → 負債低估、存貨或費用低估',
    ],
    relatedLaws: [
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['資產負債表-應付帳款'],
  },
  {
    id: 'pbc-purchase-contracts',
    name: '進貨合約 / 訂購單 / 驗收單抽樣',
    category: 'ap-procurement',
    riskLevel: '中',
    erpModule: 'MM-物料管理',
    relatedDepartments: ['採購部', '法務部'],
    auditFocus: [
      '採購是否經適當比價及授權',
      '驗收單與訂購單是否一致',
      '關係人採購價格是否合理',
    ],
    commonIssues: [
      '未經比價或授權不足 → 採購成本可能偏高',
      '驗收數量與訂購不一致未處理 → 進貨成本錯誤',
      '關係人採購價格異常 → 可能有利益輸送',
    ],
    relatedLaws: [
      { name: '所得稅法第 43-1 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['損益表-進貨/銷貨成本'],
  },
  {
    id: 'pbc-unrecorded-liabilities',
    name: '未入帳負債搜尋表（期後付款明細）',
    category: 'ap-procurement',
    riskLevel: '高',
    erpModule: 'MM-物料管理',
    relatedDepartments: ['會計部', '採購部'],
    auditFocus: [
      '期後一至三個月內付款是否歸屬前期負債',
      '大額期後付款是否有對應前期交易',
      '已收貨未入帳發票是否已估列',
    ],
    commonIssues: [
      '期後付款對應前期交易未入帳 → 應付帳款低估',
      '未取得發票但已收貨未估列 → 負債低估',
    ],
    relatedLaws: [
      { name: '營利事業所得稅查核準則第 28 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004' },
    ],
    relatedReports: ['資產負債表-應付帳款', '損益表-各項費用'],
  },

  // ============================================================
  // 7. 費用 / 薪資 / 其他費用
  // ============================================================
  {
    id: 'pbc-payroll',
    name: '薪資明細表、扣繳憑單、勞健保繳費單',
    category: 'expense-payroll',
    riskLevel: '中',
    erpModule: 'HR-人力資源',
    relatedDepartments: ['人事部', '會計部'],
    auditFocus: [
      '薪資計算是否與勞健保投保級距一致',
      '扣繳稅額是否正確計算並繳納',
      '年終獎金及績效獎金是否已估列',
    ],
    commonIssues: [
      '勞健保投保金額與薪資不一致 → 可能違反勞基法',
      '扣繳稅額計算錯誤 → 可能遭稅務裁罰',
      '應付薪資未估列 → 負債低估',
    ],
    relatedLaws: [
      { name: '所得稅法第 88 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['損益表-薪資費用', '資產負債表-應付薪資'],
  },
  {
    id: 'pbc-director-remuneration',
    name: '董監酬勞 / 員工酬勞計算表',
    category: 'expense-payroll',
    riskLevel: '中',
    erpModule: 'HR-人力資源',
    relatedDepartments: ['人事部', '財務部'],
    auditFocus: [
      '董監酬勞計算是否符合公司章程規定',
      '員工酬勞分派比例是否經股東會決議',
      '酬勞費用認列期間是否正確',
    ],
    commonIssues: [
      '董監酬勞未依章程計算 → 可能違反公司法',
      '員工酬勞未於年度財報估列 → 費用低估',
    ],
    relatedLaws: [
      { name: '公司法第 235-1 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['損益表-薪資費用', '股東權益變動表'],
  },
  {
    id: 'pbc-expense-detail',
    name: '交際費、廣告費、研發費明細（含憑證影本抽樣）',
    category: 'expense-payroll',
    riskLevel: '高',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['業務部', '會計部', '研發部'],
    auditFocus: [
      '交際費是否超過稅法限額',
      '廣告費支出是否有合理商業目的',
      '研發費是否符合投資抵減條件',
    ],
    commonIssues: [
      '交際費超限未調整 → 可能遭稅務調整補稅',
      '廣告費憑證不足 → 費用認列可能被剔除',
      '研發費歸類不當 → 投資抵減優惠可能無法適用',
    ],
    relatedLaws: [
      { name: '營利事業所得稅查核準則第 25 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004' },
      { name: '所得稅法第 36 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['損益表-營業費用'],
  },
  {
    id: 'pbc-donation',
    name: '捐贈明細及證明',
    category: 'expense-payroll',
    riskLevel: '低',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['財務部', '法務部'],
    auditFocus: [
      '捐贈對象是否符合稅法規定',
      '捐贈金額是否超過限額',
      '捐贈憑證是否完整',
    ],
    commonIssues: [
      '捐贈對象非合法機構 → 費用可能被剔除',
      '捐贈超限未調整 → 稅務申報錯誤',
    ],
    relatedLaws: [
      { name: '所得稅法第 36 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['損益表-捐贈費用'],
  },
  {
    id: 'pbc-prepayments',
    name: '預付費用 / 遞延費用攤銷表',
    category: 'expense-payroll',
    riskLevel: '低',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['會計部'],
    auditFocus: [
      '預付費用攤銷期間是否合理',
      '預付費用是否有實際商品或勞務將收到',
      '長期預付款項是否有減損跡象',
    ],
    commonIssues: [
      '預付費用未按期攤銷 → 資產高估、費用低估',
      '預付款項已無效益未轉列損失 → 資產不實',
    ],
    relatedLaws: [
      { name: '商業會計法第 42 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['資產負債表-預付費用', '損益表-各項費用'],
  },
  {
    id: 'pbc-other-expenses',
    name: '其他大額費用明細（租金、保險、旅費、專業服務費等）',
    category: 'expense-payroll',
    riskLevel: '中',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['會計部', '各部門'],
    auditFocus: [
      '租金費用是否與租約一致',
      '旅費支出是否符合公司差旅政策',
      '專業服務費是否有合約及驗收紀錄',
    ],
    commonIssues: [
      '租金費用認列期間與租約不一致 → 費用歸屬錯誤',
      '旅費憑證不足 → 可能被視為薪資或補貼需扣繳',
      '專業服務費無合約 → 費用合理性無法確認',
    ],
    relatedLaws: [
      { name: '營利事業所得稅查核準則第 25 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004' },
    ],
    relatedReports: ['損益表-營業費用'],
  },
  {
    id: 'pbc-rd-expense',
    name: '研發費用明細及研發投抵證明文件',
    category: 'expense-payroll',
    riskLevel: '中',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['研發部', '會計部'],
    auditFocus: [
      '研發費用是否符合投抵資格（創新性、風險性）',
      '研發人員工時紀錄是否完整',
      '研發設備折舊是否正確歸屬',
    ],
    commonIssues: [
      '研發活動不符合投抵資格 → 稅務優惠可能被追回',
      '研發與一般生產活動成本未明確劃分 → 費用歸屬錯誤',
      '研發投抵證明文件不完整 → 無法申請優惠',
    ],
    relatedLaws: [
      { name: '所得稅法第 34 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['損益表-研發費用'],
  },

  // ============================================================
  // 8. 股權 / 權益 / 關係人交易
  // ============================================================
  {
    id: 'pbc-equity-changes',
    name: '股東權益變動明細、增資 / 減資證明',
    category: 'equity-related-party',
    riskLevel: '高',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['財務部', '法務部'],
    auditFocus: [
      '增資/減資是否經主管機關核准',
      '股款是否確實收足（銀行入帳證明）',
      '股票發行溢價處理是否正確',
    ],
    commonIssues: [
      '增資未經核准或股款未收足 → 股本可能不實',
      '庫藏股交易處理錯誤 → 權益變動表達不正確',
      '資本公積使用是否符合公司法規定',
    ],
    relatedLaws: [
      { name: '公司法第 266 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
      { name: '證券交易法第 22 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340006' },
    ],
    relatedReports: ['股東權益變動表', '資產負債表-權益'],
  },
  {
    id: 'pbc-related-party-transactions',
    name: '關係人交易明細表、價格合理性說明',
    category: 'equity-related-party',
    riskLevel: '高',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['財務部', '法務部'],
    auditFocus: [
      '關係人交易是否已完整揭露',
      '交易價格是否與非關係人相當',
      '關係人應收/應付款項是否有異常',
    ],
    commonIssues: [
      '關係人交易未完整揭露 → 違反證券交易法規定',
      '交易價格明顯偏離市場行情 → 可能有利益輸送',
      '關係人應收款項難以收回未提列損失 → 資產高估',
    ],
    relatedLaws: [
      { name: '所得稅法第 43-1 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
      { name: '證券交易法第 36 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340006' },
    ],
    relatedReports: ['資產負債表-關係人應收/應付', '損益表-關係人交易'],
  },
  {
    id: 'pbc-endorsement-guarantee',
    name: '背書保證 / 資金貸與明細及合約',
    category: 'equity-related-party',
    riskLevel: '高',
    erpModule: 'TR-資金管理',
    relatedDepartments: ['財務部', '法務部'],
    auditFocus: [
      '背書保證是否經董事會決議',
      '資金貸與是否超過限額',
      '背書保證對象是否為關係人',
    ],
    commonIssues: [
      '背書保證未經董事會決議 → 違反證券交易法',
      '資金貸與超限未改善 → 可能遭主管機關裁罰',
      '背書保證對象財務狀況惡化未評估損失 → 或有損失低估',
    ],
    relatedLaws: [
      { name: '證券交易法第 36-1 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340006' },
      { name: '公開發行公司資金貸與及背書保證處理準則', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340003' },
    ],
    relatedReports: ['資產負債表-或有負債揭露'],
  },

  // ============================================================
  // 9. 稅務 / 其他
  // ============================================================
  {
    id: 'pbc-tax-returns',
    name: '營所稅 / 綜所稅申報書影本、稅單',
    category: 'tax-other',
    riskLevel: '高',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['會計部', '財務部'],
    auditFocus: [
      '申報書收入/成本/費用是否與財報一致',
      '投資抵減及稅務優惠是否正確適用',
      '暫繳稅額與結算申報自繳稅額是否銜接',
    ],
    commonIssues: [
      '財稅差異未正確調節 → 所得稅費用計算錯誤',
      '稅務優惠資格不符仍適用 → 可能遭補稅加罰',
      '申報逾期 → 可能遭加徵滯納金',
    ],
    relatedLaws: [
      { name: '所得稅法第 71 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['損益表-所得稅費用'],
  },
  {
    id: 'pbc-tax-calculation',
    name: '所得稅計算表、暫繳稅額證明',
    category: 'tax-other',
    riskLevel: '高',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['會計部'],
    auditFocus: [
      '當期所得稅計算是否正確（稅率 × 課稅所得）',
      '遞延所得稅資產/負債是否已正確認列',
      '未使用課稅損失是否有證據支持未來實現',
    ],
    commonIssues: [
      '遞延所得稅資產認列過於樂觀 → 資產高估',
      '稅率變動未調整遞延所得稅餘額 → 所得稅費用錯誤',
      '課稅損失無未來足夠課稅所得支持 → 不得認列',
    ],
    relatedLaws: [
      { name: '所得稅法第 24 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['損益表-所得稅費用', '資產負債表-遞延所得稅'],
  },
  {
    id: 'pbc-tax-incentives',
    name: '租稅減免證明（如研發加成、5+5 條例等）',
    category: 'tax-other',
    riskLevel: '高',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['研發部', '會計部', '法務部'],
    auditFocus: [
      '租稅減免適用資格是否符合法令規定',
      '減免金額計算是否正確',
      '減免證明文件是否齊全',
    ],
    commonIssues: [
      '減免資格不符仍申報 → 可能遭補稅加罰息',
      '減免金額計算錯誤 → 所得稅費用不正確',
      '證明文件未妥善保存 → 國稅局查核時無法證明',
    ],
    relatedLaws: [
      { name: '產業創新條例第 10 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001' },
    ],
    relatedReports: ['損益表-所得稅費用'],
  },
  {
    id: 'pbc-litigation-contingencies',
    name: '重大合約、訴訟、或有事項說明',
    category: 'tax-other',
    riskLevel: '高',
    erpModule: 'FI-財務會計',
    relatedDepartments: ['法務部', '財務部'],
    auditFocus: [
      '訴訟案件是否已揭露於財務報表附註',
      '或有事項是否已評估入帳或揭露',
      '重大合約是否有不利條款',
    ],
    commonIssues: [
      '訴訟案件未揭露 → 財務報表揭露不完整',
      '或有損失未估列入帳 → 負債可能低估',
      '合約不利條款未評估 → 可能產生重大損失',
    ],
    relatedLaws: [
      { name: '商業會計法第 26 條', url: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080001' },
    ],
    relatedReports: ['財務報表附註-或有事項'],
  },
]
