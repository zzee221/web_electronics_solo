# TechPick - 联盟营销内容测评网站

使用 Astro 构建的独立产品评测网站，具备联盟营销变现能力，专注于消费电子、智能家居和户外装备的评测。

## 🚀 快速开始

### 前置要求

- Node.js 18+ (推荐使用 LTS 版本)
- npm 或 pnpm

### 安装

```bash
# 安装依赖
npm install

# 复制环境变量
cp .env.example .env

# 启动开发服务器
npm run dev
```

访问 [http://localhost:4321](http://localhost:4321) 查看网站。

### 生产环境构建

```bash
npm run build
npm run preview
```

---

## 📝 内容管理

### 创建新的博客文章

在 `src/content/posts/` 目录中创建新的 MDX 文件，并包含以下 frontmatter：

```yaml
---
title: "你的文章标题"
description: "元描述 (120-160字符)"
publishDate: 2025-01-15
category: "Smart Home"
tags: ["标签1", "标签2", "标签3"]
author: "James Mitchell"
coverImage: "https://images.pexels.com/..."
coverImageAlt: "图片描述"
coverImageCredit: "Photo by [摄影师姓名] on Pexels"
readingTime: 10
featured: false
---
```

### 创建新的测评页面

在 `src/content/reviews/` 目录中创建新的 MDX 文件，并包含完整的 frontmatter：

```yaml
---
title: "产品名称 Review: 一句话评价"
description: "元描述"
publishDate: 2025-01-20
productName: "产品全名"
productBrand: "品牌名称"
category: "Portable Power"
affiliateLink: "https://example.com/affiliate"
productImage: "https://..."
productImageAlt: "产品图片描述"
rating: 8.5
verdict: "50字符以内的总结"
pros:
  - "第一个优点"
  - "第二个优点"
cons:
  - "第一个缺点"
scores:
  design: 8.5
  performance: 9.0
  value: 8.0
  easeOfUse: 8.5
  durability: 8.0
specs:
  weight: "500g"
  dimensions: "15 x 10 x 2 cm"
  battery: "20000mAh"
author: "Marcus Rodriguez"
featured: true
---
```

### 内容 Schema 验证

Astro 会根据 `src/content/config.ts` 中的 schema 验证内容。无效的内容将导致构建错误。

---

## 🎨 自定义配置

### 网站配置

编辑 `src/utils/helpers.ts` 以更新：
- `SITE_CONFIG`：网站名称、描述、联系邮箱
- `CATEGORIES`：带图标的产品分类
- `AUTHORS`：团队成员及简介

### 样式

- 全局样式：`src/styles/global.css`
- Tailwind 配置：`tailwind.config.mjs`
- 组件样式：内联 Tailwind 类

### 组件

组件组织在 `src/components/` 目录中：
- `layout/`：Header、Footer、BaseLayout
- `home/`：Hero、FeaturedReviews、LatestPosts、CategoryNav
- `blog/`：PostCard、TableOfContents
- `review/`：ReviewCard、ScoreCard、ProsConsTable、AffiliateCTA
- `shared/`：CategoryBadge、AuthorCard、Button、Input、Textarea

---

## 🌐 部署

### Cloudflare Pages

1. 将你的 GitHub 仓库连接到 Cloudflare Pages
2. 设置构建命令：`npm run build`
3. 设置输出目录：`dist`
4. 从 `.env.example` 添加环境变量

### 手动部署

```bash
# 构建项目
npm run build

# 本地预览
npm run preview

# 将 dist/ 文件夹部署到你的托管服务商
```

---

## 🖼️ 图片

### Pexels 集成

图片来自 Pexels 使用其免费 API：
- 在 [pexels.com/api](https://www.pexels.com/api/) 创建账户
- 获取你的 API 密钥
- 在 `.env` 中添加为 `PEXELS_API_KEY`

### Cloudflare R2 (可选)

用于自托管图片：
1. 在 Cloudflare 仪表板创建 R2 存储桶
2. 将凭证添加到 `.env`
3. 上传图片并使用 R2 URL

### 图片署名

所有 Pexels 图片必须在 frontmatter 中包含摄影师署名：
```yaml
coverImageCredit: "Photo by [摄影师姓名] on Pexels"
```

---

## 🔍 SEO 功能

网站自动生成：
- `sitemap.xml` - 供搜索引擎使用
- `rss.xml` - 供 RSS 阅读器使用
- Open Graph 元标签
- 规范 URL
- 语义化 HTML 结构

---

## 📁 项目结构

```
src/
├── content/
│   ├── posts/          # 博客文章 (MDX)
│   ├── reviews/        # 产品评测 (MDX)
│   └── config.ts       # 内容 schema
├── components/
│   ├── layout/         # 布局组件
│   ├── home/          # 首页部分
│   ├── blog/          # 博客组件
│   ├── review/        # 评测组件
│   └── shared/        # 可重用组件
├── pages/             # Astro 页面
├── styles/            # 全局 CSS
└── utils/             # 辅助函数
```

---

## 🛠️ 开发

### 可用脚本

| 命令 | 描述 |
|---------|-------------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 生产环境构建 |
| `npm run preview` | 预览生产构建 |
| `npm run astro` | 运行 Astro CLI |

### TypeScript

项目使用严格 TypeScript。运行类型检查：

```bash
npx astro check
```

---

## 📄 许可证

本项目用于演示目的。可根据需要自定义和使用。

---

## 🤝 贡献

1. 创建功能分支
2. 进行更改
3. 本地测试
4. 提交拉取请求

---

## 📬 支持

关于本项目的问题：
- 邮箱：editorial@techpick.example.com
- Twitter：@techpickreviews
