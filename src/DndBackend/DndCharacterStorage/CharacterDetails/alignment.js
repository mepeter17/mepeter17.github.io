const Base = require('./../base');

class Alignment extends Base{
    constructor(name){
        super(name);
        this.description = null;
        this.getInfo();
    };
    
    getInfo(){
        var name = this.name;
        this.name = "alignment";
        var fs = require('fs'),
        filePath = this.getFilePath('character_details/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");

        this.name = name;
        
        name = "";
        for(var line of array){
            if(line.indexOf("(") > -1){
                name = line.split("(")[0].trim();
                if(name.toLowerCase() === this.name.toLowerCase()){
                    this.description = line;
                }
            }
            else if(name.toLowerCase() === this.name.toLowerCase()){
                this.description += " " + line;
            }
        }
    };
}

module.exports = Alignment;