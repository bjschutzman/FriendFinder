var path = require('path');


module.exports = function(app){
// home page
        app.use('/', function(req, res){
            res.sendFile(path.join(__dirname, '/../public/home.html'));
        })

        // survery
        app.get(function(req, res){
            res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
}