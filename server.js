const express = require('express');
const bodyParser = require('body-parser');
//not an npm package
const path = require('path')


const app = express()
const PORT = process.env.PORT || 3000

//struggled with setting up the path name
const publicPathDirectory = path.join(__dirname, './app/public')

app.use(express.static(publicPathDirectory))

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));




//api routes go first as it needs to load befoe the html
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})