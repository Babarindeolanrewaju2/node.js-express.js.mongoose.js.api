var expres = requrie('express');
var app = express();

app.get('/', function (request, response) {
    response.send('My First API');
})

app.listen(4000, function () {
    console.log("First API running on port 3000!")
})
