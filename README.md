# omikuji-v1

日本の伝統的なおみくじをシミュレートするWebアプリケーション

## Overview

ボタンをクリックすることで、ランダムにおみくじの結果（大吉、中吉、小吉、吉、半吉、末吉、末小吉、凶、小凶、半凶、末凶、大凶）を表示するシンプルなWebアプリケーションです。

## Tech Stack

- **TypeScript** - 型安全な開発
- **Vite** - 高速なビルドツール
- **Tailwind CSS v4** - ユーティリティファーストCSSフレームワーク
- **Biome** - コードフォーマッター・リンター
- **Lefthook** - Gitフック管理

## Setup

### 必要な環境

- Node.js 18以上
- npm または pnpm

### インストール

```bash
# npmの場合
npm install

# pnpmの場合
pnpm install
```

### 開発サーバーの起動

```bash
# npmの場合
npm run dev

# pnpmの場合
pnpm dev
```

### ビルド

```bash
# npmの場合
npm run build

# pnpmの場合
pnpm build
```

### プレビュー

```bash
# npmの場合
npm run preview

# pnpmの場合
pnpm preview
```

## Usage

1. 開発サーバーを起動
2. ブラウザで `http://localhost:5173` にアクセス
3. 「おみくじを引く」ボタンをクリック
4. 運勢が表示されます

## Directory Structure

```
omikuji-v1/
├── src/
│   ├── main.ts          # メインのTypeScriptファイル
│   ├── style.css        # スタイルシート
│   └── vite-env.d.ts    # Vite型定義
├── public/              # 静的ファイル
├── dist/                # ビルド出力ディレクトリ
├── index.html           # HTMLエントリーポイント
├── vite.config.ts       # Vite設定
├── tsconfig.json        # TypeScript設定
├── biome.json           # Biome設定
├── lefthook.yml         # Lefthook設定
└── package.json         # プロジェクト設定
```

## License

This repository is for personal/private use only.
