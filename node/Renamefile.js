var fs = require('fs')

fs.rename('newfiles.txt', 'oldfiles.txt', function(err) {
    if (err) throw err;
    console.log("Rename")
}) 