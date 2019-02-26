const Base = require('./../base');

class Spell extends Base{
    constructor(name){
        super(name);
        this.level = null;
        this.castTime = null;
        this.range = null;
        this.components = null;
        this.duration = null;
        this.description = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('spells/basicList/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        
        this.level = array[1].trim();
        this.castTime = array[2].split(":")[1].trim();
        this.range = array[3].split(":")[1].trim();
        this.components = array[4].split(":")[1].trim();
        this.duration = array[5].split(":")[1].trim();
        this.description = array[6].trim();
        for(var i = 7; i < array.length; i++){
            this.description += "\n" + array[i].trim();
        }
    };
}

module.exports = Spell;





