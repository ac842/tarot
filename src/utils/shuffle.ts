// src/utils/shuffle.ts
import { TarotCard } from "../data/tarotCards";

/**
 * 隨機打亂牌組
 */
export function shuffleDeck(cards: TarotCard[]): TarotCard[] {
  let shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * 抽取指定數量的塔羅牌
 */
export function drawCards(cards: TarotCard[], count: number): TarotCard[] {
  const shuffled = shuffleDeck(cards);
  return shuffled.slice(0, count);
}