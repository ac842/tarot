// src/components/TarotCardDisplay.tsx

import React, { useState } from "react";
import { tarotCards } from "../data/tarotCards";
import "../styles/tarotCardDisplay.scss";

const TarotCardDisplay: React.FC = () => {
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);

  const handleDrawCards = () => {
    // 隨機打亂牌組
    const shuffledCards = tarotCards.sort(() => Math.random() - 0.5);

    // 抽取前三張牌並隨機決定正位或逆位
    const drawnCards = shuffledCards.slice(0, 5).map(card => ({
      ...card,
      isReversed: Math.random() < 0.5, // 50% 機率決定正位或逆位
    }));

    setSelectedCards(drawnCards); // 更新選中的牌
  };

  return (
    <div className="tarot-card-display">
      <h2>隨機塔羅牌展示</h2>
      <button className="btn btn-primary" onClick={handleDrawCards}>
        抽取塔羅牌
      </button>

      <div className="cards-container">
        {selectedCards.map((card, index) => (
          <div key={index} className="card">
            <img
              src={card.image}
              alt={card.name}
              className={card.isReversed ? 'reversed' : ''}
            />
            <h3>{card.name}</h3>
            <p>
              <strong>{card.isReversed ? '逆位:' : '正位:'}</strong> 
              {card.isReversed ? card.reversedMeaning : card.uprightMeaning}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarotCardDisplay;