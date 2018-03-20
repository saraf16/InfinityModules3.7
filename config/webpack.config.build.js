const path = requir('path');

module.exports = {
    entry: './src/components/index.js',
    output: {
        path: path.reslove(__dirname, '../dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'ReactComponentNpm'
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    require.resolve('style-loader'), {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdenName: '[name]__[local]--[has:base64:5]'
                        }
                    }
                ]
            }
        ]
    }

}