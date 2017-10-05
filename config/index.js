const configValues = require('./config')

module.exports = {
  getDbConnectionString () {
    return `mongodb://${configValues.uname}:${configValues.pwd}@ds163494.mlab.com:63494/nodetodo`
  },
}
