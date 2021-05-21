module.exports = {
  devServer: {
    proxy: {//译代理
      "/api": {
        target: "https://holidayapi1.p.rapidapi.com",  //写访问的地址
        ws: true,  // 允许跨域
        changeOrigin: true,  //允许跨域
        pathRewrite: {
          "^/api": ""
        }
      },
      "/api2": {
        target: "https://public-holiday.p.rapidapi.com",  //写访问的地址
        ws: true,  // 允许跨域
        changeOrigin: true,  //允许跨域
        pathRewrite: {
          "^/api2": ""
        }
      },
      "/api3": {
        target: "https://weatherapi-com.p.rapidapi.com",  //写访问的地址
        ws: true,  // 允许跨域
        changeOrigin: true,  //允许跨域
        pathRewrite: {
          "^/api3": ""
        }
      },

    }
  }
}
