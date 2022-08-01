# 安裝 Tailwind 筆記

- 官方安裝 [Tailwind CSS docs](https://tailwindcss.com/docs/installation)
- [客製化 Tailwind CSS，擁有專屬主題樣式](https://rpg.hexschool.com/training/30/show?embedhm=xWVKIW3dTmqv6_OdtHwBXg)

```shell
~$ npm install -D tailwindcss
~$ npx tailwindcss init
```

- Start the Tailwind CLI build process

Run the CLI tool to scan your template files for classes and build your CSS.

```shell
~$ npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

#### 作業地雷
- 正確設定 container，左右需留 12px 的 padding
- 內層容器需以 % 為單位設計，不可以寫死寬度！！！
- 伸縮時不可以出現 x 軸與跑版的狀況
- Tailwind 作業：@apply 僅適用於製作表單元素和按鈕
- SCSS 階層請維持在四層以內
- 頁數需以實際網站頁數計算
- 需至少完成 Lv1 作業需求
- 需使用線上圖示 Material Design Icons
- 作業須符合此作業規範



#### 參考資料

- [material_icons docs](https://developers.google.com/fonts/docs/material_icons#icon_font_for_the_web)
