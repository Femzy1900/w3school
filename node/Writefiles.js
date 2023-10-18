var fs = require('fs')

fs.writeFile('Writefile.txt', 'Hello Writefiles', function(err){
    if (err) throw err;
    console.log("Write")
})