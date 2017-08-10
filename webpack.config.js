module.exports = {
    entry  : './GalleryJs.js',
    output : {
        path     : __dirname,
        filename : './dist/galleryJs.dist.js'
    },
    module : {
        loaders: [ { 
                test   : /.js$/,
                loader : 'babel-loader' 
            }
        ]
    }
};