# Codex Implementation Brief

このファイルはCodexへ実装を依頼する際のハンドオフ指示です。

## 最初に行うこと

実装を開始する前に、以下をこの順序で読むこと。

1. `docs/Jimny_megane_coffee_LP要件定義書_v1.1_20260826.docx`
2. `docs/content.md`
3. `docs/asset-manifest.md`
4. `docs/design-reference/lp-reference-desktop.png`（存在する場合）
5. `docs/design-reference/lp-reference-mobile.png`（存在する場合）
6. `README.md`

矛盾する場合は上位を優先する。

## 実装方針

- Next.js / React
- TypeScript
- App Router
- 1ページの静的LP
- Mobile First
- PC / Tablet対応
- 実験的な機能や不要な依存を追加しない
- HTML/CSS/Reactで完成イメージを再現する
- 完成イメージ画像そのものをページへ貼らない

## コンポーネント

最低限:

- SiteHeader
- HeroSection
- AboutHighlightsSection
- DrinkFoodSection
- YorimichiSection
- GallerySection
- AccessSection
- FinalCtaSection
- SiteFooter

必要なら小さな共通コンポーネント:

- SectionHeading
- CtaButton
- ImageCard

過剰な抽象化はしない。

## データ

以下はコンポーネント内へ散在させず、`src/data/` 等へまとめる。

- 店舗名
- 住所
- CTA URL
- CTAラベル
- 商品カテゴリー
- Yorimichi企画例
- 画像パス
- `isSample`

例:

```ts
export const siteConfig = {
  isSample: true,
  storeName: "Jimny megane coffee",
  instagramUrl: "...",
  googleMapsUrl: "...",
};
```

## Hero

必須:

- 主画像: `/images/hero-drip.jpg`
- H1: 「用宗で、コーヒーと、よりみちを。」
- Primary CTA: Google Maps
- Secondary CTA: Instagram

Jimny:

`/images/jimny-miniature.jpg` が存在し、asset manifestで使用可能になっている場合のみサブ画像として使う。
存在しなければ、空の枠や代替画像を作らず、自然に省略する。

## Mobile

- Mobile First
- 固定CTAはGoogle Maps 1ボタンのみ
- Instagramをsticky CTAにしない
- 本文を固定CTAで隠さない
- 横スクロール禁止
- タップ領域を十分に確保

## Access

営業サンプル:

- 住所表示
- Google Mapsへのリンクボタン
- Instagramへのリンク
- Google Maps iframeなし
- Google Maps画像なし

## Sample Mode

`isSample: true` のとき:

- Footer付近に「営業提案用サンプル」
- `noindex, nofollow`
- 未確認情報を表示しない

正式化時に `isSample: false` に変更しやすい構造にする。

## SEO / Accessibility

- H1は1つ
- 見出し階層を正しくする
- 画像alt
- keyboard focus
- navigation aria
- prefers-reduced-motion
- semantic HTML

## Image

- next/image等で最適化
- width / height または aspect-ratio を確保
- Heroは適切にpriority設定
- Google Maps写真を使用しない
- asset-manifestで承認されていない素材を使用しない
- AIで不足素材を勝手に生成しない

## Design

- 深いグリーン + 生成り + 木の温度感
- 写真を大きく使う
- 余白を重視
- 過剰なcard UIを避ける
- Jimnyは控えめ
- 自動車サイト化しない
- SUZUKI / Jimny公式コラボと誤認させない
- 3D、重い動画、複雑なparallax、不要なsliderを使わない

## 禁止

- 架空商品
- 架空価格
- 架空営業時間
- 架空Story
- 人気No.1等
- 未確認予約機能
- Google Maps iframe
- Google Maps写真
- ARAS画像
- SUZUKI/Jimny公式素材
- asset manifest外の画像
- DB
- CMS
- 独自予約
- 独自決済

## Definition of Done

- 375px前後で崩れなし
- 1440px前後で崩れなし
- Hero 1〜1.3画面内に店名 / 業態 / H1 / Primary CTA
- CTA全リンク動作
- Mobile sticky CTAはMAPのみ
- Google Maps画像・iframeなし
- 未確認価格・営業時間なし
- 画像altあり
- keyboard操作可能
- console errorなし
- リンク切れなし
- 営業提案用サンプル表示あり
- noindex, nofollow
- 正式化時に情報・素材を差し替えやすい

## 実装開始時の依頼文

以下をCodexへ渡す。

> このリポジトリにあるLPを実装してください。最初に `docs/Jimny_megane_coffee_LP要件定義書_v1.1_20260826.docx`、`docs/content.md`、`docs/asset-manifest.md`、存在する場合は `docs/design-reference/` の完成イメージを確認してください。要件定義書を最上位仕様とし、未確認情報を推測で追加しないでください。まず現在のリポジトリ構成と素材を確認し、実装計画を短く提示した後、Next.js/React/TypeScriptで1ページLPを実装してください。Definition of Doneまで自己確認してください。
