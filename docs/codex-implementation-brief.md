# Jimny megane coffee | Codex Implementation Brief

更新日: 2026-08-26

## 1. Purpose

Jimny megane coffee の営業提案用1ページLPを、Next.js / React / TypeScriptで実装するためのCodex向け実装基準です。

今回の実装は2段階に分けます。

### Phase 1: 仮実装

実店舗の承認済み写真がまだ揃っていないため、既存の `public/placeholders/` を使って以下を先に完成させます。

- ページ構造
- レスポンシブ
- タイポグラフィ
- 配色
- CTA
- Navigation
- Sample SEO
- アクセシビリティ基礎
- 画像差し替え可能なデータ構造
- lint / build

### Phase 2: 実写真差し替え・最終QA

店舗提供または利用確認済み写真が揃ったら、`asset-manifest.md` のStatusを確認し、
APPROVED素材だけを `public/images/` に配置して差し替えます。

Phase 1の完了を、LP要件定義書における最終Definition of Doneの完全達成とは扱いません。

---

## 2. Source Priority

実装判断は次の順序に従います。

1. `docs/Jimny_megane_coffee_LP要件定義書_v1.1_20260826.docx`
2. `docs/content.md`
3. `docs/asset-manifest.md`
4. このファイル
5. `docs/design-reference/lp-reference-desktop.png`
6. `docs/design-reference/lp-reference-mobile.png`
7. `README.md`
8. 一般的な実装判断

高順位資料が常に優先です。

Design Referenceは掲載事実のソースではありません。
参考画像に要件外の文言・商品・価格・機能があっても実装しません。

---

## 3. Current URLs

Instagram:

`https://www.instagram.com/jimny_meganecoffee/`

Google Maps:

`https://www.google.com/maps/place/Jimny+megane+coffee+%E3%82%B8%E3%83%A0%E3%83%8B%E3%83%BC%E3%83%A1%E3%82%AC%E3%83%8D%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC/@34.9220057,138.3604236,17z/data=!3m1!4b1!4m6!3m5!1s0x601a496991fe1693:0x31f4fbc997f79dd9!8m2!3d34.9220057!4d138.3604236!16s%2Fg%2F11xdxdpb27!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D`

Google MapsはPrimary CTAで利用します。

---

## 4. Current Asset Rules

Phase 1で利用できる開発用placeholder:

- `public/placeholders/hero-drip.svg`
- `public/placeholders/exterior.svg`
- `public/placeholders/interior.svg`
- `public/placeholders/coffee.svg`
- `public/placeholders/food.svg`

### Placeholder mapping

| Role | Phase 1 |
|---|---|
| Hero main | `/placeholders/hero-drip.svg` |
| Exterior | `/placeholders/exterior.svg` |
| Interior | `/placeholders/interior.svg` |
| Coffee | `/placeholders/coffee.svg` |
| Food | `/placeholders/food.svg` |
| Yorimichi | 画像なしでも成立させる |
| Jimny | 省略 |

placeholderは開発確認用であり、店舗写真として誤認させる表現を追加しません。

### Prohibited

- Google Maps写真・スクリーンショット
- 第三者SNS写真
- ARAS画像
- SUZUKI公式画像・ロゴ
- 外部画像のダウンロード・スクレイピング
- AIによる実店舗・実商品・実Jimny車両の代替画像生成

JimnyはAPPROVED素材がない限り、省略します。

---

## 5. Implementation Stack

基本:

- Next.js
- React
- TypeScript
- App Router
- 1ページ静的構成
- Mobile First

追加依存は最小限にしてください。
UI framework、carousel、lightbox、animation library等は原則不要です。

推奨構造例:

```text
src/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ globals.css
│
├─ components/
│  ├─ SiteHeader.tsx
│  ├─ HeroSection.tsx
│  ├─ AboutHighlightsSection.tsx
│  ├─ DrinkFoodSection.tsx
│  ├─ YorimichiSection.tsx
│  ├─ GallerySection.tsx
│  ├─ AccessSection.tsx
│  ├─ FinalCtaSection.tsx
│  └─ SiteFooter.tsx
│
└─ data/
   └─ site.ts
```

