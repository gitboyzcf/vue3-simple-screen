# Vue3、Vite5、Oxlint 最新的Web项目大屏模板

## 🍭 安装使用

### 获取项目代码

```bash
git clone https://github.com/gitboyzcf/vue3-simple-screen.git
```

### 安装依赖

```sh
pnpm install
```

### 运行

```sh
pnpm dev
```

### 打包

```sh
pnpm build
```

## 🍩 浏览器支持

本地开发推荐使用`Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 🍻特性

- ⚡️ [Vue 3](https://github.com/vuejs/core)、 [Vite 5](https://vite.dev/)、[pnpm](https://pnpm.io/)

- 📦 [组件自动化引入](https://github.com/unplugin/unplugin-vue-components)

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)

- 🌈 [Primevue](https://primevue.org/) - Vue.js UI 套件，提高开发效率

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://icon-sets.iconify.design/)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 📥 [API 自动加载](https://github.com/unplugin/unplugin-auto-import) - 直接使用 Composition API 无需引入

- 🌍 [API 采用模块化自动导入方式](https://blog.csdn.net/qq_43775179/article/details/134811292) 根据demo.js文件设置接口，以API_xxx_method的方式命名，在请求时无需导入 直接使用useRequest()函数返回参数以解构的方式获取，拿到即为写入的接口

- 💥 [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)（英）+ [ESLint](https://eslint.org/)（英） - 双管齐下，享受高速度、强检查的代码格式化效果
- 🐶 [husky](https://typicode.github.io/husky/zh/) + [lint-staged](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#-lint-staged) - Git提交自动检测格式化代码，解放双手

## 🍺 vscode 插件

- 🍭 editorconfig
- 🍬 dotenv
- 🍿 prettier-vscode
- 🍪 vscode-eslint
- 🍺 unocss
- 🍦 iconify
- 🍰 volar
- 🎂 errorlens
- 🍧 error-gutters
- 🍼 gitlens

## 🍣 Git 规范

参考 [Vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范

- `✨ feat` 增加新功能
- `🐛 fix` 修复问题/BUG
- `🎉 init` 初始化
- `📝 docs` 文档变更
- `💄 style` 代码格式(不影响代码运行的变动)
- `♻️ refactor` 重构(既不是增加feature，也不是修复bug)
- `⚡️ perf` 性能优化
- `✅ test` 增加测试
- `⏪️ revert` 回退
- `🚀‍ build` 构建过程或辅助工具的变动
- `👷 ci` CI 配置

## 图标使用方式

1. **前往图标库查找相关图标[icon](https://icon-sets.iconify.design/?category=General)**
2. **安装图标所在的图标库**

    ```sh
    # 格式：pnpm add @iconify-json/[the-collection-you-want] -D

    # 例如
    pnpm add @iconify-json/ep -D
    ```

    安装完后可以使用当前库下的所有图标
    [https://icon-sets.iconify.design/ep/](https://icon-sets.iconify.design/ep/)
3. **项目中使用**
    使用unocss的方式[https://iconify.design/docs/usage/css/unocss/#icons-with-unocss](https://iconify.design/docs/usage/css/unocss/#icons-with-unocss)

    ```html
    <div class="i-ep-apple w-20px h-20px color-red"></div>
    ```
