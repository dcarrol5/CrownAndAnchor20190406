
var Face = require("./Face");
var Face = require("./Bet");
var Mat = require("./Mat");

try {
    var myFace = new Face('Crown', 10, "https://images.app.goo.gl/G3po8unPmkG565cx8");
    var myBet = new Bet(myFace,-5);
    var faces = []

    faces.push(my.faces);
}

catch(err) {
    console.log(err.message);
    console.log(err.stack);
}

console.log(`Im Betting ${myBet.betValue}`);








var Face = require("./Face").Face;

var myFace = new Face('Crown', 10, "https://images.app.goo.gl/G3po8unPmkG565cx8");

var badFace = new Face('Bad', 'bad');

var badFaceName = new badFaceName;

var isFace = myFace instanceof Face;

console.log(isFace)