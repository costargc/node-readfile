var fs = require('fs');

text = "lazy boy recliner, massage, meditation, hot shower, cheese fondue, hot coffee with cashew milk, kitten falling asleep on my lap";

// write to file
fs.writeFile("text.txt", text, function (error) {

    if (error) {
        return console.log(error);
    }

});

// read from file
fs.readFile("text.txt", "utf8", function (error, data) {

    if (error) {
        return console.log(error);
    }

    // console.log(data);
    var dataArr = data.split(",");

    //this will print the array...
    // console.log(dataArr); 

    // this will print the content...
    for (i=0; i< dataArr.length;i++){
        console.log(dataArr[i]);
    }

});