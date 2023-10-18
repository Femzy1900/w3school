var fs = require('fs');

fs.appendFile('newfiles.txt', 'Hello Femade', function(err) {
    if (err) throw error;
    console.log("Saved")
})