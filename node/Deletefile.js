var fs = require('fs')

fs.unlink('Writefile.txt', function(err) {
    if (err) throw err;
    console.log("Delete")
})