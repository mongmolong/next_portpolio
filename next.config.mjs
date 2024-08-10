/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://mongmolong.github.io/next_portpolio"
      : "",
};

export default nextConfig;
