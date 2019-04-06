class Face {
    constructor(name, value, imageURL) {
        this.name = name;
        this.value = value;
        this.imageURL = imageURL;
    }

    set name(faceName) {
        this._name = faceName | "Uknown";
    }
    get name() {
        return this._name;
    }
    set value(faceValue) {
        if (isNAN(faceValue)) {
            this._value = 0;
        }
        else {
            this._value = faceValue;
        }
    }
    get value() {
        return this._value;
    }
    set imageURL(newimageURL) {
        this._imageURL = newimageURL |"https://www.bing.com/images/search?q=beach&FORM=HDRSC2";
    }
    get imageURL() {
        return this._imageURL;
    }

}   
module.exports = Face;