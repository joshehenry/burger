var express = require('express');

var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function () {
	
	console.log("Server listening on: http://localhost:" + PORT);
});
