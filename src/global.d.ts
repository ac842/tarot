// global.d.ts

declare module '*.png';
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