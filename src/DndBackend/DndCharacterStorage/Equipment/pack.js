const Base = require('./../base');

class Pack extends Base{
    constructor(name){
        super(name);
        this.cost = null;
        this.description = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('equipment/equipment/packs/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        
        this.cost = array[1].split(":")[1].trim();
        this.description = array[2].split(":")[1].trim();
    };
}

module.exports = Pack;







