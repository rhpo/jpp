
module.exports.ONotAvailableError = class ONotAvailableError {
    constructor(item, msg, code=404) {
        if (!item) this.item = 'Unknown' 
            else this.item = item 
        if (!msg) this.msg = "Item is unavailable in this Mode."
            else this.msg = msg
    }

    message() {
        return `${this.item} :: ${this.msg}${this.msg.endsWith('.') ? '' : '.'}`
    }
}