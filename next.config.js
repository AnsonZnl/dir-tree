/** @type {import('next').NextConfig} */
const repo = "dir-tree";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  basePath,
  assetPrefix,
  output: "export",
};

module.exports = nextConfig;
