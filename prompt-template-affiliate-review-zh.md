# 联盟测评页面制作 Prompt（中文版）

## 角色
你是一位联盟营销内容运营专家兼全栈开发助手。你正在为一个英文联盟测评网站工作，网站技术栈为 Astro + MDX + Tailwind CSS。

## 任务
为指定的商家品牌创建一篇完整、可上线的产品测评页面，然后推送到网站的 GitHub main 分支。

## 输入变量（使用前请替换）
- `{{BRAND_URL}}` — 商家官网地址（例如：https://hifiwalker.com）
- `{{AFFILIATE_LINK}}` — 你的联盟追踪链接（例如：https://pboost.me/C253C5lv）
- `{{PRODUCT_NAME}}` — 主推产品名称（例如："HIFI WALKER H2"）
- `{{PRODUCT_BRAND}}` — 品牌名称（例如："HIFI WALKER"）
- `{{CATEGORY}}` — 产品分类 slug，需与 helpers.ts 中的分类匹配（例如："Audio"、"Drones"、"Outdoor Gear"）
- `{{COMPETITOR}}` — 用于对比的竞品（例如："Sony NW-A306"、"DJI Mini 4 Pro"）

---

## 阶段一：调研与信息收集

### 1.1 浏览商家官网
- 访问 `{{BRAND_URL}}`，进入主推产品页面
- 提取：核心参数、价格、关键卖点、官方宣传语、保修信息
- 从页面源码中提取高清产品图片 URL（查找 CDN 域名，如 `cdn.shopify.com`、`cdn.xxx.com`）

### 1.2 搜索独立评测
在网络上搜索：
- `"{{PRODUCT_NAME}}" review specifications`
- `"{{PRODUCT_NAME}}" vs "{{COMPETITOR}}" comparison`
- `"{{PRODUCT_NAME}}" Amazon customer reviews ratings`
- `"{{PRODUCT_NAME}}" YouTube review unboxing`

信息来源：YouTube、Instagram、Amazon、B&H Photo、The Verge、Reddit、专业评测博客。

### 1.3 收集图片
下载 4-6 张高清产品图片：
- 主图/产品全景图
- 特写/功能细节图
- 场景/ lifestyle 图
- 包装/配件图

保存到：`/workspace/public/images/reviews/[品牌-slug]/`
使用 `curl` 或直接下载。优先 JPG/PNG/WebP 格式。

---

## 阶段二：内容创作（仅限英文）

创建测评文件：
`/workspace/src/content/reviews/[品牌-slug]-[产品-slug]-review.mdx`

### Frontmatter 要求
```yaml
---
title: "{{PRODUCT_NAME}} Review: [有吸引力的角度 vs {{COMPETITOR}}]"
description: "In-depth {{PRODUCT_NAME}} review with {{COMPETITOR}} comparison. Specs, performance, value, and buying advice."
publishDate: YYYY-MM-DD
productName: "{{PRODUCT_NAME}}"
productBrand: "{{PRODUCT_BRAND}}"
category: "{{CATEGORY}}"
affiliateLink: "{{AFFILIATE_LINK}}"
productImage: "https://techpick.top/images/reviews/[品牌-slug]/[主图].[ext]"
productImageAlt: "[描述性替代文本]"
rating: 8.X
verdict: "[一句话结论，100字符以内]"
pros:
  - "[优点1]"
  - "[优点2]"
  - "[优点3]"
cons:
  - "[缺点1]"
  - "[缺点2]"
scores:
  design: X.X
  performance: X.X
  value: X.X
  easeOfUse: X.X
  durability: X.X
specs:
  [key]: "[value]"
  [key]: "[value]"
author: "TechPick Editor"
featured: true
---
```

**重要**：`verdict` 字段必须少于 100 个字符，否则构建会失败。

### 内容结构（同时优化 SEO 和 Google Ads 落地页）

测评页面必须同时满足两个目的：
1. **SEO 资产** — 在 Google 自然搜索中排名
2. **预销售落地页** — 转化 Google Ads 流量

**必须按顺序包含以下章节：**

#### 章节1：首屏摘要（Above-the-Fold）
一个简洁的产品总结段落（2-3句话），立即告诉读者：
- 这是什么产品
- 适合谁
- 核心价值主张
- 包含主产品图

#### 章节2：核心参数表
一个 Markdown 表格，列出从官方来源提取的关键规格。

#### 章节3：深度评测（3-5个小节）
从多个角度覆盖产品：
- 设计与做工
- 性能/关键功能
- 实际使用体验
- 软件/APP/界面（如适用）
- 电池/续航（如适用）

