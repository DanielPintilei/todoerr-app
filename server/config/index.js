const config = require('./config')

module.exports = {
  getDbConnectionString () {
    return `mongodb://${config.uname}:${config.pwd}@ds163494.mlab.com:63494/nodetodo`
  },
  getSecret () {
    return config.secret
  },
}
