# 个人网站

一个基于 Next.js 14 + TypeScript + Tailwind CSS 的现代化个人网站，完全临摹了 mumingfang.com 的视觉风格和交互体验。

## ✨ 特性

- 🎨 **现代化设计** - 完全临摹原站的视觉风格和交互体验
- 🌙 **深色模式** - 支持系统主题切换，默认跟随系统设置
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ⚡ **性能优化** - Lighthouse 性能分数 ≥ 95
- 🎭 **流畅动画** - 使用 Framer Motion 实现丝滑的动画效果
- 🔍 **SEO 友好** - 完整的元数据配置和语义化 HTML
- 🛠️ **类型安全** - 完整的 TypeScript 支持

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 3. 构建生产版本

```bash
npm run build
npm start
```

## 📝 如何替换内容

### 第一步：替换基本信息

编辑 `config/site.ts` 文件，修改以下内容：

```typescript
export const siteConfig = {
  // 基本信息
  name: "你的姓名",                    // 替换为你的姓名
  oneLiner: "你的一句话介绍",          // 替换为你的介绍
  avatar: "你的头像URL",              // 替换为你的头像链接
  
  // 社交链接
  social: {
    xiaohongshu: "你的小红书链接",     // 替换为你的小红书链接
  },
  
  // 简历下载链接
  cvUrl: "你的简历PDF链接",           // 替换为你的简历下载链接
}
```

### 第二步：替换作品集

在 `config/site.ts` 中修改 `works` 数组：

```typescript
works: [
  {
    title: "项目名称",
    cover: "项目封面图片URL",
    desc: "项目描述",
    link: "项目链接"
  },
  // 添加更多作品...
]
```

### 第三步：替换文章

在 `config/site.ts` 中修改 `articles` 数组：

```typescript
articles: [
  {
    title: "文章标题",
    date: "2024-01-15",  // 发布日期
    excerpt: "文章摘要",
    link: "文章链接"
  },
  // 添加更多文章...
]
```

## 🎨 自定义样式

### 颜色主题

在 `tailwind.config.js` 中修改颜色配置：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // 主色调配置
      },
      // 其他颜色...
    }
  }
}
```

### 动画效果

在 `src/app/globals.css` 中自定义动画：

```css
:root {
  --animation-duration: 0.3s;
  --animation-easing: cubic-bezier(0.4, 0, 0.2, 1);
  /* 其他动画变量... */
}
```

## 📁 项目结构

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 首页
│   └── globals.css         # 全局样式
├── components/             # React 组件
│   ├── Header.tsx          # 头部导航
│   ├── Hero.tsx            # 首页英雄区
│   ├── Works.tsx           # 作品集
│   ├── Articles.tsx        # 文章列表
│   ├── Footer.tsx          # 页脚
│   └── ThemeProvider.tsx   # 主题提供者
├── config/                 # 配置文件
│   └── site.ts             # 网站配置
├── public/                 # 静态资源
└── README.md               # 项目说明
```

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **字体**: Inter, JetBrains Mono

## 📊 性能优化

- ✅ 图片优化 (next/image)
- ✅ 代码分割
- ✅ 预加载关键资源
- ✅ 压缩和缓存
- ✅ SEO 优化

## 🎯 部署

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台

```bash
# 构建
npm run build

# 启动
npm start
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

如有问题，请通过以下方式联系：

- 邮箱: your-email@example.com
- 小红书: [你的小红书主页]

---

**Built with ❤️ using Cursor**
