export const site = {
  sampleMode: true,
  name: "Jimny megane coffee",
  businessType: "coffee stand and bar",
  address: "静岡県静岡市駿河区用宗5-1-3",
  instagramHandle: "@jimny_meganecoffee",
  urls: {
    instagram: "https://www.instagram.com/jimny_meganecoffee/",
    googleMaps:
      "https://www.google.com/maps/place/Jimny+megane+coffee+%E3%82%B8%E3%83%A0%E3%83%8B%E3%83%BC%E3%83%A1%E3%82%AC%E3%83%8D%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC/@34.9220057,138.3604236,17z/data=!3m1!4b1!4m6!3m5!1s0x601a496991fe1693:0x31f4fbc997f79dd9!8m2!3d34.9220057!4d138.3604236!16s%2Fg%2F11xdxdpb27!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.379820963437!2d138.35784867590206!3d34.92201007130593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a496991fe1693%3A0x31f4fbc997f79dd9!2zSmltbnkgbWVnYW5lIGNvZmZlZSDjgrjjg6Djg4vjg7zjg6Hjgqzjg43jgrPjg7zjg5Ljg7w!5e0!3m2!1sja!2sjp!4v1787787563914!5m2!1sja!2sjp",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Yorimichi", href: "#yorimichi" },
    { label: "Gallery", href: "#gallery" },
    { label: "Access", href: "#access" },
  ],
  hero: {
    eyebrow: "MOCHIMUNE / SHIZUOKA ・ COFFEE STAND & BAR",
    heading: "用宗で、コーヒーと、よりみちを。",
    headingParts: {
      place: "用宗で、",
      coffee: "コーヒーと、",
      detour: "よりみちを。",
    },
    body: "南部鉄器で淹れるドリップ珈琲。食事やお酒も楽しめる、用宗の小さな coffee stand & bar。",
    image: "/placeholders/hero-drip.svg",
    imageAlt: "南部鉄器で淹れるドリップ珈琲の写真差し替え予定領域",
  },
  about: {
    heading: "用宗にある、小さな coffee stand & bar。",
    headingParts: ["用宗にある、小さな", "coffee stand", "& bar。"],
    mobileHeadingParts: ["用宗にある、", "小さな coffee stand & bar。"],
    body: "朝の一杯も、昼のひと息も、お酒を片手に過ごす時間も。コーヒーや食事、用宗での“よりみち”を一つの場所で感じられる店舗として紹介します。",
    images: [
      {
        src: "/placeholders/exterior.svg",
        alt: "Jimny megane coffeeの外観写真差し替え予定領域",
      },
      {
        src: "/placeholders/interior.svg",
        alt: "Jimny megane coffeeの店内写真差し替え予定領域",
      },
    ],
    highlights: [
      "南部鉄器で淹れるドリップ珈琲",
      "Coffee / Food / Bar",
      "用宗の“よりみち”",
    ],
  },
  menu: [
    {
      category: "Coffee",
      item: "南部鉄器で淹れるドリップ珈琲",
      image: "/placeholders/coffee.svg",
      alt: "ドリップ珈琲の写真差し替え予定領域",
    },
    {
      category: "Food",
      item: "おむすび等",
      image: "/placeholders/food.svg",
      alt: "Foodの写真差し替え予定領域",
    },
    {
      category: "Bar",
      item: "ビール",
      image: "/placeholders/interior.svg",
      alt: "Barの雰囲気が伝わる写真差し替え予定領域",
    },
  ],
  yorimichi: {
    heading: "用宗の朝も、昼も。よりみちのきっかけを。",
    headingParts: ["用宗の朝も、昼も。", "よりみちの", "きっかけを。"],
    mobileHeadingParts: ["用宗の朝も、昼も。", "よりみちのきっかけを。"],
    label: "過去の企画例",
    examples: ["朝のよりみち in 用宗", "昼のよりみち", "Coffee Blues"],
    note: "開催内容は時期により変わります。最新情報はInstagramをご確認ください。",
  },
  gallery: [
    {
      src: "/placeholders/exterior.svg",
      alt: "店舗外観の写真差し替え予定領域",
      label: "Exterior",
    },
    {
      src: "/placeholders/interior.svg",
      alt: "店内の写真差し替え予定領域",
      label: "Interior",
    },
    {
      src: "/placeholders/coffee.svg",
      alt: "コーヒーの写真差し替え予定領域",
      label: "Coffee",
    },
    {
      src: "/placeholders/food.svg",
      alt: "Foodの写真差し替え予定領域",
      label: "Food",
    },
  ],
  latestInfoNote: "最新の営業日時はInstagramでご確認ください。",
  finalCta: {
    heading: "今日のよりみちを、用宗で。",
    headingParts: ["今日のよりみちを、", "用宗で。"],
  },
  sampleNote: "掲載内容は正式制作時に店舗確認のうえ更新します。",
} as const;

export const ctaLabels = {
  map: "Googleマップで行き方を見る",
  instagram: "Instagramで最新情報を見る",
  instagramBusiness: "Instagramで最新営業を見る",
  instagramPosts: "Instagramで最新の投稿を見る",
  mobileMap: "MAP・行き方を見る",
} as const;
