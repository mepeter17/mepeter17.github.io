const Base = require('./../base');

class Container extends Base{
    constructor(name){
        super(name);
        this.capacity = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('equipment/equipment/containers/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        
        this.capacity = array[1].split(":")[1].trim();
    };
}

module.exports = Container;

