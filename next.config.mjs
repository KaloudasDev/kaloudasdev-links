const nextConfig = {
  images: {
    domains: ['i.imgur.com', 'cdn.discordapp.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/kaloudasdev-links' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kaloudasdev-links/' : '',
};

export default nextConfig;