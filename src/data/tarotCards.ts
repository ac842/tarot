// src/data/tarotCards.ts

// 使用 require.context 批量導入圖片
const importAll = (r: any) => {
  let images: string[] = [];
  r.keys().forEach((key: string) => images.push(r(key).default));
  return images;
};

// 導入所有 0.png 到 76.png 的圖片
const tarotImages = importAll(require.context('./images', false, /\.png$/));

// 定義塔羅牌資料接口
export interface TarotCard {
  name: string;
  image: string; // 圖片的相對路徑
  uprightMeaning: string;
  reversedMeaning: string;
  isReversed: boolean; // 新增屬性
}

// 初始化22張大牌數據
export const tarotCards: TarotCard[] = [

  {
    name: "愚者",
    image: tarotImages[00],
    uprightMeaning: "新的開始，天真無畏。",
    reversedMeaning: "愚蠢的決定，缺乏方向。",
    isReversed: false,
  },
  {
    name: "魔術師",
    image: tarotImages[01],
    uprightMeaning: "創造力，資源豐富。",
    reversedMeaning: "操控，誤導。",
    isReversed: false,
  },
  {
    name: "女祭司",
    image: tarotImages[02],
    uprightMeaning: "直覺，神秘。",
    reversedMeaning: "秘密揭露，缺乏理解。",
    isReversed: false,
  },
  {
    name: "女皇",
    image: tarotImages[03],
    uprightMeaning: "豐饒，母性。",
    reversedMeaning: "依賴，阻塞。",
    isReversed: false,
  },
  {
    name: "皇帝",
    image: tarotImages[04],
    uprightMeaning: "權威，結構。",
    reversedMeaning: "專制，控制問題。",
    isReversed: false,
  },
  {
    name: "教皇",
    image: tarotImages[05],
    uprightMeaning: "傳統，宗教。",
    reversedMeaning: "反叛，個人信仰。",
    isReversed: false,
  },
  {
    name: "戀人",
    image: tarotImages[06],
    uprightMeaning: "和諧，愛。",
    reversedMeaning: "不和，分歧。",
    isReversed: false,
  },
  {
    name: "戰車",
    image: tarotImages[07],
    uprightMeaning: "意志力，勝利。",
    reversedMeaning: "失控，挫敗。",
    isReversed: false,
  },
  {
    name: "力量",
    image: tarotImages[08],
    uprightMeaning: "勇氣，耐心。",
    reversedMeaning: "懦弱，缺乏信心。",
    isReversed: false,
  },
  {
    name: "隱士",
    image: tarotImages[09],
    uprightMeaning: "內省，孤獨。",
    reversedMeaning: "孤立，退縮。",
    isReversed: false,
  },
  {
    name: "命運之輪",
    image: tarotImages[10],
    uprightMeaning: "命運，變化。",
    reversedMeaning: "不順，延遲。",
    isReversed: false,
  },
  {
    name: "正義",
    image: tarotImages[11],
    uprightMeaning: "公平，真相。",
    reversedMeaning: "不公，偏見。",
    isReversed: false,
  },
  {
    name: "懸吊者",
    image: tarotImages[12],
    uprightMeaning: "犧牲，等待。",
    reversedMeaning: "固執，拖延。",
    isReversed: false,
  },
  {
    name: "死亡",
    image: tarotImages[13],
    uprightMeaning: "轉變，結束。",
    reversedMeaning: "抗拒改變，停滯。",
    isReversed: false,
  },
  {
    name: "節制",
    image: tarotImages[14],
    uprightMeaning: "平衡，節制。",
    reversedMeaning: "極端，失衡。",
    isReversed: false,
  },
  {
    name: "惡魔",
    image: tarotImages[15],
    uprightMeaning: "束縛，誘惑。",
    reversedMeaning: "解放，恢復控制。",
    isReversed: false,
  },
  {
    name: "塔",
    image: tarotImages[16],
    uprightMeaning: "突然改變，混亂。",
    reversedMeaning: "災難避免，恐懼。",
    isReversed: false,
  },
  {
    name: "星星",
    image: tarotImages[17],
    uprightMeaning: "希望，靈感。",
    reversedMeaning: "失望，缺乏信心。",
    isReversed: false,
  },
  {
    name: "月亮",
    image: tarotImages[18],
    uprightMeaning: "幻覺，潛意識。",
    reversedMeaning: "混亂，誤解。",
    isReversed: false,
  },
  {
    name: "太陽",
    image: tarotImages[19],
    uprightMeaning: "快樂，成功。",
    reversedMeaning: "悲觀，失敗。",
    isReversed: false,
  },
  {
    name: "審判",
    image: tarotImages[20],
    uprightMeaning: "覺醒，評估。",
    reversedMeaning: "遲疑，內疚。",
    isReversed: false,
  },
  {
    name: "世界",
    image: tarotImages[21],
    uprightMeaning: "完成，成就。",
    reversedMeaning: "未完成，阻礙。",
    isReversed: false,
  },
  {
    name: "權杖王牌",
    image: tarotImages[22],
    uprightMeaning: "靈感，潛力。",
    reversedMeaning: "延遲，缺乏動力。",
    isReversed: false,
  },
  {
    name: "權杖二",
    image: tarotImages[23],
    uprightMeaning: "計劃，決策。",
    reversedMeaning: "不確定，遲疑。",
    isReversed: false,
  },
  {
    name: "權杖三",
    image: tarotImages[24],
    uprightMeaning: "擴展，展望。",
    reversedMeaning: "延遲，挫折。",
    isReversed: false,
  },
  {
    name: "權杖四",
    image: tarotImages[25],
    uprightMeaning: "慶祝，穩定。",
    reversedMeaning: "不和，分裂。",
    isReversed: false,
  },
  {
    name: "權杖五",
    image: tarotImages[26],
    uprightMeaning: "競爭，衝突。",
    reversedMeaning: "解決，避免衝突。",
    isReversed: false,
  },
  {
    name: "權杖六",
    image: tarotImages[27],
    uprightMeaning: "勝利，成就。",
    reversedMeaning: "自負，失敗。",
    isReversed: false,
  },
  {
    name: "權杖七",
    image: tarotImages[28],
    uprightMeaning: "防禦，勇敢。",
    reversedMeaning: "放棄，屈服。",
    isReversed: false,
  },
  {
    name: "權杖八",
    image: tarotImages[29],
    uprightMeaning: "快速行動，進展。",
    reversedMeaning: "阻礙，延遲。",
    isReversed: false,
  },
  {
    name: "權杖九",
    image: tarotImages[30],
    uprightMeaning: "堅韌，毅力。",
    reversedMeaning: "疲憊，壓力。",
    isReversed: false,
  },
  {
    name: "權杖十",
    image: tarotImages[31],
    uprightMeaning: "負擔，責任。",
    reversedMeaning: "釋放，放下重擔。",
    isReversed: false,
  },
  {
    name: "權杖侍者",
    image: tarotImages[32],
    uprightMeaning: "探索，冒險。",
    reversedMeaning: "不成熟，輕率。",
    isReversed: false,
  },
  {
    name: "權杖騎士",
    image: tarotImages[33],
    uprightMeaning: "行動，熱情。",
    reversedMeaning: "衝動，娛樂。",
    isReversed: false,
  },
  {
    name: "權杖皇后",
    image: tarotImages[34],
    uprightMeaning: "自信，魅力。",
    reversedMeaning: "嫉妒，不安。",
    isReversed: false,
  },
  {
    name: "權杖國王",
    image: tarotImages[35],
    uprightMeaning: "領導，願景。",
    reversedMeaning: "專橫，粗暴。",
    isReversed: false,
  },
  {
    name: "聖杯王牌",
    image: tarotImages[36],
    uprightMeaning: "愛，靈感。",
    reversedMeaning: "壓抑，情感衝突。",
    isReversed: false,
  },
  {
    name: "聖杯二",
    image: tarotImages[37],
    uprightMeaning: "聯合，夥伴關係。",
    reversedMeaning: "不和，分裂。",
    isReversed: false,
  },
  {
    name: "聖杯三",
    image: tarotImages[38],
    uprightMeaning: "慶祝，友誼。",
    reversedMeaning: "背叛，孤立。",
    isReversed: false,
  },
  {
    name: "聖杯四",
    image: tarotImages[39],
    uprightMeaning: "沉思，冷漠。",
    reversedMeaning: "覺醒，興趣。",
    isReversed: false,
  },
  {
    name: "聖杯五",
    image: tarotImages[40],
    uprightMeaning: "悲傷，失落。",
    reversedMeaning: "釋懷，接受。",
    isReversed: false,
  },
  {
    name: "聖杯六",
    image: tarotImages[41],
    uprightMeaning: "懷舊，童年。",
    reversedMeaning: "放下過去，成熟。",
    isReversed: false,
  },
  {
    name: "聖杯七",
    image: tarotImages[42],
    uprightMeaning: "幻想，選擇。",
    reversedMeaning: "混亂，逃避現實。",
    isReversed: false,
  },
  {
    name: "聖杯八",
    image: tarotImages[43],
    uprightMeaning: "放棄，尋求。",
    reversedMeaning: "逃避，無法離開。",
    isReversed: false,
  },
  {
    name: "聖杯九",
    image: tarotImages[44],
    uprightMeaning: "滿足，願望實現。",
    reversedMeaning: "不滿，過度沉迷。",
    isReversed: false,
  },
  {
    name: "聖杯十",
    image: tarotImages[45],
    uprightMeaning: "幸福，和諧。",
    reversedMeaning: "不和，爭執。",
    isReversed: false,
  },
  {
    name: "聖杯侍者",
    image: tarotImages[46],
    uprightMeaning: "創意，直覺。",
    reversedMeaning: "幼稚，情緒化。",
    isReversed: false,
  },
  {
    name: "聖杯騎士",
    image: tarotImages[47],
    uprightMeaning: "浪漫，追求。",
    reversedMeaning: "不切實際，過於理想化。",
    isReversed: false,
  },
  {
    name: "聖杯皇后",
    image: tarotImages[48],
    uprightMeaning: "愛，關懷。",
    reversedMeaning: "情緒化，不穩定。",
    isReversed: false,
  },
  {
    name: "聖杯國王",
    image: tarotImages[49],
    uprightMeaning: "智慧，理解。",
    reversedMeaning: "操控，冷漠。",
    isReversed: false,
  },
  {
    name: "寶劍王牌",
    image: tarotImages[50],
    uprightMeaning: "清晰，真相。",
    reversedMeaning: "混亂，誤導。",
    isReversed: false,
  },
  {
    name: "寶劍二",
    image: tarotImages[51],
    uprightMeaning: "決策，平衡。",
    reversedMeaning: "僵局，逃避。",
    isReversed: false,
  },
  {
    name: "寶劍三",
    image: tarotImages[52],
    uprightMeaning: "心痛，背叛。",
    reversedMeaning: "癒合，釋懷。",
    isReversed: false,
  },
  {
    name: "寶劍四",
    image: tarotImages[53],
    uprightMeaning: "休息，恢復。",
    reversedMeaning: "不安，壓力。",
    isReversed: false,
  },
  {
    name: "寶劍五",
    image: tarotImages[54],
    uprightMeaning: "衝突，敗北。",
    reversedMeaning: "和解，教訓。",
    isReversed: false,
  },
  {
    name: "寶劍六",
    image: tarotImages[55],
    uprightMeaning: "過渡，移動。",
    reversedMeaning: "停滯，困境。",
    isReversed: false,
  },
  {
    name: "寶劍七",
    image: tarotImages[56],
    uprightMeaning: "策略，隱瞞。",
    reversedMeaning: "揭露，誠實。",
    isReversed: false,
  },
  {
    name: "寶劍八",
    image: tarotImages[57],
    uprightMeaning: "限制，束縛。",
    reversedMeaning: "解放，自由。",
    isReversed: false,
  },
  {
    name: "寶劍九",
    image: tarotImages[58],
    uprightMeaning: "焦慮，絕望。",
    reversedMeaning: "安慰，療愈。",
    isReversed: false,
  },
  {
    name: "寶劍十",
    image: tarotImages[59],
    uprightMeaning: "結束，背叛。",
    reversedMeaning: "恢復，重生。",
    isReversed: false,
  },
  {
    name: "寶劍侍者",
    image: tarotImages[60],
    uprightMeaning: "好奇，觀察。",
    reversedMeaning: "謠言，誤導。",
    isReversed: false,
  },
  {
    name: "寶劍騎士",
    image: tarotImages[61],
    uprightMeaning: "果斷，行動。",
    reversedMeaning: "衝動，魯莽。",
    isReversed: false,
  },
  {
    name: "寶劍皇后",
    image: tarotImages[62],
    uprightMeaning: "獨立，智慧。",
    reversedMeaning: "冷漠，苛刻。",
    isReversed: false,
  },
  {
    name: "寶劍國王",
    image: tarotImages[63],
    uprightMeaning: "理智，權威。",
    reversedMeaning: "專橫，操控。",
    isReversed: false,
  },
  {
    name: "錢幣王牌",
    image: tarotImages[64],
    uprightMeaning: "繁榮，機會。",
    reversedMeaning: "損失，延遲。",
    isReversed: false,
  },
  {
    name: "錢幣二",
    image: tarotImages[65],
    uprightMeaning: "平衡，適應。",
    reversedMeaning: "失衡，混亂。",
    isReversed: false,
  },
  {
    name: "錢幣三",
    image: tarotImages[66],
    uprightMeaning: "合作，技能。",
    reversedMeaning: "缺乏團隊合作，怠惰。",
    isReversed: false,
  },
  {
    name: "錢幣四",
    image: tarotImages[67],
    uprightMeaning: "控制，節儉。",
    reversedMeaning: "慷慨，放手。",
    isReversed: false,
  },
  {
    name: "錢幣五",
    image: tarotImages[68],
    uprightMeaning: "困境，貧困。",
    reversedMeaning: "好轉，恢復。",
    isReversed: false,
  },
  {
    name: "錢幣六",
    image: tarotImages[69],
    uprightMeaning: "施予，分享。",
    reversedMeaning: "自私，剝削。",
    isReversed: false,
  },
  {
    name: "錢幣七",
    image: tarotImages[70],
    uprightMeaning: "耐心，評估。",
    reversedMeaning: "焦慮，浪費。",
    isReversed: false,
  },
  {
    name: "錢幣八",
    image: tarotImages[71],
    uprightMeaning: "努力，專注。",
    reversedMeaning: "缺乏熱情，懈怠。",
    isReversed: false,
  },
  {
    name: "錢幣九",
    image: tarotImages[72],
    uprightMeaning: "獨立，安全。",
    reversedMeaning: "不安全，依賴。",
    isReversed: false,
  },
  {
    name: "錢幣十",
    image: tarotImages[73],
    uprightMeaning: "財富，傳承。",
    reversedMeaning: "爭吵，損失。",
    isReversed: false,
  },
  {
    name: "錢幣侍者",
    image: tarotImages[74],
    uprightMeaning: "機會，學習。",
    reversedMeaning: "疏忽，浪費。",
    isReversed: false,
  },
  {
    name: "錢幣騎士",
    image: tarotImages[75],
    uprightMeaning: "勤奮，實在。",
    reversedMeaning: "頑固，拖延。",
    isReversed: false,
  },
  {
    name: "錢幣皇后",
    image: tarotImages[76],
    uprightMeaning: "豐饒，實際。",
    reversedMeaning: "不安，過度保護。",
    isReversed: false,
  },
  {
    name: "錢幣國王",
    image: tarotImages[77],
    uprightMeaning: "穩定，繁榮。",
    reversedMeaning: "固執，保守。",
    isReversed: false,
  }
];