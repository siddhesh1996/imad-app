var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
 'article-One':{
    title: 'Article-One',
    heading: 'This is my first aticle',
    date: 'Aug 8 2017',
    content: ` <p>This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
    </p>
    
    
    <p>This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
    </p>
    
    
    <p>This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
    </p>
    `
    },
 'article-Two':{
      title: 'Article-Two',
    heading: 'This is my second aticle',
    date: 'Aug 10 2017',
    content:'<p>This is the content for my second article </p>'
   
     
 } ,
 'article-Three':{
      title: 'Article-Three',
    heading: 'This is my Third aticle',
    date: 'Aug  11 2017',
    content:'<p>This is the content for my third article<p>'
    
 }
};

function createTemplate(data){
    title=data.title;
    heading=data.heading;
    date=data.date;
    content=data.content;

var htmlTemplate=`<html>
    <head>
<title>$(title)</title>
<meta name="viewport" content="width-device-width,intial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet" />

</head>
<body>
    <div class="container">
    <div>
        <a href="/">Home</a>
    </div>
    <hr/>
    <div>
    <h1>$(heading)</h1>
    </div>
    <div>
        
        $(date)
    </div>
    <div>
    $(content)
    </div>
    </div>
    
</body>
</html>
`;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req,res){
    //articleName=Article-one
    //article[articleName]={} content object for article one
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
