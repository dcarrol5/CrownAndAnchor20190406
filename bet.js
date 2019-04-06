var Die = require("./Die");

class Bet {
    constructor(betFaces) {
        this.betFaces = betFaces;
    }
    static defaultNumberOfbetFaces() {
        return 6;
    }
    set defaultNumberOfbetFaces(betFaces) {
        if (Array.isArray(betFaces)) {
            for (var i = 0; i < betFaces.length; i++) {
                if (!(betFaces[i] instanceof Bet)) {
                    betFaces[i] = new Beti(i, i);
                }
            }
        }
        else {
            var betFaces = [];

            for (var i = 0; i < Bet.defaultNumberOfbetFaces(); i++) {
                betFaces.push(new Bet(i, i + 1));
            }
        }

        this.betFaces = betFaces;
        this.Bet();
    }

    get Bet() {
        return this._Bet;
    }

    Bet() {

        var upper_bound = this._betFaces.length - 1;
        var lower_bound = 0;
        var randomFaceIndex = Math.floor(Math.random() * (upper_bound - lower_bound) + lower_bound);

        this._activeBetIndex = randomBetIndex;
    }
    get numberOffBet() {
        return this._Bet.length;
    }

}
module.exports = Bet