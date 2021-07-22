---
tags: 網頁切版直播班 - 2021 夏季班
---

# 第二週 - Flexbox 網頁排版術

* 感謝志工上時間軸與大群討論伙伴
* [報到](https://rpg.hexschool.com/training/21/calendar) Code：`QLjOwcxYgdpy`
* [kata Slack 回饋](https://hackmd.io/vJtx4bcDRYiGeZMGUy3qZw)
* Flex 教學 - **重點會放在要在哪裡下對 display: flex**
* 透過 Flex 進行水平與垂直置中
* 常見實務觀念分享、[Flex emmet](https://docs.emmet.io/cheat-sheet/)
* [迷因](https://hackmd.io/EqPXEE71TXO_wvx9ivzKgg)

## 校長語錄
> 不與他人比較，專注跟過去的自己比較


## Flex 教學(上) 
* container 介紹，直接寫個小範例
    * 口訣1：內元件要有效果，就要在外容器加上 display:flex
    * 口訣2：每個 HTML 標籤，能同時擁有內元件跟外容器身份
* Flex 主軸與交錯軸觀念([測試工具](https://codepen.io/peiqun/pen/WYzzYX))
* 容器
    * <span style="color:blue">1.藍(外容器)：container</span> 
    * <span style="color:red">2.紅(內元件)：item</span> 
    * <span style="color:purple">3.粉紅(內元件+外容器特性)</span> 
    * <span style="color:black">4.黑(一般元素)：無 flex 效果</span>


`老師個人註記：#004466 #00ffa2`

## 外容器常用語法
* 決定軸線：flex-direction (互動詢問)
    * 1.**row**
    * 2.row-reverse
    * 3.column
    * 4.column-reverse
* 主軸對齊：justify-content  (開始代入範例)
    * **1.flex-start (預設)**
    * 2.center
    * 3.flex-end
    * 4.space-between
    * 5.space-around
    * 6.space-evenly

* 換行屬性：flex-wrap
    * 1.**nowrap(預設)**
    * 2.wrap


* 交錯軸單行對齊：align-item
    * 1.flex-start
    * 2.center
    * 3.flex-end
    * 4.**stretch(預設)**
    * 5.baseline
* 交錯軸多行對齊屬性：[align-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content)

* 設計一個六角小官網(區塊元素+Flex 練習 Section 練習)

## 網站範例觀看
* [Apple - justify-content](https://www.apple.com/tw/shop/buy-mac/macbook-pro/16-%E5%90%8B)
* [IT 邦幫忙](https://ithelp.ithome.com.tw/)
* [taiwan can help](https://taiwancanhelp.us/)


## Flex 教學(下) - 垂直與水平置中
* 交錯軸對齊：align-items，畫四張圖軸線圖解釋
* Flex 裡還可以包 Flex
    * [時光屋範例 Jason Wang](https://codepen.io/JW750625/pen/oNXQyWK)
    * [hexschool](https://www.hexschool.com/)
> 富不過三代，無法到第三層

## Flex 補充資源
* [圖解：CSS Flex 屬性一點也不難](https://wcc723.github.io/css/2017/07/21/css-flex/)
* [卡斯伯完整 Flex 影音教學(40分鐘)](https://www.youtube.com/watch?v=lmBM7_OTDBQ)





## 常見實務觀念分享
* 不要亂加語法買保險

## 第二週主線任務

* <a href="https://rpg.hexschool.com/training/21/task?type=detail&id=204" target="_top">第二週 - 個人網頁</a>


備註一：可觀看 [作業設計稿 -  線上預覽操作教學](https://hackmd.io/J7ajdobzTlyideAARTLz5Q?view)

備註二：線上網址圖片，這裡六角已經上傳到[圖片空間](https://github.com/hexschool/webLayoutTraining1st)，本次作業圖片都放在 **week2 資料夾**，網址如下，其他以此類推：
* https://hexschool.github.io/webLayoutTraining1st/week1/photo.png 
* https://hexschool.github.io/webLayoutTraining1st/week1/line.svg

>補充：[如果不知道怎麼找到圖片路徑請點我](https://i.imgur.com/O7nQcFm.gif)


> 此主線任務在一天內完成算合格
> 一小時內完成算超乎水準，熟練度很高