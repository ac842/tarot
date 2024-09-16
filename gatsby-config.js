module.exports = {
  siteMetadata: {
    title: `塔羅牌網站`, // 網站的標題
    description: `這是一個基於 Gatsby 和 TypeScript 構建的塔羅牌網站`, // 網站的描述
    author: `@ac`, // 作者名稱
    siteUrl: `https://www.yourwebsite.com`, // 網站的 URL，方便 SEO 和 sitemap 生成
  },
  plugins: [
    `gatsby-plugin-react-helmet`, // 用於處理 meta 標籤等 <head> 內容
    `gatsby-plugin-typescript`, // 支援 TypeScript
    {
      resolve: `gatsby-source-filesystem`, // 用來從本地文件系統中讀取資源
      options: {
        name: `images`, // 資源的名稱
        path: `${__dirname}/src/images`, // 圖片存放的路徑
      },
    },
    `gatsby-transformer-sharp`, // 用於圖片處理，轉換為不同格式
    `gatsby-plugin-sharp`, // 圖片優化工具，支援格式壓縮、WebP 等
    {
      resolve: `gatsby-plugin-manifest`, // 用於生成 PWA 的 manifest 文件
      options: {
        name: `塔羅牌網站`, // PWA 的全稱
        short_name: `塔羅牌`, // PWA 的簡稱
        start_url: `/`, // PWA 啟動的路徑
        background_color: `#ffffff`, // PWA 背景顏色
        theme_color: `#663399`, // PWA 主題顏色
        display: `standalone`, // PWA 的顯示模式
        icon: `src/images/tarot-icon.png`, // PWA 的圖標，請確認圖標存在且符合要求（最好是 512x512）
      },
    },
    `gatsby-plugin-image`, // 用於處理圖片，與 `gatsby-plugin-sharp` 配合使用
    `gatsby-plugin-sass`, // 支援使用 Sass 作為 CSS 預處理器
    `gatsby-plugin-styled-components`, // 支援使用 `styled-components` 來管理樣式
    `gatsby-plugin-offline`, // 支援 PWA 的離線模式
    {
      resolve: `gatsby-plugin-google-analytics`, // Google Analytics 插件，用於追蹤網站流量
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID", // 替換為你的 Google Analytics 跟蹤 ID
        head: false, // 設為 true 時，Analytics 代碼將被加載到 <head> 中
        anonymize: true, // 啟用 IP 匿名化
        respectDNT: true, // 尊重「請勿追蹤」設置
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`, // 用於生成網站的 sitemap
      options: {
        output: `/sitemap.xml`, // sitemap 文件生成的路徑
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito\:300,400,700`, // 引入 Nunito 字體，300（輕）、400（正常）、700（粗體）
        ],
        display: 'swap',
      },
    },
  ],
};