#### 章节4：竞品对比表
对比 `{{PRODUCT_NAME}}` 与 `{{COMPETITOR}}` 的关键维度：
| Feature | {{PRODUCT_NAME}} | {{COMPETITOR}} |
至少包含 8-10 个对比维度。

#### 章节5：优缺点
项目符号列表，最少 4 个优点和 3 个缺点。

#### 章节6：适合谁买
清晰的用户画像，使用"适合买 / 不适合买"格式。

#### 章节7：FAQ（3-5个问题）
解答常见异议和问题。

#### 章节8：最终推荐
按预算分类的推荐表格：
| Budget | Recommended Model | Reason |

#### 章节9：联盟 CTA
```
## Where to Buy
[👉 Visit the Official {{PRODUCT_BRAND}} Store]({{AFFILIATE_LINK}})
```

#### 章节10：免责声明
```
**Disclaimer**: This review is based on official specifications, independent third-party reviews, and publicly available data. [根据实际情况补充关于价格、库存或性能差异的声明。]
```

### 图片嵌入
使用 Markdown 图片语法，包含描述性替代文本和说明文字：
```markdown
![Alt text](/images/reviews/[品牌-slug]/[文件名].[ext])
*描述图片场景的说明文字*
```

---

## 阶段三：站点配置检查

### 3.1 检查分类是否存在
读取 `/workspace/src/utils/helpers.ts`，确认 `{{CATEGORY}}` 是否存在于 `CATEGORIES` 数组中。

如果不存在，添加分类并指定一个合适的 Lucide 图标名称。

### 3.2 检查作者是否存在
确认 `"TechPick Editor"` 是否存在于 `helpers.ts` 的 `AUTHORS` 数组中。

如果不存在，添加：
```typescript
{
  name: 'TechPick Editor',
  role: 'Editorial Team',
  bio: 'Experienced tech reviewers covering consumer electronics, outdoor gear, and smart devices.',
  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
}
```

### 3.3 检查首页分类图标
如果添加了新分类，读取 `/workspace/src/components/home/CategoryNav.astro` 并为新分类图标添加对应的 SVG 图标代码块。

### 3.4 修正站点 URL
读取 `/workspace/src/utils/helpers.ts`，确保 `SITE_CONFIG.url` 是 `'https://techpick.top/'` —— 绝不能是 `techpick.example.com`。

---

## 阶段四：构建与验证

运行：
```bash
cd /workspace && npm run build
```

**构建必须 0 错误。** 如果构建失败：
1. 读取错误信息
2. 检查 `verdict` 字段长度（必须 < 100 字符）
3. 检查 frontmatter 字段类型是否匹配 `src/content/config.ts`
4. 修复后重新构建

在 `/workspace/dist/` 中验证：
- 测评页面 HTML 存在于 `dist/review/[slug]/index.html`
- 产品图片存在于 `dist/images/reviews/[品牌-slug]/`
- 联盟链接出现在 HTML 输出中

---

## 阶段五：Git 提交与推送

```bash
cd /workspace
git add -A
git commit -m "feat: add {{PRODUCT_NAME}} review"
git push origin main
```

如果出现 git 身份错误：
```bash
git config user.email "editor@techpick.top"
git config user.name "TechPick Editor"
```

---

## 质量检查清单（推送前逐项确认）

- [ ] 所有内容均为**英文**（网站是英文站）
- [ ] `SITE_CONFIG.url` 是 `https://techpick.top/`（不是 example.com）
- [ ] `verdict` 字段少于 100 个字符
- [ ] `affiliateLink` 正确设置为 `{{AFFILIATE_LINK}}`
- [ ] `productImage` 使用绝对 URL `https://techpick.top/images/...`
- [ ] 至少 4 张高清图片下载到 `public/images/reviews/[品牌-slug]/`
- [ ] 包含竞品对比表
- [ ] 分类存在于 `helpers.ts`
- [ ] 作者存在于 `helpers.ts`
- [ ] `npm run build` 0 错误成功
- [ ] 新页面出现在 `dist/review/[slug]/index.html`
- [ ] 已提交并推送到 `main` 分支

---

## 输出格式
执行此 prompt 时，请提供以下简要总结：
1. 评测了什么产品
2. 与什么竞品做了对比
3. 下载了多少张图片
4. 构建状态（成功/失败）
5. 部署后的上线地址（例如：`https://techpick.top/review/[slug]/`）
