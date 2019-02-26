const Base = require('./../base');

class Service extends Base{
    constructor(name, dir){
        super(name, dir);
        this.cost = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('equipment/equipment/services/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        
        this.cost = array[1].split(":")[1].trim();
    };
}

module.exports = Service;