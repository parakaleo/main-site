var connect  = require('connect');
var static = require('serve-static');
var bodyParser = require('body-parser');
var livereload = require('livereload');
var path = require('path');
var fs = require('fs');
var pretty = require('pretty');

var app = connect();

app.use(static(__dirname + '/'));

app.listen(8010, function() {
  console.log('listening at 8010');
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// respond to all requests
app.use('/save', function(req, res){
  if(req.body.path === '' || req.body.path === '/') {
    req.body.path = '/index.html'
  }

  var html = req.body.html
  var filepath = path.join(__dirname, req.body.path)
  fs.writeFileSync(filepath, pretty(html, {ocd: true}))
  res.end('ok')
});


var lrserver = livereload.createServer();
lrserver.watch(__dirname + "/");
