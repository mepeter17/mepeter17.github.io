const Base = require('./../base');

class Armor extends Base{
    constructor(name){
        super(name);
        this.type = null;
        this.cost = null;
        this.ac = null;
        this.strengthReq = null;
        this.stealthEff = null;
        this.weight = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('equipment/equipment/armor/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");

        var type = filePath.split("\\");
        this.type = type[type.length - 2].split(" ")[0];
        
        this.cost = array[1].split(":")[1].trim();
        this.ac = array[2].split(":")[1].trim();
        this.strengthReq = array[3].split(":")[1].trim();
        this.stealthEff = array[4].split(":")[1].trim();
        this.weight = array[5].split(":")[1].trim();
    };
}

module.exports = Armor;