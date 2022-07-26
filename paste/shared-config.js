const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EsiWebpackPlugin = require('esi-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const marketValues = require('../markets/au/en/market-constants');


console.log(marketValues.REACT_APP_PHRASE_TRANSLATIONS());

module.exports = function configureConfig(marketValues2) {
    return {
        name: marketValues.REACT_APP_MARKET_NAME,
        cache: false,
        target: 'web',
        entry: {
            index_head: path.resolve(__dirname, '/src/', 'index.js'),
        },
        stats: {},
        output: {
            path: path.resolve(
                __dirname,
                `../build${marketValues.REACT_APP_BUILD_PATH}/customer-service/support/`,
            ),
            filename: '[name].[contenthash].js',
            publicPath: '/',
            clean: true,
        },
        devtool: 'source-map',
        devServer: {
            contentBase: path.resolve(
                __dirname,
                `build${marketValues.REACT_APP_BUILD_PATH}/customer-service/support/`,
            ),
            hot: true,
            port: marketValues.REACT_APP_PORT,
            open: false,
            writeToDisk: true,
            historyApiFallback: true,
            headers: { 'Cache-Control': 'no-cache,max-age=0,must-revalidate' },
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    exclude: ['/node_modules/'],
                    loader: 'html-loader',
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.ts', '.jsx', '.scss', '.css', '.html'],
        },
        plugins: [
            new NodePolyfillPlugin(),
            new HtmlWebpackPlugin({
                alwaysWriteToDisk: true,
                template: path.resolve(
                    __dirname,
                    marketValues.REACT_APP_MARKET_TEMPLATE,
                    'index.html',
                ),
                chunks: ['index_head'],
                filename: 'index.html',
            }),
            new EsiWebpackPlugin({
                baseUrl: 'https://www.ikea.com',
                onError(src, err) {
                    console.error(`Error when resolving ${src}: ${err}`);
                },
                processOptions: {},
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    REACT_APP_CMS_DATA: JSON.stringify('https://csp-stage.ingka.com/app-data'),
                    REACT_APP_CMS_ENV: JSON.stringify('master'),
                    REACT_APP_CMS_MARKET: JSON.stringify(marketValues.REACT_APP_CMS_MARKET),
                    REACT_APP_CMS_LOCALE: JSON.stringify(marketValues.REACT_APP_CMS_LOCALE),
                    REACT_APP_CONTENTFUL_HOME_ID: JSON.stringify('2vO2HX5P3SmKPBXyhBuOCl'),
                    REACT_APP_SENTRY_DSN: JSON.stringify(marketValues.REACT_APP_SENTRY_DSN),
                    REACT_APP_BUILD_PATH: JSON.stringify(marketValues.REACT_APP_BUILD_PATH),
                    REACT_APP_FAQ_LANG_INTEGRATION: JSON.stringify(
                        marketValues.REACT_APP_FAQ_LANG_INTEGRATION,
                    ),
                    REACT_APP_FAQ_LANG_ACCORDION: JSON.stringify(
                        marketValues.REACT_APP_FAQ_LANG_ACCORDION,
                    ),
                    REACT_APP_FAQ_WIDGET_NON_PROD: JSON.stringify(
                        marketValues.REACT_APP_FAQ_WIDGET_NON_PROD,
                    ),
                    REACT_APP_FAQ_WIDGET_PROD: JSON.stringify(
                        marketValues.REACT_APP_FAQ_WIDGET_PROD,
                    ),
                    REACT_APP_GOOGLE_ANALYTICS_ID: JSON.stringify(
                        marketValues.REACT_APP_GOOGLE_ANALYTICS_ID,
                    ),
                    REACT_APP_REFERENCE_TIMEZONE: JSON.stringify(
                        marketValues.REACT_APP_REFERENCE_TIMEZONE,
                    ),
                    REACT_APP_PHRASE_TRANSLATIONS: JSON.stringify(
                        marketValues.REACT_APP_PHRASE_TRANSLATIONS,
                    ),
                },
            }),

            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
            new HtmlWebpackHarddiskPlugin(),
        ],
    };
};
