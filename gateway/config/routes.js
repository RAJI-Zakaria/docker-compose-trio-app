const {API_SUPERVISION_URL, APP_SUPERVISION_URL} = require("./env")

exports.ROUTES = [
    {
        url: '/api',
        proxy: {
            target: API_SUPERVISION_URL,
            changeOrigin: true,
            headers: {
                "Connection": "keep-alive"
            },
            onProxyRes: function (proxyRes, req, res) {
                proxyRes.headers['Access-Control-Allow-Origin'] = '*';
            }
            ,
            secure:false
        }
    },


    
    {
        url: '/supervision',
        proxy: {
            target: APP_SUPERVISION_URL,
            changeOrigin: true,
            headers: {
                "Connection": "keep-alive"
            },
            onProxyRes: function (proxyRes, req, res) {
                proxyRes.headers['Access-Control-Allow-Origin'] = '*';
            },
            pathRewrite: {
                [`^/supervision`]: '',
            },
        }
    },
    
]
