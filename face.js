class Face {
    constructor(symbol, value, image) {
        this.symbolName = symbolName;
        this.valueName = valueName;
        this.imageNameURLFilePath = imageNameURLFilePath;
    }
    set symbolName(newsymbolName) {
        this._symbolName = newsymbolName;
    }
    get symbolName() {
        return this._symbolName;
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

module.exports = Face
















