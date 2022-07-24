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
