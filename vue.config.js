module.exports = {
    devServer: {
            historyApiFallback: true,
        proxy: {
            '/api': { // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
                target: "https://c.m.163.com", //目标地址，一般是指后台服务器地址
                changeOrigin: true, //是否跨域
                secure:true,
                ws:true,
                pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
                    '^/api': ""
                }
            },
            '/img':{
                target: "https://images.nintendolife.com/", //目标地址，一般是指后台服务器地址
                changeOrigin: true, //是否跨域
                secure:true,
                ws:true,
                pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
                    '^/img': ""
                }
            },
            '/xqts':{
                target: " http://43.143.200.36:8000/", //目标地址，一般是指后台服务器地址
                changeOrigin: true, //是否跨域
                secure:true,
                ws:true,
                pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
                    '^/xqts': ""
                }
            }
        },

    }
}
