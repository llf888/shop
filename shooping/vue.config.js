module.exports = {
    publicPath:process.env.NODE_ENV === "production" ? "./" : "/",
    assetsDir:"./",
    devServer:{
        port:8080,
        host:"127.0.0.1",
        https:false,
        open:true
    }
}