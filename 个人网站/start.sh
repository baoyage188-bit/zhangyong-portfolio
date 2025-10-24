#!/bin/bash

echo "🚀 启动个人网站开发服务器..."

# 检查是否已安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 未检测到依赖包，正在安装..."
    npm install
fi

# 启动开发服务器
echo "🌐 启动开发服务器..."
echo "📍 访问地址: http://localhost:3000"
echo "⏹️  按 Ctrl+C 停止服务器"
echo ""

npm run dev
