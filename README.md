# Jimny megane coffee LP

Jimny megane coffee の営業提案用サンプルLPを制作し、店舗承認後は同じコードを正式サイトへ育てるためのリポジトリです。

このリポジトリでは、**サンプル用と正式版を分けません**。  
まず営業提案用サンプルを実装し、承認後に正式情報・正式素材へ差し替えて本番公開します。

---

## 1. 実装時の最優先ルール

実装判断の優先順位は以下です。

1. `docs/Jimny_megane_coffee_LP要件定義書_v1.1_20260826.docx`
2. `docs/content.md`
3. `docs/asset-manifest.md`
4. `docs/design-reference/` の完成イメージ
5. 一般的な実装判断

上位資料と下位資料が矛盾する場合は、**必ず上位資料を優先**してください。

完成イメージ画像に、要件定義にない商品・価格・営業時間・Story・UI等が描かれていても、仕様として採用しません。

---

## 2. リポジトリ構成

```text
jimny-megane-coffee-lp/
│
├─ README.md
├─ .gitignore
│
├─ docs/
│  ├─ Jimny_megane_coffee_LP要件定義書_v1.1_20260826.docx
│  ├─ content.md
│  ├─ asset-manifest.md
│  ├─ codex-implementation-brief.md
│  │
│  └─ design-reference/
│     ├─ lp-reference-desktop.png
│     └─ lp-reference-mobile.png
│
├─ public/
│  └─ images/
│     ├─ hero-drip.jpg
│     ├─ exterior-main.jpg
│     ├─ interior-counter.jpg
│     ├─ coffee-01.jpg
│     ├─ food-01.jpg
│     ├─ yorimichi-morning.jpg
│     ├─ yorimichi-daytime.jpg
│     ├─ coffee-blues.jpg
│     └─ jimny-miniature.jpg
│
└─ src/
   └─ Codexが実装
```

---

## 3. 各ファイルの役割

### `docs/Jimny_megane_coffee_LP要件定義書_v1.1_20260826.docx`

このLPの**最上位仕様書**です。

以下を定義しています。

- LPの目的
- 想定ペルソナ
- Hero
- セクション構成
- CTA
- デザインコンセプト
- Jimny要素の扱い
- レスポンシブ
- SEO
- アクセシビリティ
- 技術要件
- Definition of Done

Codexは最初にこのファイルを確認してください。

---

### `docs/content.md`

実際にLPへ入れる文章・URL・CTAの基準です。

主に以下を管理します。

- 店舗名
- 住所
- H1
- Heroコピー
- About本文
- CTAラベル
- Instagram URL
- Google Maps URL
- Yorimichi企画名
- 未確認情報

**未確認項目を推測で埋めないでください。**

---

### `docs/asset-manifest.md`

画像素材の使用可否を管理します。

原則として、**APPROVEDになった画像だけを `public/images/` に入れます。**

確認する内容:

- 出典
- 用途
- 営業用サンプルでの利用可否
- Web利用権限
- 第三者素材ではないか
- 注意事項

---

### `docs/codex-implementation-brief.md`

Codex向けの実装指示書です。

Next.js / React / TypeScript、コンポーネント構成、Sample Mode、Hero、Mobile CTA、SEO、アクセシビリティ、禁止事項、Definition of Doneなどを記載しています。

---

### `docs/design-reference/`

LP完成イメージを置きます。

```text
lp-reference-desktop.png
lp-reference-mobile.png
```

これらは**実装参考画像**です。

Webサイト内に画像として貼り付けず、HTML / CSS / Reactで再現してください。

完成イメージはあくまで見た目の参考であり、要件定義書より優先しません。

---

### `public/images/`

LPで実際に使用する画像だけを置きます。

推奨ファイル:

```text
hero-drip.jpg
exterior-main.jpg
interior-counter.jpg
coffee-01.jpg
food-01.jpg
yorimichi-morning.jpg
yorimichi-daytime.jpg
coffee-blues.jpg
jimny-miniature.jpg
```

すべて揃っている必要はありません。

最低限、以下があれば実装可能です。

```text
hero-drip.jpg
exterior-main.jpg
interior-counter.jpg
coffee-01.jpg
food-01.jpg
```

---

## 4. 画像ルール

### 使用してよい画像

- 店舗提供写真
- 今回の営業用サンプルで使用許可が確認できている公式Instagram写真
- `asset-manifest.md` で利用可能と確認できた素材

### 使用禁止

- Google Mapsの写真
- Google Mapsのスクリーンショット
- ARASの画像
- 第三者SNS投稿画像
- SUZUKI / Jimny公式素材
- Web掲載権限が確認できていないイラスト
- 出典不明画像

### Jimny画像

`jimny-miniature.jpg` は必須ではありません。

公式Instagram由来の原画像で、Web利用可能と確認できた場合のみ使用します。

利用できる写真がない場合:

- Google Maps画像で代用しない
- AIでJimnyを生成しない
- SUZUKI公式素材を使わない
- 空の画像枠を作らない

そのまま省略してください。

---

## 5. Heroの確定仕様

Hero主画像:

```text
/public/images/hero-drip.jpg
```

H1:

```text
用宗で、コーヒーと、よりみちを。
```

Primary CTA:

```text
Googleマップで行き方を見る
```

Secondary CTA:

