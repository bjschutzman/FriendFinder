// need get route to survey



// home page
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'home.html'));
})

// survery
app.get('/survey', function(err, res){
    res.sendFile(path.join(__dirname, 'survey.html'));
});