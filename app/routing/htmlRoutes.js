var path = require('path')

module.exports = (app) => {
  //added route to serve survey.html
  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/survey.html'))

  })
  //we have not defined the url send them by default to home.html ( app.use )
  app.use('/', (req, res) => {
    //added route to serve home.html
    res.sendFile(path.join(__dirname + '/../public/home.html'))

  })
}