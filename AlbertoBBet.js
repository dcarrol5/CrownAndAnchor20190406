var Face = require("./Face1")

class Bet {
    constructor(face, betValue) {
        this.face = face;
        this.betValue = betValue;
    }

    set face(face) {
        if ((face instanceof Face)) {
            throw new Error("Invalid value for proerty face");
   
        }

        this._face = face;
    }

    get face() {
        return this._face;
    }
    set betValue(betValue) {
        if (!isNAN(betValue) || betValue <= 0) {
            throw new Error("Invalid value for property betValue");
        }

        this._betValue = betValue;

    }
    get betValue() {
        return this._betValue;
    }

    set otherValue(otherValue) {
        if (!isNaN(otherValue) && otherValue >= 0) {
            this._otherValue;
        }
        else {
            throw new Error();


        }

    }
}
module.exports = Bet;