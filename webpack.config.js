const webpackMerge = require('webpack-merge');
const baseConfig = require('./config/webpack.base');
const argv = require('yargs-parser')(process.argv.slice(2));
const env = argv.env;

const config = require(`./config/webpack.${env}.js`);
module.exports = webpackMerge(baseConfig, config);