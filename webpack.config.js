module.exports = {
    entry: ['./app/js/main.js'],
    output: {
        filename: './app/js/bundle.js'
    },

    module: {
        preLoaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'jshint-loader'

            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            }
        ],
    }
};