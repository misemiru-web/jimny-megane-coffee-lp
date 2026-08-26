# AGENTS.md

## Project

Jimny megane coffee の営業提案用1ページLPを実装するリポジトリです。

現在は「実写真到着前の仮実装フェーズ」です。
レイアウト、レスポンシブ、CTA、SEO、アクセシビリティ、差し替え可能なデータ構造までを完成させ、
店舗提供・許可確認済みの実写真が届いた後に最終画像へ差し替えます。

## Source of truth

仕様判断は必ず次の優先順位に従ってください。

1. `docs/Jimny_megane_coffee_LP要件定義書_v1.1_20260826.docx`
2. `docs/content.md`
3. `docs/asset-manifest.md`
4. `docs/codex-implementation-brief.md`
5. `docs/design-reference/lp-reference-desktop.png`
6. `docs/design-reference/lp-reference-mobile.png`
7. `README.md`
8. 一般的な実装判断

下位資料が上位資料と矛盾する場合は、上位資料を優先してください。

デザインリファレンスは「見た目の参考」であり、掲載内容の一次基準ではありません。
参考画像に要件定義にない文章、商品、価格、営業時間、機能等が描かれていても追加しないでください。

## Current asset phase

承認済み実店舗写真はまだ `public/images/` にありません。

仮実装では、既存の以下だけを開発用プレースホルダーとして使用できます。

- `/placeholders/hero-drip.svg`
- `/placeholders/exterior.svg`
- `/placeholders/interior.svg`
- `/placeholders/coffee.svg`
- `/placeholders/food.svg`

これらは最終掲載素材ではありません。

禁止:

- Google Maps画像・スクリーンショットの利用
- Instagram等からの無断ダウンロード・スクレイピング
- ARAS画像の利用
- SUZUKI公式画像・ロゴの利用
- 第三者SNS画像の利用
- 実店舗・実商品・Jimny車両を似せたAI画像生成
- Jimny画像の代替生成

Jimny画像は、`asset-manifest.md` で利用可否が確認されたAPPROVED素材が存在する場合のみ使います。
未準備なら完全に省略してください。

Yorimichi用写真が未準備なら、架空画像を作らず、テキスト・余白・レイアウトで成立させてください。

## Content rules

`docs/content.md` にない未確認情報を推測・創作して追加しないでください。

特に以下は実装しません。

- 最新営業時間
- 定休日
- L.O.
- 未確認メニュー
- 価格
- 電話番号
- 予約方法
- 駐車場
- 席数
- 支払方法
- テイクアウト条件
- 現在のイベント日程
- 人気No.1
- 口コミ
- 店主経歴
- 創業ストーリー
- ARASとの関係
- SUZUKI / Jimnyとの公式関係

## Implementation rules

- Next.js / React / TypeScript
- App Router
- 1ページ静的LP
- Mobile First
- PC / Tablet対応
- DB、CMS、ログイン、独自予約、独自決済、大規模フォーム、複雑APIは追加しない
- 不要なproduction dependencyを追加しない
- データと画像パスは差し替えやすい形で一箇所へ整理する
- H1は1つ
- semantic HTML
- focus表示を消さない
- `prefers-reduced-motion` を尊重する
- 横スクロールを発生させない

## Required sections

1. SiteHeader
2. HeroSection
3. AboutHighlightsSection
4. DrinkFoodSection
5. YorimichiSection
6. GallerySection
7. AccessSection
8. FinalCtaSection
9. SiteFooter

FAQ、口コミ、Staff、長いStory、News一覧は追加しません。

## CTA

Primary CTA:
Googleマップで行き方を見る

Secondary CTA:
Instagramで最新情報を見る

Mobile sticky CTAはMAP系の1ボタンだけです。
Instagramを固定CTAに追加しないでください。

## Sample mode

現在は営業提案用サンプルです。

必須:

- `noindex, nofollow`
- Footer付近に「営業提案用サンプル」
- 未確認情報を確定表示しない
- 仮のLocalBusiness構造化データを入れない
- 本番公開用SEO情報を推測しない

## Definition of completion

実写真到着前は「仮実装完了」と「営業サンプル最終完了」を区別します。

仮実装完了:
- レイアウト
- レスポンシブ
- CTA
- Navigation
- Sample SEO
- accessibility基礎
- 差し替え可能なデータ構造
- lint/build
- placeholderを使った表示確認

営業サンプル最終完了:
- `asset-manifest.md` で利用可能と確認された実写真へ差し替え
- Heroを許可済みドリップ写真へ差し替え
- 最終画像のalt・crop・sizes確認
- LP要件定義書の最終Definition of Doneを再確認

実写真未到着の項目を無理にPASSにしないでください。

## Validation

実装後は可能な範囲で以下を行ってください。

- lint
- TypeScript check
- production build
- 375px前後のMobile確認
- 390px前後のMobile確認
- Tablet確認
- 1440px前後のDesktop確認
- console error確認
- CTA / anchor / external link確認
- noindex, nofollow確認
- 横スクロール確認
- sticky CTAの重なり確認

## Git / deployment

明示的な指示がない限り、以下は実行しないでください。

- `git commit`
- `git push`
- `git tag`
- GitHub設定変更
- Netlify / Vercel等へのdeploy
- DNS変更
