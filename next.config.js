
const { withFrameWorkConfig } = require("./framework/common/config")

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = withFrameWorkConfig({

  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK
  },

  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US"
  }
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))