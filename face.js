class Face {
    constructor(face, value, image) {
        this.faceName = faceName;
        this.valueName = valueName;
        this.imageNameURLFilePath = imageNameURLFilePath;
    }
    set name(faceName) {
        this._faceName = faceName;
    }
    get symbolName() {
        return this._faceName;
    }
    set valueName(newvalueName) {
        return this._valueName;
    }
    get valueName() {
        return this._valueName;
    }
    set imageNameURLFilePath(newimageNameURLFilePath) {
        if (isNaN(newimageNameURLFilePath)) {
            this._imageNameURLFilePath = newimageNameURLFilePath;
        }
        else {
            this._imageNameURLFilePath = [6];
        }
    }
    get imageNameURLFilePath(){
        return this._imageNameURLFilePath;
    }
}

let testFunction = new function(){

}

module.exports = Face;
module.exports
















