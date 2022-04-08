const { i18n } = require('./next-i18next.config')

// fix: prevents error when .less files are required by node
// if (typeof require !== "undefined") {
//     require.extensions[".less"] = (file) => {};
// }

const settings = {
    i18n,
    env: {
        PUPPETEER_SKIP_CHROMIUM_DOWNLOAD: 1,
        PERCY_TOKEN:"ec289bb2ac8b3135dd80db7f3b9ad63d8a44a88d5757e688a13a585bd50a4e75",
        PORT: 8080
    },
    // cssModules: true,
    // cssLoaderOptions: {
    //     importLoaders: 1,
    //     localIdentName: "[local]___[hash:base64:5]",
    // },
};

module.exports = settings;