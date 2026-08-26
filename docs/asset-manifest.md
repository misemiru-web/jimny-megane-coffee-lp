# Asset Manifest

LPで使用する画像の管理表です。

## ルール

- `Status: APPROVED` になった画像のみ `public/images/` に配置する
- Google Maps写真・スクリーンショットは使用しない
- ARAS画像・第三者SNS画像は使用しない
- 公式Instagram内でも転載物・第三者撮影物を自動的に利用可と判断しない
- Jimny画像が未準備の場合、AI生成・Google Maps・第三者画像で代替しない
- サンプルで利用許可があることと、正式サイト掲載許可は別途確認する

---

## hero-drip.jpg

- Role: Hero main
- Required: YES
- Preferred source: Jimny megane coffee 公式Instagramの原画像 / 店舗提供画像
- Status: PENDING
- Sample usage permission: 公式Instagram写真について許可あり
- Additional check: この画像自体が店舗側でWeb利用可能な素材か確認
- Notes: Hero主画像。ドリップ写真を使用する

## exterior-main.jpg

- Role: About / Gallery
- Required: YES
- Preferred source: 公式Instagram原画像 / 店舗提供画像
- Status: PENDING
- Notes: Google Maps由来写真は禁止

## interior-counter.jpg

- Role: About / Gallery
- Required: YES
- Preferred source: 公式Instagram原画像 / 店舗提供画像
- Status: PENDING
- Notes: 木のカウンター・店内の温かさが分かる写真を優先

## coffee-01.jpg

- Role: Drink & Food / Gallery
- Required: YES
- Preferred source: 公式Instagram原画像 / 店舗提供画像
- Status: PENDING

## food-01.jpg

- Role: Drink & Food / Gallery
- Required: YES
- Preferred source: 公式Instagram原画像 / 店舗提供画像
- Status: PENDING
- Notes: 現在提供中かは正式制作時に確認。サンプルでは商品名・価格を推測しない

## yorimichi-morning.jpg

- Role: Yorimichi
- Required: OPTIONAL
- Preferred source: 公式Instagram原画像
- Status: PENDING
- Notes: 朝のよりみち等。人物が写る場合は利用可否を確認

## yorimichi-daytime.jpg

- Role: Yorimichi
- Required: OPTIONAL
- Preferred source: 公式Instagram原画像
- Status: PENDING

## coffee-blues.jpg

- Role: Yorimichi
- Required: OPTIONAL
- Preferred source: 公式Instagram原画像
- Status: PENDING
- Notes: 出演者・撮影者等の権利確認が必要な場合は使用しない

## jimny-miniature.jpg

- Role: Hero sub OR Gallery
- Required: NO
- Preferred source: 公式Instagram由来の原画像
- Status: PENDING
- Usage condition: 出典とWeb利用可否を確実に確認できた場合のみ
- Fallback: なし。未準備なら省略
- Prohibited fallback:
  - Google Maps写真
  - SUZUKI公式画像
  - 第三者SNS画像
  - AI生成Jimny

---

# Design Reference Assets

完成イメージはWeb掲載素材ではなく、Codexの実装参考です。

## lp-reference-desktop.png

- Role: Design reference only
- Web display: NO
- Public folder: NO
- Location: `docs/design-reference/`
- Status: PENDING

## lp-reference-mobile.png

- Role: Design reference only
- Web display: NO
- Public folder: NO
- Location: `docs/design-reference/`
- Status: PENDING

## Design Reference Priority

完成イメージ画像に、要件定義にない商品・文字・価格・機能が描かれていても実装しません。

優先順位:

1. LP要件定義書
2. content.md
3. asset-manifest.md
4. 完成イメージ画像
