# 御坂网络工作室官网

御坂网络工作室官方网站，使用 Vue 3 + Vue Router + Naive UI 构建。

## 技术栈

- Vue 3
- Vue Router
- Naive UI
- Vite

## 安装依赖

```bash
npm install
```

## 运行开发服务器

```bash
npm run dev
```

## 构建生产版本

```bash
npm run build
```

## 预览生产构建

```bash
npm run preview
```

## 项目结构

```
├── src/
│   ├── components/     # 公共组件
│   │   ├── AppHeader.vue   # 头部导航
│   │   └── AppFooter.vue   # 页脚
│   ├── views/          # 页面组件
│   │   ├── Home.vue        # 首页
│   │   ├── Services.vue    # 服务页面
│   │   ├── About.vue       # 关于我们
│   │   └── Contact.vue     # 联系我们
│   ├── router/         # 路由配置
│   │   └── index.js
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
├── index.html          # HTML 模板
├── vite.config.js      # Vite 配置
└── package.json        # 项目配置
```
