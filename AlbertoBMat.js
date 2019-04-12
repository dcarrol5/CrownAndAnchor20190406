class Mat {
    constructor(face, value, imageURL) {
        this.face = faceName;
        this.value = value;
        this.imageURL = imageURL;
    }

    set face(faceName) {
        this._face = faceName | "Uknown";
    }
    get name() {
        return this._faceName;
    }
    set metValue(matValue) {
        if (!isNAN(matValue)) || metValue < = 0 {
            throw new Error("Invalid value for property metValue");
        }
        
        else {
            this._value = matvalue;
        }
    }
    get value() {
        return this._value;
    }
    set imageURL(newimageURL) {
        this._imageURL = newimageURL | "https://www.bing.com/images/search?q=beach&FORM=HDRSC2";
    }
    get imageURL() {
        return this._imageURL;
    }

}
module.exports = Mat;