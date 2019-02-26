const Base = require('./../base');

class Tool extends Base{
    constructor(name, dir){
        super(name, dir);
        this.cost = null;
        this.weight = null;
        this.description = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('equipment/equipment/tools/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        
        this.cost = array[1].split(":")[1].trim();
        this.weight = array[2].split(":")[1].trim();
        this.description = array[3].split(":")[1].trim();
    };
}

module.exports = Tool;