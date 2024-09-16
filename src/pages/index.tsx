// src/pages/index.tsx
import React from "react";
import TarotCardDisplay from "../components/TarotCardDisplay";
import SEO from "../components/SEO";

// 引入首頁樣式
import "../styles/index.scss";

const IndexPage: React.FC = () => {
  return (
    <>
      <SEO title="塔羅牌首頁" description="探索你的內心世界，讓塔羅為你指引方向" />
      <div className="hero-section">
        <h1 className="hero-title">歡迎來到塔羅牌探索之旅</h1>
        <p className="hero-description">透過塔羅牌，解鎖內心的秘密，找到你的心靈方向</p>
        <div className="cta-section">
          <TarotCardDisplay />
        </div>
      </div>
    </>
  );
};

export default IndexPage;