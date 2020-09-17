const IS_PROD  = 'production' == process.env.NODE_ENV
module.exports={
    publicPath:'./',
    productionSourceMap:!IS_PROD,
    devServer:{
        port:8001
    },
    configureWebpack:{
        devtool:IS_PROD ?'none':'cheap-module-source-map'
    }
}