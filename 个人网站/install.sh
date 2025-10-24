#!/bin/bash

echo "🚀 开始安装个人网站项目..."

# 检查 Node.js 是否已安装
if ! command -v node &> /dev/null; then
    echo "❌ 未检测到 Node.js，请先安装 Node.js 18+ 版本"
    echo "📥 请访问 https://nodejs.org/ 下载安装"
    exit 1
fi

# 检查 Node.js 版本
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js 版本过低，需要 18+ 版本，当前版本: $(node -v)"
    exit 1
fi

echo "✅ Node.js 版本检查通过: $(node -v)"

# 安装依赖
echo "📦 正在安装依赖包..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ 依赖安装完成"
else
    echo "❌ 依赖安装失败，请检查网络连接"
    exit 1
fi

# 创建 .env.local 文件
echo "⚙️  创建环境配置文件..."
cat > .env.local << EOF
# 网站配置
NEXT_PUBLIC_SITE_NAME={{YOUR_NAME}}
NEXT_PUBLIC_SITE_DESCRIPTION={{ONE_LINER}}
NEXT_PUBLIC_AVATAR_URL={{AVATAR_URL}}
NEXT_PUBLIC_XHS_URL={{XHS_URL}}
NEXT_PUBLIC_CV_URL={{CV_FILE_URL}}
EOF

echo "✅ 环境配置文件已创建"

# 运行构建测试
echo "🔨 测试项目构建..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 项目构建成功"
else
    echo "❌ 项目构建失败，请检查代码"
    exit 1
fi

echo ""
echo "🎉 安装完成！"
echo ""
echo "📝 下一步操作："
echo "1. 编辑 config/site.ts 文件，替换为你的个人信息"
echo "2. 运行 'npm run dev' 启动开发服务器"
echo "3. 打开 http://localhost:3000 查看效果"
echo ""
echo "📚 更多信息请查看 README.md 文件"
