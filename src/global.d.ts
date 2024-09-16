// global.d.ts

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.svg';

// 聲明 Webpack 的 require.context 函數
declare const require: {
  context: (
    path: string,
    deep?: boolean,
    filter?: RegExp
  ) => {
    keys: () => string[];
    (id: string): any;
  };
};