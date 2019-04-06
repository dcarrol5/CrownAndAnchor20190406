class Die {
    constructor(ArrayFaces, ActionFaces, RollDie, NumberofSides) {
        this.ArrayFaces = ArrayFaces;
        this.ActionFaces = ActionsFaces;
        this.RollDie = RollDie;
        this.NumberofSides = NumberofSides;
    }
    set ArrayFaces(newArrayFaces) {
        return this._ArrayFaces = newArrayFaces;
    }
    get _ArrayFaces() {
        return this._ArrayFaces;
    }
    set ActionFaces(newActionFaces) {
        return this._ActionsFaces;
    }
    get ActionFaces() {
        return this._ActionsFaces;
    }
    set RollDie(newRollDie) {
        return this._RollDie;
    }
    get RollDie() {
        return this._RollDie;
    }
    set NumberofSides(newNumberofSides) {
        return this._newNumberofSides;
    }
    get NumberofSides() {
        return this._NumberofSides;
    }

}

module.exports = Die