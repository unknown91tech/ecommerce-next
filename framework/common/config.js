

const path = require("path")
const merge = require("deepmerge")

function withFrameWorkConfig(defaultConfig = {}){
        const framework = "shopify"

        const frameworkNextConfig = path.join("../", framework , "next.config")
        const config = merge(defaultConfig, frameworkNextConfig)

        return config
}

module.exports = {withFrameWorkConfig} 