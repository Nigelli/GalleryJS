module.exports = {
    entry  : './src/Gallery.js',
    output : {
        path     : __dirname,
        filename : './dist/gallery.dist.js'
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