// src/data/tarotCards.ts

// 使用 require.context 批量導入圖片
const importAll = (r: any) => {
  let images: string[] = [];
  r.keys().forEach((key: string) => images.push(r(key).default));
  return images;
};

// 導入所有 0.jpg 到 76.jpg 的圖片
const tarotImages = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export interface TarotCard {
  name: string;
  image: string; // 圖片的相對路徑
  uprightMeaning: string;
  reversedMeaning: string;
}

// 初始化塔羅牌數據
export const tarotCards: TarotCard[] = [];
tarotCards.push(
    {
      name: "The Fool",
      image: tarotImages[0],
      uprightMeaning: "New beginnings, optimism, trust in life",
      reversedMeaning: "Recklessness, taken advantage of, inconsideration",
    },
    {
      name: "The Magician",
      image: tarotImages[1],
      uprightMeaning: "Action, the power to manifest",
      reversedMeaning: "Trickery, illusions, out of touch",
    },
    {
      name: "The High Priestess",
      image: tarotImages[2],
      uprightMeaning: "Intuition, unconscious knowledge",
      reversedMeaning: "Hidden agendas, need to listen to inner voice",
    },
    {
      name: "The Empress",
      image: tarotImages[3],
      uprightMeaning: "Abundance, nurturing, fertility, life in bloom!",
      reversedMeaning: "Smothering, excess, selfishness",
    },
    {
      name: "The Emperor",
      image: tarotImages[4],
      uprightMeaning: "Authority, structure, control, fatherhood",
      reversedMeaning: "Tyranny, rigidity, coldness",
    },
    {
      name: "The Hierophant",
      image: tarotImages[5],
      uprightMeaning: "Tradition, conformity, morality, ethics",
      reversedMeaning: "Rebellion, subversiveness, new approaches",
    },
    {
      name: "The Lovers",
      image: tarotImages[6],
      uprightMeaning: "Partnerships, duality, union",
      reversedMeaning: "Loss of balance, one-sidedness, disharmony",
    },
    {
      name: "The Chariot",
      image: tarotImages[7],
      uprightMeaning: "Direction, control, willpower",
      reversedMeaning: "Lack of control, opposition, aggression",
    },
    {
      name: "Strength",
      image: tarotImages[8],
      uprightMeaning: "Courage, subtle power, integration of animal self",
      reversedMeaning: "Weakness, self-doubt, lack of self-discipline",
    },
    {
      name: "The Hermit",
      image: tarotImages[9],
      uprightMeaning: "Meditation, solitude, consciousness",
      reversedMeaning: "Isolation, loneliness, withdrawal",
    },
    {
      name: "Wheel of Fortune",
      image: tarotImages[10],
      uprightMeaning: "Change, cycles, inevitable fate",
      reversedMeaning: "No control, clinging to control, bad luck",
    },
    {
      name: "Justice",
      image: tarotImages[11],
      uprightMeaning: "Justice, truth, cause and effect, law",
      reversedMeaning: "Unfairness, lack of accountability, dishonesty",
    },
    {
      name: "The Hanged Man",
      image: tarotImages[12],
      uprightMeaning: "Sacrifice, release, martyrdom",
      reversedMeaning: "Stalling, needless sacrifice, fear of sacrifice",
    },
    {
      name: "Death",
      image: tarotImages[13],
      uprightMeaning: "End of cycle, beginnings, change, metamorphosis",
      reversedMeaning: "Fear of change, holding on, stagnation, decay",
    },
    {
      name: "Temperance",
      image: tarotImages[14],
      uprightMeaning: "Middle path, patience, finding meaning",
      reversedMeaning: "Extremes, excess, lack of balance",
    },
    {
      name: "The Devil",
      image: tarotImages[15],
      uprightMeaning: "Addiction, materialism, playfulness",
      reversedMeaning: "Freedom, release, restoring control",
    },
    {
      name: "The Tower",
      image: tarotImages[16],
      uprightMeaning: "Sudden upheaval, broken pride, disaster",
      reversedMeaning: "Disaster avoided, delayed disaster, fear of suffering",
    },
    {
      name: "The Star",
      image: tarotImages[17],
      uprightMeaning: "Hope, faith, rejuvenation",
      reversedMeaning: "Insecurity, discouragement, faithlessness",
    },
    {
      name: "The Moon",
      image: tarotImages[18],
      uprightMeaning: "Unconscious, illusions, intuition",
      reversedMeaning: "Confusion, fear, misinterpretation",
    },
    {
      name: "The Sun",
      image: tarotImages[19],
      uprightMeaning: "Joy, success, celebration, positivity",
      reversedMeaning: "Negativity, depression, sadness",
    },
    {
      name: "Judgement",
      image: tarotImages[20],
      uprightMeaning: "Reflection, reckoning, awakening",
      reversedMeaning: "Lack of self-awareness, doubt, self-loathing",
    },
    {
      name: "The World",
      image: tarotImages[21],
      uprightMeaning: "Completion, accomplishment, travel",
      reversedMeaning: "Lack of closure, incomplete goals",
    },
    {
      name: "Ace of Wands",
      image: tarotImages[22],
      uprightMeaning: "Inspiration, power, creation, beginnings, potential",
      reversedMeaning: "Delays, lack of motivation, weighed down",
    },
    {
      name: "Two of Wands",
      image: tarotImages[23],
      uprightMeaning: "Future planning, progress, decisions, discovery",
      reversedMeaning: "Fear of unknown, lack of planning",
    },
    {
      name: "Three of Wands",
      image: tarotImages[24],
      uprightMeaning: "Expansion, foresight, overseas opportunities",
      reversedMeaning: "Playing small, lack of foresight",
    },
    {
      name: "Four of Wands",
      image: tarotImages[25],
      uprightMeaning: "Celebration, harmony, marriage, home, community",
      reversedMeaning: "Breakdown in communication, transition",
    },
    {
      name: "Five of Wands",
      image: tarotImages[26],
      uprightMeaning: "Disagreement, competition, strife, tension, conflict",
      reversedMeaning: "Conflict avoidance, diversity, agreeing to disagree",
    },
    {
      name: "Six of Wands",
      image: tarotImages[27],
      uprightMeaning: "Success, public recognition, progress, self-confidence",
      reversedMeaning: "Egotism, disrepute, lack of confidence, fall from grace",
    },
    {
      name: "Seven of Wands",
      image: tarotImages[28],
      uprightMeaning: "Challenge, competition, protection, perseverance",
      reversedMeaning: "Giving up, overwhelmed, overly protective",
    },
    {
      name: "Eight of Wands",
      image: tarotImages[29],
      uprightMeaning: "Movement, fast paced change, action, alignment, air travel",
      reversedMeaning: "Delays, frustration, resisting change, internal alignment",
    },
    {
      name: "Nine of Wands",
      image: tarotImages[30],
      uprightMeaning: "Resilience, courage, persistence, test of faith, boundaries",
      reversedMeaning: "Exhaustion, fatigue, questioning motivations, giving up",
    },
    {
      name: "Ten of Wands",
      image: tarotImages[31],
      uprightMeaning: "Burden, extra responsibility, hard work, completion",
      reversedMeaning: "Doing it all, carrying the burden, delegation, release",
    },
    {
      name: "Page of Wands",
      image: tarotImages[32],
      uprightMeaning: "Inspiration, ideas, discovery, limitless potential, free spirit",
      reversedMeaning: "Newly-formed ideas, redirecting energy, self-limiting beliefs, a spiritual path",
    },
    {
      name: "Knight of Wands",
      image: tarotImages[33],
      uprightMeaning: "Energy, passion, inspired action, adventure, impulsiveness",
      reversedMeaning: "Passion project, haste, scattered energy, delays, frustration",
    },
    {
      name: "Queen of Wands",
      image: tarotImages[34],
      uprightMeaning: "Courage, confidence, independence, social butterfly, determination",
      reversedMeaning: "Self-respect, introverted, re-establish sense of self, self-confidence",
    },
    {
      name: "King of Wands",
      image: tarotImages[35],
      uprightMeaning: "Natural-born leader, vision, entrepreneur, honor",
      reversedMeaning: "Impulsiveness, haste, ruthless, high expectations",
    },
    {
      name: "Ace of Cups",
      image: tarotImages[36],
      uprightMeaning: "Love, new relationships, compassion, creativity",
      reversedMeaning: "Self-love, intuition, repressed emotions",
    },
    {
      name: "Two of Cups",
      image: tarotImages[37],
      uprightMeaning: "Unified love, partnership, mutual attraction",
      reversedMeaning: "Self-love, break-ups, disharmony, distrust",
    },
    {
      name: "Three of Cups",
      image: tarotImages[38],
      uprightMeaning: "Celebration, friendship, creativity, collaborations",
      reversedMeaning: "Independence, alone time, hardcore partying, 'three's a crowd'",
    },
    {
      name: "Four of Cups",
      image: tarotImages[39],
      uprightMeaning: "Meditation, contemplation, apathy, reevaluation",
      reversedMeaning: "Retreat, withdrawal, checking in for alignment",
    },
    {
      name: "Five of Cups",
      image: tarotImages[40],
      uprightMeaning: "Regret, failure, disappointment, pessimism",
      reversedMeaning: "Personal setbacks, self-forgiveness, moving on",
    },
    {
      name: "Six of Cups",
      image: tarotImages[41],
      uprightMeaning: "Revisiting the past, childhood memories, innocence, joy",
      reversedMeaning: "Living in the past, forgiveness, lacking playfulness",
    },
    {
      name: "Seven of Cups",
      image: tarotImages[42],
      uprightMeaning: "Opportunities, choices, wishful thinking, illusion",
      reversedMeaning: "Alignment, personal values, overwhelmed by choices",
    },
    {
      name: "Eight of Cups",
      image: tarotImages[43],
      uprightMeaning: "Disappointment, abandonment, withdrawal, escapism",
      reversedMeaning: "Trying one more time, indecision, aimless drifting",
    },
    {
      name: "Nine of Cups",
      image: tarotImages[44],
      uprightMeaning: "Contentment, satisfaction, gratitude, wish come true",
      reversedMeaning: "Inner happiness, materialism, dissatisfaction",
    },
    {
      name: "Ten of Cups",
      image: tarotImages[45],
      uprightMeaning: "Divine love, blissful relationships, harmony, alignment",
      reversedMeaning: "Disconnection, misaligned values, struggling relationships",
    },
    {
      name: "Page of Cups",
      image: tarotImages[46],
      uprightMeaning: "Creative opportunities, intuitive messages, curiosity, possibility",
      reversedMeaning: "New ideas, doubting intuition, creative blocks, emotional immaturity",
    },
    {
      name: "Knight of Cups",
      image: tarotImages[47],
      uprightMeaning: "Creativity, romance, charm, imagination, beauty",
      reversedMeaning: "Overactive imagination, unrealistic, jealous, moody",
    },
    {
      name: "Queen of Cups",
      image: tarotImages[48],
      uprightMeaning: "Compassionate, caring, emotionally stable, intuitive, in flow",
      reversedMeaning: "Inner feelings, self-care, co-dependency",
    },
    {
      name: "King of Cups",
      image: tarotImages[49],
      uprightMeaning: "Emotionally balanced, compassionate, diplomatic",
      reversedMeaning: "Self-compassion, inner feelings, moodiness, emotionally manipulative",
    },
    {
      name: "Ace of Pentacles",
      image: tarotImages[50],
      uprightMeaning: "A new financial or career opportunity, manifestation, abundance",
      reversedMeaning: "Lost opportunity, lack of planning and foresight",
    },
    {
      name: "Two of Pentacles",
      image: tarotImages[51],
      uprightMeaning: "Multiple priorities, time management, prioritisation, adaptability",
      reversedMeaning: "Over-committed, disorganisation, reprioritisation",
    },
    {
      name: "Three of Pentacles",
      image: tarotImages[52],
      uprightMeaning: "Teamwork, collaboration, learning, implementation",
      reversedMeaning: "Disharmony, misalignment, working alone",
    },
    {
      name: "Four of Pentacles",
      image: tarotImages[53],
      uprightMeaning: "Saving money, security, conservatism, scarcity, control",
      reversedMeaning: "Over-spending, greed, self-protection",
    },
    {
      name: "Five of Pentacles",
      image: tarotImages[54],
      uprightMeaning: "Financial loss, poverty, lack mindset, isolation, worry",
      reversedMeaning: "Recovery from financial loss, spiritual poverty",
    },
    {
      name: "Six of Pentacles",
      image: tarotImages[55],
      uprightMeaning: "Giving, receiving, sharing wealth, generosity, charity",
      reversedMeaning: "Self-care, unpaid debts, one-sided charity, power and domination",
    },
    {
      name: "Seven of Pentacles",
      image: tarotImages[56],
      uprightMeaning: "Long-term view, sustainable results, perseverance, investment",
      reversedMeaning: "Lack of long-term vision, limited success or reward",
    },
    {
      name: "Eight of Pentacles",
      image: tarotImages[57],
      uprightMeaning: "Apprenticeship, repetitive tasks, mastery, skill development",
      reversedMeaning: "Self-development, perfectionism, misdirected activity",
    },
    {
      name: "Nine of Pentacles",
      image: tarotImages[58],
      uprightMeaning: "Abundance, luxury, self-sufficiency, financial independence",
      reversedMeaning: "Self-worth, over-investment in work, hustling",
    },
    {
      name: "Ten of Pentacles",
      image: tarotImages[59],
      uprightMeaning: "Wealth, financial security, family, long-term success, contribution",
      reversedMeaning: "The dark side of wealth, financial failure or loss",
    },
    {
      name: "Page of Pentacles",
      image: tarotImages[60],
      uprightMeaning: "Manifestation, financial opportunity, skill development",
      reversedMeaning: "Lack of progress, procrastination, learn from failure",
    },
    {
      name: "Knight of Pentacles",
      image: tarotImages[61],
      uprightMeaning: "Hard work, productivity, routine, conservatism",
      reversedMeaning: "Self-discipline, boredom, feeling 'stuck', perfectionism",
    },
    {
      name: "Queen of Pentacles",
      image: tarotImages[62],
      uprightMeaning: "Nurturing, practical, providing financially, a working parent",
      reversedMeaning: "Financial independence, self-care, work-home conflict",
    },
    {
      name: "King of Pentacles",
      image: tarotImages[63],
      uprightMeaning: "Wealth, business, leadership, security, discipline, abundance",
      reversedMeaning: "Financially inept, obsessed with wealth and status, stubborn",
    },
    {
      name: "Ace of Swords",
      image: tarotImages[64],
      uprightMeaning: "Breakthrough, clarity, sharp mind, new ideas, success",
      reversedMeaning: "Inner clarity, re-thinking an idea, clouded judgment",
    },
    {
      name: "Two of Swords",
      image: tarotImages[65],
      uprightMeaning: "Difficult decisions, weighing up options, an impasse, avoidance",
      reversedMeaning: "Indecision, confusion, information overload",
    },
    {
      name: "Three of Swords",
      image: tarotImages[66],
      uprightMeaning: "Heartbreak, emotional pain, sorrow, grief, hurt",
      reversedMeaning: "Negative self-talk, releasing pain, optimism, forgiveness",
    },
    {
      name: "Four of Swords",
      image: tarotImages[67],
      uprightMeaning: "Rest, relaxation, meditation, contemplation, recuperation",
      reversedMeaning: "Exhaustion, burnout, deep contemplation, stagnation",
    },
    {
      name: "Five of Swords",
      image: tarotImages[68],
      uprightMeaning: "Conflict, disagreements, competition, defeat, winning at all costs",
      reversedMeaning: "Reconciliation, making amends, past resentment",
    },
    {
      name: "Six of Swords",
      image: tarotImages[69],
      uprightMeaning: "Transition, change, rite of passage, releasing baggage",
      reversedMeaning: "Personal transition, resistance to change, unfinished business",
    },
    {
      name: "Seven of Swords",
      image: tarotImages[70],
      uprightMeaning: "Betrayal, deception, getting away with something, acting strategically",
      reversedMeaning: "Imposter syndrome, self-deceit, keeping secrets",
    },
    {
      name: "Eight of Swords",
      image: tarotImages[71],
      uprightMeaning: "Negative thoughts, self-imposed restriction, imprisonment, victim mentality",
      reversedMeaning: "Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives",
    },
    {
      name: "Nine of Swords",
      image: tarotImages[72],
      uprightMeaning: "Anxiety, worry, fear, depression, nightmares",
      reversedMeaning: "Inner turmoil, deep-seated fears, secrets, releasing worry",
    },
    {
      name: "Ten of Swords",
      image: tarotImages[73],
      uprightMeaning: "Painful endings, deep wounds, betrayal, loss, crisis",
      reversedMeaning: "Recovery, regeneration, resisting an inevitable end",
    },
    {
      name: "Page of Swords",
      image: tarotImages[74],
      uprightMeaning: "New ideas, curiosity, thirst for knowledge, new ways of communicating",
      reversedMeaning: "Self-expression, all talk and no action, haphazard action, haste",
    },
    {
      name: "Knight of Swords",
      image: tarotImages[75],
      uprightMeaning: "Ambitious, action-oriented, driven to succeed, fast-thinking",
      reversedMeaning: "Restless, unfocused, impulsive, burn-out",
    },
    {
      name: "Queen of Swords",
      image: tarotImages[76],
      uprightMeaning: "Independent, unbiased judgment, clear boundaries, direct communication",
      reversedMeaning: "Overly-emotional, easily influenced, bitchy, cold-hearted",
    },
    {
      name: "King of Swords",
      image: tarotImages[77],
      uprightMeaning: "Mental clarity, intellectual power, authority, truth",
      reversedMeaning: "Quiet power, inner truth, misuse of power, manipulation",
    }
  );