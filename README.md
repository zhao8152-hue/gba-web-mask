# Game Boy Advance Web Mask

基于 React + Tailwind CSS + SVG 的高还原度 GBA 游戏机外壳遮罩，用于网页版复古游戏。

## 特性

- **透明冰川外壳** — 半透明 SVGGBA 轮廓填充
- **L/R 肩键触发器** — 带按压动画的旋转肩键
- **D-Pad 3D 倾斜** — 按下时透视倾斜效果
- **A/B 按钮** — 真实的按压反馈
- **屏幕边框** — 渐变边框、CRT 扫描线、屏幕反光
- **响应式** — 使用 `@container` 实现流畅缩放
- **即插即用** — 将你的游戏 canvas/iframe 放入屏幕容器即可

## 快速开始

```bash
npm install
npm run dev
```

打开 http://localhost:3000

## 项目结构

```
src/
  App.tsx       # GBA 外壳遮罩组件
  index.css     # Tailwind + 全局样式
  main.tsx      # 入口文件
```

## 自定义外壳形状

外壳形状定义在 `GBA shell.svg` 中。要修改它：

1. 用设计工具（CorelDRAW、Figma 等）编辑 SVG
2. 导出路径数据
3. 替换 `App.tsx` 中的 `<path>` 元素

## 技术栈

- React 19
- Tailwind CSS 4
- Vite 6
- TypeScript

## 许可

Apache-2.0
