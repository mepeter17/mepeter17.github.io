const Base = require('./../base');

class Weapon extends Base{
    constructor(name){
        super(name);
        this.type = null;
        this.range = null;
        this.cost = null;
        this.damage = null;
        this.weight = null;
        this.properties = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('equipment/equipment/weapons/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");

        var type = filePath.split("\\");
        this.type = type[type.length - 2].split(" ")[0];
        this.range = type[type.length - 2].split(" ")[1];
        
        this.cost = array[1].split(":")[1].trim();
        this.damage = array[2].split(":")[1].trim();
        this.weight = array[3].split(":")[1].trim();
        this.properties = array[4].split(":")[1].trim();
    };
}

module.exports = Weapon;