# [gulp 環境安裝流程](https://hackmd.io/@YmcMgo-NSKOqgTGAjl_5tg/H1-Sz3LYU)

# gulp 環境安裝流程

## 影片教學(請不會使用 gulp 的新手，直接看這部)

{%youtube mZnMsYVHUkA %}

### 步驟一：安裝 [Node.js](https://nodejs.org/en/)（node 版本請安裝 v14 版本），請打開終端機或命令提示字元，輸入 `node -v` 後按 Enter，看是否有顯示版本號

![](https://i.imgur.com/tMn6b6n.gif)
> （node 版本請安裝 [v14](https://nodejs.org/en/blog/release/v14.19.3/) 版本）
> - Windows 64-bit Binary: https://nodejs.org/dist/v14.19.3/node-v14.19.3-x64.msi
> - macOS 64-bit Installer: https://nodejs.org/dist/v14.19.3/node-v14.19.3.pkg
>
> 可以觀看[此文章](https://support.apple.com/zh-tw/HT211814)了解自己是 intel 還是 M1 晶片

PS1：Mac 請按 command+空白鍵，輸入「terminal」打開終端機
PS2：Win 請按 開始 > 執行 > 輸入「cmd」打開命令提示字元
Win10 執行視窗快速鍵為 win + R:
![](https://i.imgur.com/xM3UOZG.jpg)

![](https://i.imgur.com/fEKbeaR.png)


在版本號較新的 Win10 也可在左下搜尋欄輸入 cmd 打開命令提示字元:
![](https://i.imgur.com/UsXljox.jpg)


### 步驟二：在終端機安裝 gulp，繼續輸入指令 `npm i gulp@4 -g` 按 Enter 安裝，輸入 `gulp -v` 查詢是否有回報版本號。

> 如果您是 MAC 請用 `sudo npm i gulp@4 -g`

### 步驟三：下載此[資料夾](https://github.com/hexschool/web-layout-training-gulp)，並解壓縮檔案
![](https://i.imgur.com/OYjJLXH.jpg)

> 如果您是 MAC 請用 `sudo npm i gulp@4 -g`


### 步驟四：移動到該資料夾，cd 移動到該資料夾，如果移動成功，win 輸入指令`dir`、Mac 輸入指令 `ls`，可以觀看該資料裡的檔案列表，如下 Win 截圖。
![](https://i.imgur.com/Xl4ShdL.png)

### 步驟五：輸入指令 `npm install` 安裝插件

### 步驟六：輸入指令 `gulp `執行

### 步驟七：若步驟六執行成功，會打開瀏覽器，看到下方畫面，就代表你全部都成功了！


![](https://i.imgur.com/QvvDPZS.png)



## 部署網頁到 GitHub Pages 上
```
git init 
git add .
git commit -m "first commit"
git remote add origin [GitHub Repositories Url]
git push -u origin master 
```
當將 Gulp 原始碼初次部署到 GitHub 之後，可以依照以下兩步驟來更新網站

1. 步驟一：`gulp build` 進入生產模式
2. 步驟二：當生產完畢之後接下來只需要輸入 `gulp deploy` 即可完成 GitHub Pages 部署。


> 若您是使用 Windows 電腦，以下細節還請留意：
> 1. git commit -m "first commit"，請打成雙引號，而非單引號
> 2. 執行完 git push -u origin master 時，系統可能會問你要選擇 1. Web Browser 2. Personal access token 供使用者選擇，還請選擇 1。


## QA

### 步驟一 常見問答
Q：windows 安裝 node.js 以後，輸入 node -v 沒顯示版本號怎麼辦？？
A：請重新開機再嘗試

Q：Windows 的命令提示字元怎麼快速開啟？
A：請到 開始 > 執行 > 輸入 `cmd` 就可直接開啟


### 步驟二 常見問答
Q：我是 Mac，安裝沒有成功怎麼辦？
A：指令請換成 `sudo npm i gulp@4 -g`


![](https://i.imgur.com/GJOw1fE.png)


## 常見問題

Gulp 問題 Ray 助教提供的 Gulp 資料夾，裡面的 [Readme](https://github.com/hexschool/web-layout-training-gulp/blob/master/README.md) 提到很多注意事項，建議先閱讀

### Q1：關機後，如何再開啟 Gulp 繼續開發？他會自動監測嗎？

A1: 需重新打開終端機，移動資料夾路徑後，再執行 `gulp` 指令開啟

### Q2：所謂的製作過程中，終端機要持續打開才會持續編譯，是怎麼個打開法勒？放在旁邊擺著嗎？我在開發的時候，終端機是否要一直開著？

A2：當輸入 `gulp` 指令時，就是編譯狀態，開發時就得一直開著

### Q3：在 Gulp 編譯運行時，要怎麼打字？
A3：輸入熱鍵 `ctrl+c`，就可以關閉 gulp 編譯模式

### Q4：我可以改 html、CSS、image 路徑嗎？
A4：不行，因為路徑我們已經寫死

### Q5：這專案只能用 SCSS 寫 CSS 嗎？能純寫 CSS 嗎？

A5：不行，因我們建立的環境是 SCSS 環境

### Q6：當我在使用gulp開發、並以 VScode 編譯程式碼時，必須停用 **Live Sass Compiler** 這個套件嗎？

A6：兩者請不要混用，若您用 Gulp，請用 Gulp 來編譯 SCSS 即可

### Q7：GitHub Desktop 和 終端機 如何選擇部署上傳？
A7：如果您是用 Gulp，建議就用影片教的方式部署更方便

## 本 [Gulp 範例](https://github.com/hexschool/web-layout-training-gulp)所提供的功能


1. 使用 EJS 做版型管理
2. 支援 SCSS 編譯功能
3. 儲存檔案時，瀏覽器會自動更新，不需持續按 F5
4. 整合 GitHub 服務，能做到一鍵上傳網站空間