完全一致は必須ではありませんが、店舗情報・CTA・画像パス・企画例を差し替えやすい構造にしてください。

---

## 6. Required Page Structure

1. Header
2. Hero
3. About + Highlights
4. Drink & Food
5. Yorimichi
6. Gallery
7. Access
8. Final CTA
9. Footer

追加しないもの:

- FAQ
- 口コミ
- Staff
- 長いStory
- News一覧
- 予約フォーム
- 電話CTA

---

## 7. Design Direction

LPコンセプト:

> 用宗で、コーヒーと、よりみちを。

方向性:

- 親しみ
- 静かな温かさ
- 自然体
- 個人店らしさ
- 木の温度感
- 少しの遊び心
- 写真と余白を優先

避ける:

- 高級ホテル風
- 大企業風
- generic SaaS UI
- 過剰な広告LP
- 過度なヴィンテージ
- カードの乱用
- 不要なgradient
- 3D
- 重い動画
- 複雑なparallax
- slider
- lightbox

### Color tokens

- Primary: `#294735`
- Background: `#F5EFE3`
- Surface: `#FFFDF8`
- Wood Accent: `#C58B52`
- Play Accent: `#C96B3C`
- Text: `#1D1D1B`
- Sub Text: `#6C6A64`
- Border: `#D8D2C6`

これらは要件定義書上の仮配色です。

---

## 8. Hero

最重要セクションです。

Eyebrow:

> MOCHIMUNE / SHIZUOKA ・ COFFEE STAND & BAR

H1:

> 用宗で、コーヒーと、よりみちを。

Sub copy:

> 南部鉄器で淹れるドリップ珈琲。食事やお酒も楽しめる、用宗の小さな coffee stand & bar。

Primary CTA:

> Googleマップで行き方を見る

Secondary CTA:

> Instagramで最新情報を見る

Desktop:

- 左 40〜45%: text
- 右 55〜60%: large image
- Hero高さは要件定義書の680〜760px程度を目安

Mobile:

- Text
- CTA
- Hero image

の順。

1〜1.3画面程度で、店名・業態・H1・Primary CTAが認識できるようにします。

Phase 1 Hero image:

`/placeholders/hero-drip.svg`

Phase 2ではAPPROVEDの許可済みドリップ写真へ差し替えます。

---

## 9. Section Notes

### About + Highlights

AboutとFeaturesを分けません。

見出し:

> 用宗にある、小さな coffee stand & bar。

Highlights:

1. 南部鉄器で淹れるドリップ珈琲
2. Coffee / Food / Bar
3. 用宗の“よりみち”

未確認の徒歩分数や駅からの経路コピーは追加しません。

### Drink & Food

3カテゴリー:

- Coffee
- Food
- Bar

確認済み掲載候補だけ使います。

- 南部鉄器で淹れるドリップ珈琲
- おむすび等
- ビール

価格・人気順位・架空商品を追加しません。

### Yorimichi

企画例:

- 朝のよりみち in 用宗
- 昼のよりみち
- Coffee Blues

必ず「過去の企画例」または同等の明示を入れます。

現在開催中とは表示しません。

画像が未準備なら、画像を捏造せずテキスト中心で成立させます。

### Gallery

Phase 1では既存placeholderを使用。

Jimny用の空枠は不要です。
APPROVED素材が来た場合だけ後で追加できる構造にします。

### Access

表示:

- Jimny megane coffee
- coffee stand and bar
- 静岡県静岡市駿河区用宗5-1-3
- 最新の営業日時はInstagramでご確認ください

Google Maps iframeは使いません。

Primary CTAは外部Google Mapsリンクです。

### Final CTA

見出し:

> 今日のよりみちを、用宗で。

Primary: Google Maps
Secondary: Instagram

### Footer

必須:

- 店名
- 業態
- 住所
- Instagram
- 営業提案用サンプル

---

## 10. Header / Navigation

固定Header。

Desktop:

- Text logo
- Anchor navigation
- MAP CTA

Mobile:

- Store name
- Menu button

スクロール後のみ生成り背景＋薄いborderを出す方向。

