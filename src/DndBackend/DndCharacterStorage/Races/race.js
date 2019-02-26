const Base = require('./../base');
const Ability = require('./ability');

class Race extends Base{
    constructor(name){
        super(name);
        this.abilityScore = null;
        this.aveAge = null;
        this.commonAlignment = null;
        this.size = null;
        this.speed = null;
        this.languages = null;
        this.weaponProf = null;
        this.toolProf = null;
        this.abilities = null;
        this.description = null;
        this.subDescription = null;
        this.getInfo();
    };
    
    getInfo(){
        var name = this.name, 
        path = this.pathToInfo;
        this.name = "traits";
        var n = name;
        if(name.split(" ").length === 2)
            n = name.split(" ")[1];
        
        var fs = require('fs'),
        filePath = this.getFilePath('races/' + n + "/"),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        this.name = "description1";
        this.setPath(path);
        filePath = this.getFilePath('races/' + n + "/");
        this.description = fs.readFileSync(filePath).toString();
        
        this.name = name;
        var sub = false;
        for(var i = 0; i < array.length; i++){
            var line = array[i].split(":");
            if(line[0] === "Ability Score"){
                if(this.abilityScore === null || !sub)
                    this.abilityScore = line[1].trim();
                else
                    this.abilityScore += ", " + line[1].trim();
            }
            else if(line[0] === "Average Age")
                this.aveAge = line[1].trim();
            else if(line[0] === "Alignment")
                this.commonAlignment = line[1].trim();
            else if(line[0] === "Size")
                this.size = line[1].trim();
            else if(line[0] === "Speed")
                this.speed = line[1].trim();
            else if(line[0] === "Weapon Proficiencies"){
                if(this.weaponProf === null || !sub)
                    this.weaponProf = line[1].trim();
                else
                    this.weaponProf += ", " + line[1].trim();
            }
            else if(line[0].indexOf("Tool Proficiencies") > -1){
                if(this.toolProf === null || !sub)
                    this.toolProf = line[0].substring(line[0].indexOf("("), line[0].indexOf(")") + 1) + " " + line[1].trim();
                else
                    this.toolProf += ", " + line[0].substring(line[0].indexOf("("), line[0].indexOf(")") + 1) + " " + line[1].trim();
            }
            else if(line[0] === "Languages"){
                if(this.languages === null || !sub)
                    this.languages = line[1].trim();
                else
                    this.languages += ", " + line[1].trim();
            }
            else if(line[0] === "Racial Abilities"){
                var number = line[1].trim();
                var abils = [];
                if(this.abilities !== null && sub)
                    abils = this.abilities;
                for(var j = 0; j < number; j++){
                    line = array[i+j+1].split(":");
                    var a = new Ability(line[0], line[1].trim());
                    abils.push(a);
                }
                i += number - 0;
                this.abilities = abils;
            }
            else if(line[0] === "Subraces"){
                sub = true;
                while(array[i] !== undefined && array[i].split(":")[0] !== this.name)
                    i++;
            }
            else if(line[0] === "Description"){
                this.subDescription = line[1].trim();
                while(array[i+1].indexOf(":") === -1)
                    this.subDescription += "\r\n" + array[++i];
            }
            else break;
        }
    };
    
    randomStartingMoney(){
        var m = this.funds.split(" ")[0].split("d");
        var sum = 0;
        for(var i = 0; i < m[0]; i++)
            sum += Math.ceil(Math.random() * m[1]);
        
        if(this.name === "Monk")
            return sum + " gp";
        else return (sum * 10) + " gp";
    };
}

module.exports = Race;

