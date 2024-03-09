module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths, isServer }) => {
            if (!isServer) {
                webpackConfig.resolve.fallback = {
                    fs: false,
                    path: false,
                    os: false,
                    crypto: false,
                };
                webpackConfig.target = 'web'
            }

            return webpackConfig;
        },
    }
};
