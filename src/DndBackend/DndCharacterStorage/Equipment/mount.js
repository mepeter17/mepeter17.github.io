const Base = require('./../base');

class Mount extends Base{
    constructor(name){
        super(name);
        this.cost = null;
        this.speed = null;
        this.carryingCap = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('equipment/equipment/mounts/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        
        this.cost = array[1].split(":")[1].trim();
        this.speed = array[2].split(":")[1].trim();
        this.carryingCap = array[3].split(":")[1].trim();
    };
}

module.exports = Mount;