```text
Instagramで最新情報を見る
```

Heroでは、まず「コーヒー店であること」が一目で分かることを最優先します。

Jimnyは主役ではなく、利用可能な素材がある場合のみ小さなサブ要素として扱います。

---

## 6. Google Maps

Google Mapsの写真やスクリーンショットは使用しません。

必要なのは店舗の共有URLだけです。

Google Maps URLは `docs/content.md` に記載します。

営業サンプルではiframe埋め込みは使わず、

```text
Googleマップで行き方を見る
```

という外部リンクCTAを使用します。

---

## 7. サンプルモード

サンプルと正式版で別コードは作りません。

実装時は以下のような設定値を用意してください。

```ts
export const siteConfig = {
  isSample: true,
}
```

### `isSample: true`

営業提案用サンプル。

- `noindex, nofollow`
- Footer付近に「営業提案用サンプル」
- 未確認情報を確定表示しない
- 正式公開用SEOを有効化しない

### `isSample: false`

正式契約後。

- 正式情報へ差し替え
- 正式素材へ差し替え
- 店舗承認後に `noindex` を解除
- 「営業提案用サンプル」表示を削除
- 正式SEO・構造化データを設定

---

## 8. 実装してはいけないもの

以下は要件にない限り追加しません。

- 架空商品
- 架空価格
- 架空営業時間
- 架空の店主Story
- 人気No.1等の根拠のない表現
- 口コミの創作
- 未確認予約機能
- 独自予約システム
- DB
- CMS
- 会員機能
- 独自決済
- 複雑なAPI
- 重い3D
- 過剰なparallax
- 不要なslider

---

## 9. 実装方針

基本技術:

- Next.js
- React
- TypeScript
- App Router
- Mobile First
- Responsive
- 静的1ページLP

推奨コンポーネント:

```text
SiteHeader
HeroSection
AboutHighlightsSection
DrinkFoodSection
YorimichiSection
GallerySection
AccessSection
FinalCtaSection
SiteFooter
```

店舗情報、CTA URL、画像パス等は `src/data/` 等へ分離し、正式制作時に差し替えやすくしてください。

---

## 10. Mobile

Mobile Firstで実装します。

固定CTAは1つだけです。

```text
MAP・行き方を見る
```

Instagramをsticky CTAにはしません。

必須:

- 横スクロールなし
- 固定CTAで本文を隠さない
- 十分なタップ領域
- Heroの早い段階で店名・業態・H1・Primary CTAが見える

---

## 11. Codex開始前チェック

以下が揃ったら実装開始できます。

### 必須

- [ ] LP要件定義書
- [ ] `content.md`
- [ ] `asset-manifest.md`
- [ ] `codex-implementation-brief.md`
- [ ] `hero-drip.jpg`
- [ ] 外観写真
- [ ] 店内写真
- [ ] コーヒー写真
- [ ] Food写真
- [ ] Instagram URL
- [ ] Google Maps URL

### 推奨

- [ ] Desktop完成イメージ
- [ ] Mobile完成イメージ
- [ ] Yorimichi写真
- [ ] 利用可能ならJimnyミニカー写真

使用禁止素材はリポジトリへ入れないでください。

---

## 12. Codexへの開始指示

Codexへは以下の指示から開始してください。

```text
このリポジトリにあるJimny megane coffeeの1ページLPを実装してください。

最初に以下をこの順番で確認してください。

1. docs/Jimny_megane_coffee_LP要件定義書_v1.1_20260826.docx
2. docs/content.md
3. docs/asset-manifest.md
4. docs/design-reference/lp-reference-desktop.png
5. docs/design-reference/lp-reference-mobile.png
6. docs/codex-implementation-brief.md
7. README.md

LP要件定義書を最上位仕様としてください。

要件定義にない商品、価格、営業時間、Story、機能を推測で追加しないでください。
asset-manifestで利用可能と確認された画像だけを使用してください。
Google Maps写真、第三者素材、ARAS画像、SUZUKI/Jimny公式素材は使用しないでください。

まずリポジトリ内の資料と素材を確認し、実装計画を短く提示してください。
その後、Next.js / React / TypeScriptでMobile Firstの1ページLPを実装してください。

最後に要件定義書のDefinition of Doneに沿って自己チェックしてください。
```

---

## 13. サンプル完成後

サンプル完成時:

```bash
git tag sample-v1
```

店舗に提示します。

店舗から正式制作の承認を得たら:

```bash
git tag sample-approved
```

その後、同じ `main` 上で正式情報・正式素材に更新します。

---

## 14. 正式公開前

正式公開前に必ず以下を確認します。

- 店舗名
- 住所
- 営業時間
- 定休日
- メニュー
- 価格
- CTA
- Instagram URL
- Google Maps URL
- 写真掲載権限
- Jimny関連表現
- SEO title / description
- LocalBusiness構造化データ
- `isSample: false`
- 「営業提案用サンプル」の削除
- noindex解除
- CTAリンク切れ
- Mobile / Desktop表示
- console error

---

## 15. Git運用

この案件では複雑なbranch運用は不要です。

基本:

```text
main
```

のみで進めます。

サンプル完成・承認時点をGit tagで残します。

```text
sample-v1
sample-approved
```

サンプルから正式サイトまで同じコードを継続利用します。
