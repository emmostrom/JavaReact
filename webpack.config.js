const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

var production = process.argv.reduce(function(p, c){return p || c == '-p'}, false)


var config = {
    context: path.join(__dirname, '/src/main/jsx'),
    entry: {
        app:'./app.jsx',
        vendor: [
            'babel-polyfill',
            'react', 'react-dom'
        ],
    },
    devtool: production ? 'cheap-source-map' : 'source-map',
    output: {
        path: path.resolve(__dirname, 'target/' + process.env.WAR_NAME + '/assets'),
        filename: path.normalize('[name].js'),
    },
    module: {
        loaders: [
            {
                test: /\.less$|\.css$/,
                loader: production ? ExtractTextPlugin.extract('css?sourceMap!less?sourceMap'): 'style-loader!css?sourceMap!less?sourceMap'
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loaders: production ? ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2'] : ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(path.normalize('[name].css')),
        new webpack.optimize.CommonsChunkPlugin("vendor", 'vendor.js', Infinity)
    ],
    stats:{
        children: false
    }
}


if(production){
    config.plugins.push(new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    )

    config.plugins.push(new webpack.optimize.UglifyJsPlugin(
        {
            compress: {
                warnings: false
            }
        })
    )
}else{
    config.devServer = {
        quiet: false,
            noInfo: false,
            stats:{
            assets: false,
                colors: false,
                version: true,
                hash: true,
                timings: true,
                chunks: true,
                chunkModules: false,
                children: false
        }
    }

    config.output.publicPath = 'http://localhost:9090/bundle'

    config.entry.hot = [
        'webpack-dev-server/client?assets/',
        'webpack/hot/only-dev-server'
    ]
}

module.exports = config