const Base = require('./../base');

class VehicleWater extends Base{
    constructor(name){
        super(name);
        this.cost = null;
        this.speed = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('equipment/equipment/vehicles_water/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        
        this.cost = array[1].split(":")[1].trim();
        this.speed = array[2].split(":")[1].trim();
    };
}

module.exports = VehicleWater;



