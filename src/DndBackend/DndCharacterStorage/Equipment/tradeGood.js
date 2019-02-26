const Base = require('./../base');

class TradeGood extends Base{
    constructor(name, dir){
        super(name, dir);
        this.goods = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('equipment/equipment/trade_goods/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        
        this.goods = array[1].split(":")[1].trim();
    };
}

module.exports = TradeGood;