アンカー先には固定Headerを考慮した `scroll-margin` を設定します。

Mobile menuを実装する場合:

- keyboard操作
- `aria-expanded`
- focus表示

に対応します。

---

## 11. Mobile Sticky CTA

Mobileのみ、画面下部にPrimary CTAを1つ固定します。

表示候補:

> MAP・行き方を見る

ルール:

- MAPだけ
- Instagram固定は追加しない
- 本文を覆わない
- Footerを邪魔しない
- 十分なtap area
- 横スクロールなし

本文側にsticky CTA分のbottom spacingを確保してください。

---

## 12. Sample SEO

現在は営業提案用サンプルです。

必須:

- `noindex`
- `nofollow`

サンプル段階では以下を行いません。

- 仮LocalBusinessデータ
- 未確認営業時間
- 未確認電話
- 未確認URLを使った構造化データ
- 検索順位保証

title候補:

`Jimny megane coffee｜用宗の coffee stand & bar`

description候補はLP要件定義書 / content.mdを基準にします。

---

## 13. Accessibility

最低限:

- semantic HTML
- H1は1つ
- H2/H3を意味順に使用
- 本文Mobile 16px相当以上
- keyboard focusを維持
- CTA 44px程度以上のtap area
- 画像に適切なalt
- 装飾画像は空alt
- `prefers-reduced-motion`
- 十分なcontrast
- 横スクロールなし

---

## 14. Image Implementation

Phase 1でも画像コンテナの比率を安定させます。

- `aspect-ratio`
- `sizes`
- 適切な寸法
- Heroの優先表示
- layout shift抑制

を意識します。

実写真差し替え後にcrop調整が必要になることを前提に、
画像パスをコンポーネント内へ散在させないでください。

---

## 15. Unconfirmed Information

以下は追加禁止です。

- 最新営業時間
- 定休日
- L.O.
- 正式な全メニュー
- 価格
- 電話番号
- 予約方法
- 駐車場
- 席数
- 支払方法
- テイクアウト条件
- 現在のイベント日程
- ARASとの関係
- Jimnyという店名の由来
- SUZUKI / Jimnyとの公式関係

不足を創作で補わず、デザイン・余白・写真レイアウトで成立させます。

---

## 16. Validation

実装後:

1. lint
2. TypeScript check
3. production build
4. console errors
5. internal anchors
6. external CTA
7. sample robots
8. responsive

確認幅:

- 約375px
- 約390px
- Tablet
- 約1440px

重点確認:

- 横スクロールなし
- Hero崩れなし
- Header重なりなし
- Mobile sticky CTA重なりなし
- Gallery/Grid崩れなし
- Footer正常
- CTA正常
- noindex, nofollow
- 「営業提案用サンプル」表示

---

## 17. Phase 1 Completion Criteria

以下を満たせば「仮実装完了」です。

- 全Required section実装
- content.mdの確定文字情報を反映
- Google Maps CTAに正式URLを設定
- Instagram CTA設定
- placeholderで全体レイアウト成立
- Responsive成立
- Sample SEO成立
- accessibility基礎成立
- データ差し替え構造成立
- lint / build成功
- console errorなし
- commit / push / deploy未実施

以下はPhase 2 pendingとして報告します。

- 実Hero写真
- 実外観写真
- 実店内写真
- 実Coffee写真
- 実Food写真
- 任意Yorimichi写真
- 条件を満たした場合のJimny写真

---

## 18. Phase 2 Final Completion

APPROVED写真へ差し替えた後に、LP要件定義書のDefinition of Doneを再確認します。

特に:

- Heroが許可済み公式Instagram由来のドリップ写真
- Google Maps画像不使用
- Jimnyは条件を満たす場合のみ
- alt / crop / sizes最終確認
- CTA一貫性
- Mobile sticky CTA
- noindex / nofollow
- 未確認情報なし

を最終確認します。

---

## 19. Work Boundary

今回Codexに許可するのは実装とローカル検証までです。

明示的な指示なしに以下を行わないでください。

- git commit
- git push
- git tag
- GitHub設定変更
- deploy
- DNS変更
