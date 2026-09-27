import { assetPath } from "@/lib/asset-path";

export const site = {
  sampleMode: true,
  name: "SAMPLE COFFEE STAND",
  businessType: "COFFEE STAND & BAR",
  links: {
    menu: "#menu",
    gallery: "#gallery",
    top: "#top",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Yorimichi", href: "#yorimichi" },
    { label: "Gallery", href: "#gallery" },
    { label: "Access", href: "#access" },
  ],
  hero: {
    label: "一杯ずつ、丁寧に。",
    eyebrow: "COFFEE STAND & BAR ・ DESIGN SAMPLE",
    heading: "街角で、コーヒーと、よりみちを。",
    headingParts: {
      place: "街角で、",
      coffee: "コーヒーと、",
      detour: "よりみちを。",
    },
    body: "ハンドドリップで淹れるコーヒー。軽食やお酒も楽しめる、小さな COFFEE STAND & BAR。",
    image: assetPath("/images/hero/hero-drip-new.png"),
    imageAlt: "ハンドドリップコーヒーを淹れている様子",
    illustration: assetPath("/images/hero/sample-coffee-illustration.png"),
  },
  about: {
    heading: "街角にある、小さな COFFEE STAND & BAR。",
    headingParts: ["街角にある、小さな", "COFFEE STAND", "& BAR。"],
    mobileHeadingParts: ["街角にある、", "小さな coffee stand & bar。"],
    body: "朝の一杯も、昼のひと息も、お酒を片手に過ごす時間も。コーヒーや軽食を楽しむ、街角の“よりみち”をイメージしたデザインサンプルです。",
    images: [
      {
        src: assetPath("/images/hero/hero-drip-new.svg"),
        alt: "ハンドドリップコーヒーを淹れている様子",
      },
      {
        src: assetPath("/placeholders/interior.svg"),
        alt: "コーヒースタンド店内の写真プレースホルダー",
      },
    ],
    highlights: ["ハンドドリップコーヒー", "Coffee / Food / Bar", "街角の“よりみち”"],
  },
  menu: [
    {
      category: "Coffee",
      item: "ハンドドリップコーヒー",
      image: assetPath("/placeholders/coffee.svg"),
      alt: "ハンドドリップコーヒーの写真プレースホルダー",
    },
    {
      category: "Food",
      item: "軽食メニュー",
      image: assetPath("/placeholders/food.svg"),
      alt: "軽食メニューの写真プレースホルダー",
    },
    {
      category: "Bar",
      item: "アルコールドリンク",
      image: assetPath("/placeholders/interior.svg"),
      alt: "バータイムの写真プレースホルダー",
    },
  ],
  yorimichi: {
    heading: "朝も、昼も。よりみちのきっかけを。",
    headingParts: ["朝も、昼も。", "よりみちの", "きっかけを。"],
    mobileHeadingParts: ["朝も、昼も。", "よりみちのきっかけを。"],
    label: "過ごし方の例",
    examples: ["朝の一杯", "昼のひと休み", "夜のよりみち"],
    note: "掲載内容は架空の制作デザインサンプルです。",
  },
  gallery: [
    {
      src: assetPath("/images/hero/hero-drip-new.svg"),
      alt: "ハンドドリップコーヒーを淹れている様子",
      label: "Hand Drip",
    },
    {
      src: assetPath("/placeholders/interior.svg"),
      alt: "店内の写真プレースホルダー",
      label: "Interior",
    },
    {
      src: assetPath("/placeholders/coffee.svg"),
      alt: "コーヒーの写真プレースホルダー",
      label: "Coffee",
    },
    {
      src: assetPath("/placeholders/food.svg"),
      alt: "軽食の写真プレースホルダー",
      label: "Food",
    },
  ],
  sampleDescription:
    "店舗名・住所・地図などの情報は、制作デザインサンプルのため掲載していません。",
  finalCta: {
    heading: "今日のよりみちに、コーヒーを。",
    headingParts: ["今日のよりみちに、", "コーヒーを。"],
  },
  sampleNote: "実在の店舗・ブランドとは関係のない架空の制作デザインサンプルです。",
} as const;

export const ctaLabels = {
  menu: "メニューを見る",
  gallery: "ギャラリーを見る",
  mobileMenu: "メニューを見る",
  pageTop: "ページ上部へ戻る",
} as const;
