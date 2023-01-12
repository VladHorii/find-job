module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
  compiler: {
    styledComponents: true, // Enables the styled-components SWC transform
  },
};
