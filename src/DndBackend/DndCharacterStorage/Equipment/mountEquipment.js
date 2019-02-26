const Base = require('./../base');

class MountEquipment extends Base{
    constructor(name, dir){
        super(name, dir);
        this.cost = null;
        this.weight = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('equipment/equipment/mount_equipment/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        
        this.cost = array[1].split(":")[1].trim();
        this.weight = array[2].split(":")[1].trim();
    };
}

module.exports = MountEquipment;