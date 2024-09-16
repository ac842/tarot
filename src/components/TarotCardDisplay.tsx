// src/components/TarotCardDisplay.tsx

import React, { useState } from "react";
import { tarotCards } from "../data/tarotCards";
import { drawCards } from "../utils/shuffle";
import { TarotCard } from "../data/tarotCards";

// 引入樣式
import "../styles/tarotCardDisplay.scss";

const TarotCardDisplay: React.FC = () => {
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>([]);

  const handleDrawCards = () => {
    const drawnCards = drawCards(tarotCards, 3); // 使用 drawCards 隨機抽取3張牌
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
            {/* 使用 Gatsby 靜態圖片 */}
            <img src={card.image} alt={card.name} />
            <h3>{card.name}</h3>
            <p>
              <strong>正位:</strong> {card.uprightMeaning}
            </p>
            <p>
              <strong>逆位:</strong> {card.reversedMeaning}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarotCardDisplay;