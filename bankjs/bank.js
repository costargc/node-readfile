var fs = require('fs');

var sum = 0;

switch (process.argv[2]) {
    case 'total':  // if (x === 'value1')
        total();
        break;

    case 'deposit':  // if (x === 'value2')
        deposit(process.argv[3] * 1);
        break;

    case 'withdraw':  // if (x === 'value2')
        withdraw(process.argv[3] * 1);
        break;

    case 'lotto':  // if (x === 'value2')
        lotto();
        break;
    default:
        return undefined;
}


function total() {
    fs.readFile("bank.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");

        for (i = 0; i < dataArr.length; i++) {
            sum = sum + dataArr[i] * 1;
        }

        console.log(sum);
    });
}

function deposit(value) {

    if (value <= 0) {
        return console.log("value needs to be positive!");
    }

    fs.readFile("bank.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        text = data + ", " + value;

        fs.writeFile("bank.txt", text, function (error) {

            if (error) {
                return console.log(error);
            }

        });

    });

    console.log("added $" + value + " to the wallet");
}

function withdraw(value) {

    if (value >= 0) {
        return console.log("value needs to be negative!");
    }

    fs.readFile("bank.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        text = data + ", " + value;

        fs.writeFile("bank.txt", text, function (error) {

            if (error) {
                return console.log(error);
            }

        });

    });

    console.log("subtracted $" + Math.abs(value) + " to the wallet");
}

function lotto() {

    myNumber = Math.floor(Math.random() * (1 + 10)); //1 in 10
    testmyluck = Math.floor(Math.random() * (1 + 10)); //1 in 10

    if (myNumber == testmyluck) {
        console.log("you won the lotto!");
        deposit(500);
    }

    else {
        withdraw(-0.25);
        console.log("you lost :(")
    }

}
