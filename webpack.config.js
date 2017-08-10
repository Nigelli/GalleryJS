module.exports = {
    entry  : {
        'gallery.dist': './src/Gallery.js'
    },
    output : {
        path     : __dirname + '/dist',
        filename : '[name].js',
        libraryTarget: 'var',
        library: 'LittleGalleryJS'
    },
    module : {
        loaders: [ 
            { 
                test   : /.js$/,
                loader : 'babel-loader',
                options: {
                    minified: true
                }
            },
            { 
                test   : /.html$/,
                loader : 'html-loader',
                options: {
                    minimize: true
                } 
            }
        ]
    }
};