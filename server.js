var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles =
{
    var 'article-one' :
    {
    title : 'Article One | Soheb Moin',
    heading :'Article One',
    date : 'AUG 8, 2017',
    content : `<P>
                    This Is The Content Of Article One . This Is The Content Of Article One . This Is The Content Of Article One . This Is The Content Of Article One 
                    This Is The Content Of Article One . This Is The Content Of Article One . This Is The Content Of Article One . This Is The Content Of Article One .
                    This Is The Content Of Article One .
                </P>
                
                <P>
                    This Is The Content Of Article One . This Is The Content Of Article One . This Is The Content Of Article One . This Is The Content Of Article One 
                    This Is The Content Of Article One . This Is The Content Of Article One . This Is The Content Of Article One . This Is The Content Of Article One .
                    This Is The Content Of Article One .
                </P>
                
                <P>
                    This Is The Content Of Article One . This Is The Content Of Article One . This Is The Content Of Article One . This Is The Content Of Article One 
                    This Is The Content Of Article One . This Is The Content Of Article One . This Is The Content Of Article One . This Is The Content Of Article One .
                    This Is The Content Of Article One .
                </P>`
                },

    var 'article-two' : 
    {
    title : 'Article One | Soheb Moin',
    heading :'Article Two',
    date : 'AUG 9, 2017',
    content : `<P>
                    This Is The Content Of Article Two . 
               </P>`
    },
    
    var 'article-three' : 
    { 
    title : 'Article Three | Soheb Moin',
    heading :'Article Three',
    date : 'AUG 8, 2017',
    content :`<P>
                    This Is The Content Of Article Three . 
              </P>`}
};

function createTemplate(data){
    var title  = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate = `<html>
    <head>
        <title>
            Article One | Soheb Moin 
        </title>
        <meta name="viewport" content="width=device-width , initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
            <div class="container">   
                <div>
                    <a href="/">Home</a>
                </div>
                
                <hr/>
                
                <h3>${heading}</h3>
                
                <div>
                    ${date}
                </div>
                ${content}
                </div>
    </body>
</html> `;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName' , function (req , res) {
    var articleName = req.params.articleName;
res.send(createTemplate(articles[articleName]));
});


});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
