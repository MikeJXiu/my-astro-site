// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('swisseph') // 避免解析 native module
    }

    // 忽略 .node 文件加载（否则 webpack 会报错）
    config.module.rules.push({
      test: /\.node$/,
      use: 'ignore-loader'
    })

    return config
  }
}

module.exports = nextConfig
