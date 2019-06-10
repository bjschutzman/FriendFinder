/*
o	A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
o	A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/

var friends = require('../data/friends');
// console.log(friends);

module.exports = function(app){
    // GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        var user = req.body;
        // loops through users scores and parses them
        for (var i = 0; i < user.scores.length; i++){
            user.scores[i]= parseInt(user.scores[i]);
        }
             // set BF score to start at 0 and set max difference a friend can have.
            var bestFriendIndex = 0;
            var minimumDifference = 40;

            // Start with 0 differenece and loop through to compare the difference.
            //  whatever the difference is, add to the total difference
            for(var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for(var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
            if(totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
            }
            }

            // after finding match, add user to friend array
            friends.push(user);
            

            // send back to browser the best friend match
            res.json(friends[bestFriendIndex]);


    })
};


