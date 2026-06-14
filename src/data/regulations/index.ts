import type { Regulation } from '../../types'

export const regulations: Regulation[] = [
  {
    id: 'income-tax-law',
    title: '所得稅法',
    categoryId: 'tax',
    subcategoryId: 'income-tax',
    summary: '所得稅法為規範中華民國境內所得稅之基本法規，定義課稅主體、課稅範圍、稅率結構及各類所得之計算方式。',
    content: `# 所得稅法

## 第一章 總則

### 第 1 條
所得稅分為綜合所得稅及營利事業所得稅。

### 第 2 條
凡有中華民國來源所得之個人，應就其中華民國來源之所得，依本法規定，課徵綜合所得稅。

## 第二章 綜合所得稅

### 第 14 條
個人之綜合所得總額，以其全年下列各類所得合併計算之：

一、營利所得
二、執行業務所得
三、薪資所得
四、利息所得
五、租賃所得及權利金所得
六、自力耕作、漁、牧、林、礦之所得
七、財產交易所得
八、競技、競賽及機會中獎之獎金或給與
九、退職所得
十、其他所得`,
    source: '全國法規資料庫',
    sourceUrl: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340001',
    publishDate: '2024-01-01',
    effectiveDate: '2024-01-01',
    tags: ['所得稅法', '綜合所得稅', '營利事業所得稅', '扣繳'],
    version: 1,
  },
  {
    id: 'business-tax-law',
    title: '加值型及非加值型營業稅法',
    categoryId: 'tax',
    subcategoryId: 'business-tax',
    summary: '規範我國營業稅之課徵範圍、稅率、申報方式及相關稽徵程序。',
    content: `# 加值型及非加值型營業稅法

## 第一章 總則

### 第 1 條
在中華民國境內銷售貨物或勞務及進口貨物，均應依本法規定課徵加值型或非加值型之營業稅。

### 第 2 條
營業稅稅率，除本法另有規定外，最低不得少於百分之五，最高不得超過百分之十。`,
    source: '全國法規資料庫',
    sourceUrl: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340002',
    publishDate: '2024-01-01',
    effectiveDate: '2024-01-01',
    tags: ['營業稅', '加值型', '申報', '稅率'],
    version: 1,
  },
  {
    id: 'tax-collection-law',
    title: '稅捐稽徵法',
    categoryId: 'tax',
    subcategoryId: 'tax-collection',
    summary: '規範稅捐稽徵之基本程序，包括稅捐之徵收、保全、核課期間、行政救濟及罰則等規定。',
    content: `# 稅捐稽徵法

## 第一章 總則

### 第 1 條
稅捐之稽徵，依本法之規定；本法未規定者，依其他有關法律之規定。

### 第 2 條
本法所稱稅捐，指一切法定之國稅、地方稅及關稅。

## 第二章 稅捐之徵收

### 第 6 條
稅捐之徵收，優先於普通債權。`,
    source: '全國法規資料庫',
    sourceUrl: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340005',
    publishDate: '2024-01-01',
    effectiveDate: '2024-01-01',
    tags: ['稅捐稽徵', '核課期間', '徵收程序', '行政救濟'],
    version: 1,
  },
  {
    id: 'ic-standards',
    title: '公開發行公司內部控制處理準則',
    categoryId: 'internal-control',
    subcategoryId: 'ic-standards',
    summary: '訂定公開發行公司建立內部控制制度之基本規範，包括控制環境、風險評估、控制作業、資訊與溝通及監督作業五大要素。',
    content: `# 公開發行公司內部控制處理準則

## 第一章 總則

### 第 1 條
本準則依證券交易法第十四條之一第二項規定訂定之。

### 第 2 條
公開發行公司之內部控制制度，應就下列組成要素訂定之：
一、控制環境
二、風險評估
三、控制作業
四、資訊與溝通
五、監督作業

## 第二章 內部控制制度之設計

### 第 5 條
內部控制制度應涵蓋所有營運活動，並以書面方式訂定之。`,
    source: '金管會證期局',
    sourceUrl: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340003',
    publishDate: '2024-01-01',
    effectiveDate: '2024-01-01',
    tags: ['內部控制', '公開發行', 'COSO', '內控五要素'],
    version: 1,
  },
  {
    id: 'ic-validation',
    title: '內部控制制度有效性判斷項目',
    categoryId: 'internal-control',
    subcategoryId: 'ic-validation',
    summary: '提供評估內部控制制度有效性之具體判斷項目，涵蓋控制環境、風險評估、控制作業、資訊與溝通及監督作業。',
    content: `# 內部控制制度有效性判斷項目

## 一、控制環境

1. 企業是否建立誠信與道德價值觀
2. 董事會是否展現獨立性及監督責任
3. 組織結構是否明確劃分權責

## 二、風險評估

1. 是否建立辨識與分析風險之機制
2. 是否評估舞弊風險
3. 是否辨識及評估重大變動

## 三、控制作業

1. 是否建立核准、授權、驗證、調節及績效檢討等政策
2. 是否建立資產保全及職能分工制度`,
    source: '金管會證期局',
    sourceUrl: 'https://www.sfb.gov.tw/',
    publishDate: '2024-06-15',
    effectiveDate: '2024-07-01',
    tags: ['內部控制', '有效性評估', '內控查核', 'COSO'],
    version: 1,
  },
  {
    id: 'ifrs-16',
    title: 'IFRS 16 租賃',
    categoryId: 'ifrs',
    subcategoryId: 'ifrs-standards',
    summary: 'IFRS 16 規定承租人應將租賃認列為使用權資產及租賃負債，出租人則維持融資租賃與營業租賃之分類。',
    content: `# IFRS 16 租賃

## 核心原則

承租人應就所有租賃認列使用權資產及租賃負債。

## 租賃之辨認

### 第 9 條
企業於合約開始日，應評估合約是否為（或包含）租賃。合約若移轉對已辨認資產之使用之控制權一段時間以換取對價，則該合約為（或包含）租賃。`,
    source: '金管會證期局',
    sourceUrl: 'https://www.twse.com.tw/IFRS/',
    publishDate: '2024-01-01',
    effectiveDate: '2024-01-01',
    tags: ['IFRS', '租賃', '使用權資產', '租賃負債'],
    version: 1,
  },
  {
    id: 'ifrs-9',
    title: 'IFRS 9 金融工具',
    categoryId: 'ifrs',
    subcategoryId: 'ifrs-standards',
    summary: 'IFRS 9 取代 IAS 39，規範金融資產之分類與衡量、減損及避險會計，引入預期信用損失模式。',
    content: `# IFRS 9 金融工具

## 金融資產之分類

### 第 4.1.1 條
企業應依下列方式分類金融資產：
一、按攤銷後成本衡量
二、透過其他綜合損益按公允價值衡量
三、透過損益按公允價值衡量

## 減損

### 第 5.5.1 條
企業應認列預期信用損失之備抵損失。`,
    source: '金管會證期局',
    sourceUrl: 'https://www.twse.com.tw/IFRS/',
    publishDate: '2024-01-01',
    effectiveDate: '2024-01-01',
    tags: ['IFRS', '金融工具', '預期信用損失', '減損'],
    version: 1,
  },
  {
    id: 'ifrs-15',
    title: 'IFRS 15 客戶合約之收入',
    categoryId: 'ifrs',
    subcategoryId: 'ifrs-standards',
    summary: 'IFRS 15 建立單一收入認列模式，以五步驟模型決定收入認列之金額及時間。',
    content: `# IFRS 15 客戶合約之收入

## 五步驟收入認列模型

### 步驟一
辨認客戶合約

### 步驟二
辨認合約中之履約義務

### 步驟三
決定交易價格

### 步驟四
將交易價格分攤至合約中之履約義務

### 步驟五
於企業滿足履約義務時認列收入`,
    source: '金管會證期局',
    sourceUrl: 'https://www.twse.com.tw/IFRS/',
    publishDate: '2024-01-01',
    effectiveDate: '2024-01-01',
    tags: ['IFRS', '收入認列', '履約義務', '交易價格'],
    version: 1,
  },
  {
    id: 'ifrs-tifrs-diff',
    title: 'TIFRS 與 IFRS 差異比較',
    categoryId: 'ifrs',
    subcategoryId: 'tifrs-diff',
    summary: '台灣企業採用之 TIFRS 與國際 IFRS 間之主要差異，包括首次適用、特定行業及稅務影響等。',
    content: `# TIFRS 與 IFRS 差異比較

## 主要差異項目

1. 首次適用：TIFRS 1 之豁免選擇與 IFRS 1 差異
2. 不動產、廠房及設備：重估價模式之適用範圍
3. 租賃：TIFRS 16 對承租人增量借款利率之實務指引
4. 收入：TIFRS 15 對特定行業（如營建業）之額外指引`,
    source: '會計研究發展基金會',
    sourceUrl: 'https://www.ardf.org.tw/',
    publishDate: '2024-03-01',
    effectiveDate: '2024-01-01',
    tags: ['TIFRS', 'IFRS', '差異分析', '台灣'],
    version: 1,
  },
  {
    id: 'profit-seeking-audit',
    title: '營利事業所得稅查核準則',
    categoryId: 'audit',
    subcategoryId: 'profit-seeking',
    summary: '規範營利事業所得稅申報之查核程序、認定標準及相關規定，為稅務稽徵機關查核營所稅申報案件之主要依據。',
    content: `# 營利事業所得稅查核準則

## 第一章 總則

### 第 1 條
本準則依所得稅法第八十條第五項規定訂定之。

## 第二章 收入

### 第 15 條
營利事業之銷貨收入，應以權責發生制為基礎認列。`,
    source: '全國法規資料庫',
    sourceUrl: 'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0340004',
    publishDate: '2024-01-01',
    effectiveDate: '2024-01-01',
    tags: ['查核準則', '營利事業所得稅', '查核程序', '收入認列'],
    version: 1,
  },
  {
    id: 'industry-audit-notes',
    title: '各行業查核注意事項',
    categoryId: 'audit',
    subcategoryId: 'industry-notes',
    summary: '針對不同行業特性，彙整營利事業所得稅查核時應特別注意之事項與常見違規態樣。',
    content: `# 各行業查核注意事項

## 製造業
- 存貨計價方法是否一貫
- 製造成本分攤是否合理
- 報廢損失是否有證明文件

## 營建業
- 工程進度認列是否符合完工比例法
- 土地成本與建築成本是否正確歸屬

## 買賣業
- 進銷存帳務是否吻合
- 進貨退出及折讓是否及時入帳`,
    source: '財政部賦稅署',
    sourceUrl: 'https://www.dot.gov.tw/',
    publishDate: '2024-06-30',
    effectiveDate: '2024-07-01',
    tags: ['查核注意事項', '行業別', '製造業', '營建業', '買賣業'],
    version: 1,
  },
  {
    id: 'pbc-checklist',
    title: 'PBC 清單範本 — 審計委任前',
    categoryId: 'pbc',
    subcategoryId: 'pbc-templates',
    summary: '審計委任前應取得之客戶提供資料清單，包括公司基本資料、財務報表、內部控制制度及相關合約等。',
    content: `# PBC 清單範本 — 審計委任前

## 一、公司基本資料
- 公司設立登記表及變更登記表
- 公司章程及組織圖
- 股東名冊及董事監察人名單

## 二、財務資料
- 最近三年財務報表及會計師查核報告
- 最近期試算表及總分類帳
- 銀行存款調節表

## 三、內部控制
- 內部控制制度聲明書
- 內部稽核報告`,
    source: '會計研究發展基金會',
    sourceUrl: 'https://www.ardf.org.tw/',
    publishDate: '2024-01-15',
    effectiveDate: '2024-01-15',
    tags: ['PBC', '審計', '委任', '清單範本'],
    version: 1,
  },
  {
    id: 'pbc-full-checklist',
    title: 'PBC 完整清單範本 — 各科目彙總',
    categoryId: 'pbc',
    subcategoryId: 'pbc-templates',
    summary: '涵蓋各主要審計科目之完整 PBC（Prepared by Client）清單，共九大類，適用於年度查核及期中審計。',
    content: `# PBC 完整清單範本 — 各科目彙總

## 1. 基本資料與整體勾稽類（幾乎 100% 必備）

- 試算表（Trial Balance）——期初、期末、調整後
- 總分類帳（General Ledger）完整檔（Excel 或系統匯出）
- 科目餘額表（Account Balance Listing）
- 自編資產負債表、綜合損益表、現金流量表、權益變動表（含附註草稿）
- 組織架構圖、股權結構圖、關係人清冊
- 公司章程、董監事名冊、股東名冊（最新版）
- 內部控制制度文件（流程圖、風險控制矩陣 RCM，若適用 SOX 或金管會內控規範）

## 2. 貨幣資金 / 銀行類（高風險、高頻抽查）

- 所有銀行帳戶對帳單（全年度 + 期後）
- 銀行存款餘額證明函（Bank Confirmation）草稿或已寄出副本
- 銀行往來明細、利息計算表
- 定期存款 / 外幣存款明細、到期日、利率
- 零用金 / 備用金明細及盤點表

## 3. 應收帳款 / 收入循環（最常補件項目）

- 應收帳款 / 票據明細表（aging analysis，按客戶分）
- 客戶對帳單或對帳回函（Confirmation）樣本
- 銷貨明細表、統一發票明細、銷貨日報表
- 主要客戶合約 / 訂單 / 出貨單 / 驗收單抽樣
- 壞帳準備計算表（預期信用減損模型、歷史呆帳率、前瞻性調整）
- 收入認列政策說明及長期合約（若適用完工比例法）進度表

## 4. 存貨類（製造 / 貿易業重點）

- 存貨明細表（按品項 / 倉庫 / 批次）
- 期末盤點表、盤盈虧調整表、盤點照片 / 紀錄
- 進貨明細、進貨發票、進貨退回明細
- 成本計算表（BOM、製造費用分攤表）
- 低價或滯銷存貨評估表、跌價準備計算

## 5. 固定資產 / 使用權資產 / 無形資產

- 固定資產明細表（取得日期、成本、耐用年限、累計折舊）
- 折舊計算表、資產增減異動表
- 租賃合約（IFRS 16 使用權資產）、租金攤銷表
- 無形資產明細（軟體、專利、商譽）、減損測試報告 / 假設說明
- 資產盤點表、工程中資產明細

## 6. 應付帳款 / 採購循環

- 應付帳款 / 票據明細表（aging）
- 供應商對帳單或對帳回函
- 進貨合約 / 訂購單 / 驗收單抽樣
- 未入帳負債搜尋表（期後付款明細）

## 7. 費用 / 薪資 / 其他費用

- 薪資明細表、扣繳憑單、勞健保繳費單
- 董監酬勞 / 員工酬勞計算表
- 交際費、廣告費、研發費明細（含憑證影本抽樣）
- 捐贈明細及證明
- 預付費用 / 遞延費用攤銷表
- 其他大額費用明細（租金、保險、旅費、專業服務費等）

## 8. 股權 / 權益 / 關係人交易

- 股東權益變動明細、增資 / 減資證明
- 關係人交易明細表、價格合理性說明
- 背書保證 / 資金貸與明細及合約

## 9. 稅務 / 其他

- 營所稅 / 綜所稅申報書影本、稅單
- 所得稅計算表、暫繳稅額證明
- 租稅減免證明（如研發加成、5+5 條例等）
- 重大合約、訴訟、或有事項說明`,
    source: '會計研究發展基金會',
    sourceUrl: 'https://www.ardf.org.tw/',
    publishDate: '2025-06-01',
    effectiveDate: '2025-06-01',
    tags: ['PBC', '完整清單', '審計', '查核準備', '工作底稿'],
    version: 1,
  },
  {
    id: 'pbc-audit-program',
    title: '審計程序對照表 — 應收帳款',
    categoryId: 'pbc',
    subcategoryId: 'audit-procedures',
    summary: '應收帳款科目之審計程序對照表，列示各項審計程序對應之查核目的、適用ISA公報及工作底稿索引。',
    content: `# 審計程序對照表 — 應收帳款

| 審計程序 | 查核目的 | ISA | 底稿索引 |
|----------|----------|-----|----------|
| 函證應收帳款 | 存在、權利義務 | ISA 505 | A-1 |
| 分析帳齡 | 評價 | ISA 520 | A-2 |
| 核對銷貨單與出貨單 | 完整性 | ISA 500 | A-3 |
| 測試備抵損失 | 評價 | ISA 540 | A-4 |`,
    source: '會計研究發展基金會',
    sourceUrl: 'https://www.ardf.org.tw/',
    publishDate: '2024-02-01',
    effectiveDate: '2024-02-01',
    tags: ['PBC', '審計程序', '應收帳款', 'ISA', '工作底稿'],
    version: 1,
  },
  {
    id: 'profit-tax-filing',
    title: '營利事業所得稅結算申報應注意事項',
    categoryId: 'tax-filing',
    subcategoryId: 'profit-tax',
    summary: '彙整營利事業所得稅結算申報時之常見錯誤、申報書填寫要點及相關法令更新。',
    content: `# 營利事業所得稅結算申報應注意事項

## 一、申報期限
每年 5 月 1 日至 5 月 31 日

## 二、申報方式
1. 網路申報（含電子簽章）
2. 媒體申報
3. 人工申報

## 三、常見錯誤
- 收入認列基礎不一致
- 成本分攤不合理
- 投資收益未依規定申報
- 關係人交易未揭露

## 四、應檢附文件
- 資產負債表及損益表
- 股東可扣抵稅額帳戶變動明細表
- 各類所得扣繳憑單`,
    source: '財政部賦稅署',
    sourceUrl: 'https://www.dot.gov.tw/',
    publishDate: '2024-04-01',
    effectiveDate: '2024-05-01',
    tags: ['營所稅', '結算申報', '網路申報', '申報錯誤'],
    version: 1,
  },
  {
    id: 'individual-tax-filing',
    title: '綜合所得稅申報實務',
    categoryId: 'tax-filing',
    subcategoryId: 'individual-tax',
    summary: '綜合所得稅申報之實務操作指引，包括申報方式、列舉扣除額項目、特別扣除額及稅額計算。',
    content: `# 綜合所得稅申報實務

## 一、申報方式
1. 稅額試算
2. 網路申報（手機/電腦）
3. 二維條碼
4. 人工申報

## 二、扣除額項目

### 標準扣除額
- 單身：124,000 元
- 有配偶：248,000 元

### 列舉扣除額
- 捐贈：綜合所得總額 20%
- 保險費：每人 24,000 元
- 醫藥及生育費：核實認列
- 購屋借款利息：300,000 元

## 三、特別扣除額
- 薪資所得特別扣除額：207,000 元
- 身心障礙特別扣除額：207,000 元
- 幼兒學前特別扣除額`,
    source: '財政部賦稅署',
    sourceUrl: 'https://www.dot.gov.tw/',
    publishDate: '2024-04-15',
    effectiveDate: '2025-01-01',
    tags: ['綜所稅', '申報', '扣除額', '稅額試算'],
    version: 1,
  },
]
