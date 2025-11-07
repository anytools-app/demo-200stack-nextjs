import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Imageコンポーネントで表示する画像をホストしているサーバーのURL（microCMSを使う場合↓）
    domains: ["images.microcms-assets.io"],
    // 画像の最適化処理を動かさない
    unoptimized: true,
  },
  // export 時に /path/index.html 形式で出力する
  trailingSlash: true,

  // 静的出力
  output: "export",
};

export default nextConfig;
