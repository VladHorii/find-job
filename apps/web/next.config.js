module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/vacancy",
        permanent: true,
      },
    ];
  },
  experimental: {
    transpilePackages: ["ui"],
  },
  compiler: {
    styledComponents: true, // Enables the styled-components SWC transform
  },
};
