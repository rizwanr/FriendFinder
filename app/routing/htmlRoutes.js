var path = require('path')

module.exports = (app) => {
  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/survey.html'))

  })
  //we have not defined the url send them by default to home.html ( app.use )
  app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/home.html'))

  })
}