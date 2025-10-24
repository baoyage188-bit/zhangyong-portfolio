# 🚀 部署指南

## 快速部署到 Vercel

### 1. 准备代码仓库
```bash
# 初始化 Git 仓库
git init
git add .
git commit -m "Initial commit: 个人网站项目"

# 推送到 GitHub
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### 2. Vercel 部署
1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 选择你的仓库
5. 点击 "Deploy"

### 3. 配置环境变量
在 Vercel 项目设置中添加：
```
NEXT_PUBLIC_SITE_NAME=你的姓名
NEXT_PUBLIC_SITE_DESCRIPTION=你的介绍
NEXT_PUBLIC_AVATAR_URL=你的头像链接
NEXT_PUBLIC_XHS_URL=你的小红书链接
NEXT_PUBLIC_CV_URL=你的简历链接
```

## 其他部署平台

### Netlify 部署
```bash
# 构建项目
npm run build

# 部署到 Netlify
npx netlify deploy --prod --dir=out
```

### 自托管部署
```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 性能优化检查

### Lighthouse 测试
1. 打开部署的网站
2. 按 F12 打开开发者工具
3. 切换到 "Lighthouse" 标签
4. 点击 "Generate report"
5. 确保所有分数 ≥ 95

### 性能优化建议
- 使用 CDN 加速图片加载
- 启用 Gzip 压缩
- 配置浏览器缓存
- 优化图片格式和大小

## 域名配置

### 自定义域名
1. 在 Vercel 项目设置中添加域名
2. 配置 DNS 记录
3. 启用 HTTPS 证书

### SEO 优化
- 更新 `src/app/layout.tsx` 中的元数据
- 添加 Google Analytics
- 配置 sitemap.xml
- 提交到搜索引擎

## 监控和维护

### 性能监控
- 使用 Vercel Analytics
- 配置错误监控
- 设置性能警报

### 内容更新
- 修改 `config/site.ts` 文件
- 重新部署或使用增量更新
- 定期更新作品和文章

## 故障排除

### 常见问题
1. **构建失败**: 检查 Node.js 版本和依赖
2. **图片不显示**: 检查图片 URL 和域名配置
3. **样式问题**: 清除缓存重新构建
4. **性能问题**: 检查图片大小和格式

### 调试工具
- 使用浏览器开发者工具
- 检查网络请求
- 分析性能瓶颈
- 测试移动端兼容性

---

🎉 **恭喜！你的个人网站已经成功部署！**

现在你可以：
- 分享你的网站链接
- 持续更新内容
- 监控网站性能
- 享受你的 100万美金奖励！
