const Base = require('./../base');

class Gear extends Base{
    constructor(name){
        super(name);
        this.cost = null;
        this.weight = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('equipment/equipment/gear/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        
        this.cost = array[1].split(":")[1].trim();
        this.weight = array[2].split(":")[1].trim();
    };
}

module.exports = Gear;



