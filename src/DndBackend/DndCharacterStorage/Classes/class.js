import Base from './../base';
import Feature from './feature';

function Level(level, proficiency, features){
    this.level = level;
    this.proficiency = proficiency;
    this.features = features;
}

class Class extends Base
{
    constructor(name){
        super(name);
        this.abilityStrengths = null;
        this.hitDice = null;
        this.hpSub = null;
        this.armorProf = null;
        this.weaponProf = null;
        this.toolProf = null;
        this.savingThrowProf = null;
        this.skills = null;
        this.startingEquip = null;
        this.description = null;
        this.features = null;
        this.levels = null;
        this.getInfo();
        this.getFeatures();
        this.getLevels();
        delete this.pathToInfo;
    };

    getLevels(){
        var name = this.name,
        path = this.pathToInfo;
        this.name = "levels";

        var fs = require('fs'),
        filePath = this.getFilePath('classes/' + name + '/'),
        levels = fs.readFileSync(filePath).toString().split("\r\n");
        this.setPath(path);

        this.name = name;

        this.levels = [];
        for(var level of levels){
            level = level.split(" ");
            if(level[0] !== "Level"){
                var lev = level[0].substring(0, level[0].length - 2),
                prof = level[1].substring(1),
                feat = level[2];
                var i = 3;
                while(!(level[i].charAt(0) >= '0' && level[i].charAt(0) <= '9') && level[i] !== "Unlimited")
                    feat += " " + level[i++];
                this.levels.push(new Level(lev, prof, feat));
            }
        }
    }

    getFeatures(){
        var name = this.name,
        path = this.pathToInfo;
        this.name = "features1";

        var fs = require('fs'),
        filePath = this.getFilePath('classes/' + name + '/'),
        features = fs.readFileSync(filePath).toString().split("\r\n-");
        this.setPath(path);

        this.name = name;

        this.features = [];
        for(var f of features){
            var n = f.split("\r\n")[0].trim();
            if(n.startsWith("-"))
                n = n.substring(1).trim();
            var desc = f.substring(f.indexOf("\r\n")).trim();
            this.features.push(new Feature(n, desc));
        }
    }

    getInfo(){
        var name = this.name,
        path = this.pathToInfo;

        this.name = "base";
        var fs = require('fs'),
        filePath = this.getFilePath('classes/' + name + '/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        this.setPath(path);

        this.name = "description1";
        filePath = this.getFilePath('classes/' + name + '/');
        this.description = fs.readFileSync(filePath).toString();
        this.setPath(path);


        this.name = name;
        for(var line of array){
            line = line.split(":");
            if(line[0] === "Ability Scores")
                this.abilityStrengths = line[1].trim();
            else if(line[0] === "Hit Dice")
                this.hitDice = line[1].trim();
            else if(line[0] === "Hit Points Substitute")
                this.hpSub = line[1].trim();
            else if(line[0] === "Armor Proficiencies")
                this.armorProf = line[1].trim();
            else if(line[0] === "Weapon Proficiencies")
                this.weaponProf = line[1].trim();
            else if(line[0] === "Saving Throw Proficiencies")
                this.savingThrowProf = line[1].trim();
            else if(line[0].indexOf("Tool Proficiencies") > -1)
                this.toolProf = line[0].substring(line[0].indexOf("("), line[0].indexOf(")") + 1) + " " + line[1].trim();
            else if(line[0].indexOf("Skills") > -1)
                this.skills = line[0].substring(line[0].indexOf("("), line[0].indexOf(")") + 1) + " " + line[1].trim();
            else if(line[0] === "Equipment")
                this.startingEquip = line[1].trim();
            else break;
        }
    };

    rollHitDice(max){
        var h = this.hitDice.split("d");
        if(max)
            return h[1];
        var sum = 0;
        for(var i = 0; i < h[0]; i++)
            sum += Math.ceil(Math.random() * h[1]);
        return sum;
    }
}

//module.exports = Class;
export default Class;
