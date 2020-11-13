let cron = require('node-cron')
let shell = require('shelljs')
var express = require('express')
var app = express()


app.get('/', function(req, res) {
    res.redirect("https://www.youtube.com/watch?v=wwoLu5JOY9o")
})

cron.schedule("* * * * *", function() {
    
    console.log('scheduler running...');

    if (shell.exec('node index.js').code !== 0) {
        console.log('Something went wrong ')
    }
})

app.listen(process.env.PORT || 5000, () => console.log(`Server started on port 5000`));