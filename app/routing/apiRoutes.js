const getFriendsData = require('../data/friends.js')

module.exports = (app) => {
  app.get('/api/friends', (req, res) => {
    res.json(getFriendsData)
  });
  app.post('/api/friends', function (req, res) {


    let currentUser = req.body
    console.log(currentUser)
    // parseInt for scores
    for (var i = 0; i < currentUser.scores.length; i++) {
      currentUser.scores[i] = parseInt(currentUser.scores[i]);
    }

    let currentUserScore = currentUser.scores

    let totalDifference = []

    for (var i = 0; i < getFriendsData.length; i++) {


      let friendScores = getFriendsData[i].scores

      let scoreArray = differenceInScores(friendScores, currentUserScore)
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let difference = scoreArray.reduce(reducer);
      totalDifference.push(difference)

    }

    let leastDifference = Math.min(...totalDifference)
    let index = totalDifference.indexOf(leastDifference)
    let mostCompatible = getFriendsData[index]
    getFriendsData.push(req.body)
    res.json(mostCompatible)





  });

  function differenceInScores(friendScores, currentUserScore) {
    let differenceArray = []
    for (let i = 0; i < friendScores.length; i++) {
      differenceArray.push(Math.abs(friendScores[i] - currentUserScore[i]))
    }
    return differenceArray
  }


}



// function differenceInArray(friendScores, currentUserScore) {
//   return currentUserScore.map(function (el, i) {
//     return Math.abs(el - friendScores[i]);
//   });
// }