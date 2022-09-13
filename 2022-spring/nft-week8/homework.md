---
tags: 網頁切版直播班 - 2022 夏季班
---

# 第八週 - CSS 模組化管理

- 記得錄影
- 獎品截止日說明

## 截止繳交作業時間點

- 8/31(三) 第八週上課結束
- 9/14(三) 23:59:59 作業繳交截止日、<a href="https://rpg.hexschool.com/training/30/task?type=detail&id=307" target="_top">
  心得牆任務截止日</a>
- 9/16(三) 申請獎勵截止 <a href="https://rpg.hexschool.com/training/30/show?embedhm=JBFQTPNlQ9eG5U-llr621g" target="_top">
  獎品登記填表</a>
- **9/18(日) 作品專題成果發表會**

## 本堂課重點

1. SCSS 結構再進化
2. 知道容器與模組的分離
3. 網頁架構的演進

## [網頁建置流程](https://cacoo.com/diagrams/VbC7q11GWcnik5BV/16E53)

- CSS Reset
  - [myerweb](https://meyerweb.com/eric/tools/css/reset/)
  - [normalize](https://necolas.github.io/normalize.css/)
- Base
  - 連結顏色
  - 標題設計

## 設計模式講解

- [SMACSS](https://docs.google.com/presentation/d/1BM12w_u-Y-oTqYAIBhq7CtUhcQ5IE-ZIg2PO205iVVs/edit?usp=sharing)
  - 擴增子模組
  - SCSS 結構
- [OOCSS](https://ithelp.ithome.com.tw/articles/10184862)
  - 結構與樣式分離
  - 容器與內容分離
- [BEM](https://ithelp.ithome.com.tw/articles/10160545)
  - \_\_ 區塊
  - -- 修飾符號

## 結構設計討論，你是哪個等級？(v

- Level 1：頁面(page)， 有一頁就新增一頁
- Level 2：佈局([Layout](https://cacoo.com/diagrams/G4ML24CopC3t8VZX/CD531))， 會額外拉出來處理
- Level 3：工具(helper、util)，會將常用的 class 拉出來獨立使用
- Level 4：格線(grid) 會有自己的格線系統
- Level 5：模組(component) 會將常用的內容拉出來模組化
- Level 6：會用 Tailwind 來組合 component
  - [React Tailwind Component](https://github.com/Webabil/modal-react-tailwind/blob/master/src/component/Modal.jsx)
  - [Vue Tailwind Component](https://github.com/OCRVblockchain/vue-tailwind-pagination/blob/main/src/components/VueTailwindPagination/index.vue)

## 結論：何時用 BS5 何時用 Tailwind

1. 都用，看哪個順手
2. 小網站用 BS5 建立好的元件比較快
3. 大型網站，尤其是 2B 營運系統、人資系統，tailwind 來建立各種 JS 元件會比較適合

## 範例網站

1. [Netflix](https://www.netflix.com/tw/)
2. [館長電商](https://notorious-2019.com/Default.aspx)
3. [APPLE Mac](https://www.apple.com/tw/imac-24/why-mac/)

## 模組化概念 (v

- 內容會重複出現在其他區域兩個地方以上就需要，[範例連結](https://cacoo.com/diagrams/G4ML24CopC3t8VZX/E5EDC)。

## 結構編號([學員作業](https://hackmd.io/48BTVPQVR_y4jq2E0PFHXQ?view))

1. 佈局 layout、頁面 page (只出現一處)
2. 工具 utilities
3. 元件 component (出現兩處以上)
4. 容器 container、grid

## 新手到進階的投入過程 v

1. 沒有模組化概念(兩個 list 一樣、class 繼承無法拆離)
2. 會開始試著拆出來
3. 會開始建立 component

## 看別人網頁結構或學 CSS4 新技巧時，請看對方的 HTML CSS 組合，或判斷你在學什麼，例如說

`class="site-logo order-md-1 order-2 mr-auto d-none d-md-block"`

## 最終重點

- 需要練功的細節，如何將 Page 與 Layout 的內容都變成 component 與容器，[範例](https://github.com/Wcc723/F2E-PK/tree/master/source/stylesheets)
- 避免過度設計化
- 在觀看別人的框架時，觀看他的設計思維與切入重點
- OOCSS
  - 結構與樣式分離 ( .btn .btn-lg)
  - 容器與內容分離 (格線系統)
- [7+1 SCSS](https://gist.github.com/rveitch/84cea9650092119527bc)
- [MOPCON CSS 架構演化史影片](https://www.youtube.com/watch?v=YF2yKIT5QS4)

## 第八週主線任務

- <a href="https://rpg.hexschool.com/training/30/task?type=detail&id=306" target="_top">第八週 - 大型線上服務</a>
  、<a href="https://xd.adobe.com/view/bcf8f7eb-689c-4850-b531-a78259c0cdd8-e9ab/screen/7a56bb8c-4170-43d3-a265-d00701d1674b/" target="_top">
  設計稿</a>、[圖片下載](https://github.com/hexschool/2022-web-layout-training)

### 提交等級 (提交任務作業時，請告知您是做哪個等級的作業)

- LV1：任選兩頁含 RWD
- **LV2(80、100%獎品門檻)**：至少做兩頁含 RWD，其中一頁必須為首頁
- LV3：做三頁 RWD 頁面（其中一個頁面要做首頁，且三個頁面都需要包含效果）
- LV4：全部頁面與效果都做

## 大型寵物訂房網站 icon

```
首頁
 - arrow_drop_down
 - arrow_right
 - local_phone
預約項目 Modal
 - house
 - wash
 - roofing
 - directions_walk
 - place
 - star
預約成功 Modal
 - pets
會員資料
 - arrow_drop_up
 - create
手機尺寸頁面
 - dehaze （漢堡選單）
```

## 大型旅館訂房網站 icon

```
首頁
 - language
 - location_on
 - date_range
 - person
 - keyboard_arrow_left
 - keyboard_arrow_right
 - star
 - keyboard_arrow_down
 - attach_money
Detail 頁面：
 - wifi
 - restaurant
 - personal_video
 - ac_unit
 - room_service
 - smoke_free
 - local_bar
 - kitchen
 - add
 - remove
Member 頁面：
 - hotel
 - check
 - add_circle
手機尺寸頁面：
 - dehaze
 - filter_list
 - sort
 - arrow_back
 - keyboard_arrow_down
 - close
```
