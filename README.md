# Jimny megane coffee LP

Jimny megane coffee の営業提案用1ページLPを実装するリポジトリです。

## Current status

現在は **Phase 1: 実写真到着前の仮実装フェーズ** です。

店主から利用可能な実写真が届くまで、
`public/placeholders/` の既存SVGを使って、以下を先に完成させます。

- ページ構造
- デザイン
- Responsive
- CTA
- Navigation
- Sample SEO
- Accessibility基礎
- 画像差し替え可能なデータ構造
- lint / build

実写真到着後に `asset-manifest.md` で利用可否を確認し、
APPROVED素材だけを `public/images/` に配置して差し替えます。

そのため、Phase 1完了時点は「仮実装完了」であり、
営業提案用サンプルの最終完了ではありません。

---

## Repository structure

```text
jimny-megane-coffee-lp/
├─ README.md
├─ AGENTS.md
├─ .gitignore
│
├─ docs/
│  ├─ Jimny_megane_coffee_LP要件定義書_v1.2_20260827.docx
│  ├─ content.md
│  ├─ asset-manifest.md
│  ├─ codex-implementation-brief.md
│  └─ design-reference/
│     ├─ lp-reference-desktop.png
│     └─ lp-reference-mobile.png
│
├─ public/
│  └─ placeholders/
│     ├─ hero-drip.svg
│     ├─ exterior.svg
│     ├─ interior.svg
│     ├─ coffee.svg
│     └─ food.svg
│
└─ src/
   └─ Codexが実装
```

---

## Source priority

実装判断は以下の順序に従います。

1. `docs/Jimny_megane_coffee_LP要件定義書_v1.2_20260827.docx`
2. `docs/content.md`
3. `docs/asset-manifest.md`
4. `docs/codex-implementation-brief.md`
5. `docs/design-reference/`
6. `README.md`

Design Referenceは見た目の参考であり、
要件定義にない事実・商品・価格・機能等の追加根拠にはしません。

---

## Implementation

基本方針:

- Next.js
- React
- TypeScript
- App Router
- Mobile First
- 1ページ静的LP
- PC / Tablet対応

不要なDB、CMS、ログイン、独自予約、独自決済、大規模フォーム、複雑APIは追加しません。

---

## Phase 1 placeholders

開発用として利用できるのは以下です。

- `/placeholders/hero-drip.svg`
- `/placeholders/exterior.svg`
- `/placeholders/interior.svg`
- `/placeholders/coffee.svg`
- `/placeholders/food.svg`

これらは最終素材ではありません。

Yorimichi写真が未準備なら画像なしでも成立させます。

Jimny画像はAPPROVED素材がない限り省略します。

外部サイトから画像を取得して代替しません。

---

## Image rights

使用禁止:

- Google Maps写真・スクリーンショット
- 第三者SNS写真
- ARAS画像
- SUZUKI公式画像・ロゴ
- 無断転載画像
- 実店舗・実商品・実Jimny車両を似せたAI画像

正式画像は `docs/asset-manifest.md` のStatusがAPPROVEDの素材だけを使用します。

---

## Sample mode

このサイトは営業提案用サンプルです。

必須:

- `noindex, nofollow`
- Footer付近に「営業提案用サンプル」
- 未確認情報を確定表示しない
- LocalBusinessへ仮値を入れない

---

## Primary CTA

Google Mapsへの遷移です。

URLは `docs/content.md` を唯一の実装基準とします。

Secondary CTAは公式Instagramです。

Accessには `docs/content.md` のEmbed URLを使ったGoogle Maps公式iframeを小さく表示します。Google Maps写真・スクリーンショットは使用しません。外部MAP CTAも維持します。

Mobileのsticky CTAはMAPの1ボタンだけです。

---

## Before Codex implementation

以下が揃っていることを確認します。

- LP要件定義書 v1.2
- content.md
- asset-manifest.md
- codex-implementation-brief.md
- desktop design reference
- mobile design reference
- placeholders
- AGENTS.md
- Google Maps URL

実写真はPhase 1開始条件ではありません。

---

## Codex work boundary

初回実装では:

- 実装
- lint
- TypeScript check
- build
- local responsive check

まで行います。

明示的な指示なしに以下は行いません。

- commit
- push
- tag
- deploy
- DNS変更

---

## Final sample completion

実写真到着後:

1. 素材の利用可否確認
2. APPROVED画像を `public/images/` へ配置
3. placeholderから差し替え
4. crop / alt / sizes確認
5. 375px / 390px / Tablet / 1440px確認
6. CTA / noindex / sample表記確認
7. LP要件定義書のDefinition of Done最終確認

を行います。
