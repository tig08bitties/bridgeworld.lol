/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'arweave.net'],
    unoptimized: process.env.NODE_ENV === 'development'
  },
  env: {
    NEXT_PUBLIC_COVENANT_ORACLE: '0xfa05997C66437dCCAe860af334b30d69E0De24DC',
    NEXT_PUBLIC_TREASURY: '0xb4C173AaFe428845f0b96610cf53576121BAB221',
    NEXT_PUBLIC_ARWEAVE_TX: 'vQSMpXuEy9NrcjDsoQK2RxHxGKTyvCWsqFjzqSnPMck'
  }
};

module.exports = nextConfig;
