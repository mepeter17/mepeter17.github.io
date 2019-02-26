const Base = require('./../base');

class Language extends Base{
    constructor(name){
        super(name);
        this.type = null;
        this.speakers = null;
        this.script = null;
        this.getInfo();
    };
    
    getInfo(){
        var name = this.name;
        this.name = "languages";
        var fs = require('fs'),
        filePath = this.getFilePath('character_details/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");

        this.name = name;
        
        name = "";
        for(var line of array){
            var info = line.split(" ");
            if(info[0] === "Standard"){
                this.type = "Standard";
                continue;
            }
            if(info[0] === "Exotic"){
                this.type = "Exotic";
                continue;
            }
            
            info[0] = info[0].replace(/_/, " ");
            if(this.name.toLowerCase().indexOf(info[0].toLowerCase()) > -1){
                info[1] = info[1].replace(/_/, " ");
                info[1] = info[1].replace(/,/, ", ");
                
                this.speakers = info[1];
                this.script = info[2];
                break;
            }
        }
    };
}

module.exports = Language;

