// i to odpowiada, ze traktuje ten 3000 jak ten 8080:
module.exports = {
    devServer: {
      proxy: 'http://localhost:3000'
    }
  }