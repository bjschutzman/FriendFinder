
// home page
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'home.html'));
})

// survery
app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, 'survey.html'));
});