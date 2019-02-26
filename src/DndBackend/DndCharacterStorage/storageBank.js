/* global __dirname */

const Weapon = require('./Equipment/weapon');
const Armor = require('./Equipment/armor');
const Spell = require('./Spells/spell');
const Character = require('./character');
const Race = require('./Races/race');
const Class = require('./Classes/class');

class StorageBank{
    constructor(){
        this.weaponList = [];
        this.armorList = [];
        this.spellList = [];
        this.getWeaponList();
        this.getArmorList();
        this.getSpellList();
    };
    
    getWeaponList(character){
        var fs = require('fs'),
        path = require('path'),    
        filePath = path.join(__dirname, "../../info/equipment/equipment/weapons/");
        
        if(character === undefined){
            var dirs = fs.readdirSync(filePath);
            for(var dir of dirs){
                var files = fs.readdirSync(filePath + dir + "/");
                for(var file of files)
                    this.weaponList.push(file.split(".")[0]);
            }
        }
        else if(character instanceof Character){
            var weaponList = [];
            var c = character.class;
            var r = character.race;
            var cProfs = c.weaponProf.split(", ");
            var rProfs = r.weaponProf.split(", ");
            for(var weapon of this.weaponList){
                weapon = new Weapon(weapon);
                var added = false;
                for(var prof of cProfs)
                    if(weapon.type.toLowerCase().indexOf(prof) > -1 || weapon.name.toLowerCase().indexOf(prof) > -1){
                        weaponList.push(weapon.name);
                        added = true;
                    }
                if(added)
                    continue;
                for(var prof of rProfs)
                    if(weapon.type.toLowerCase().indexOf(prof) > -1 || weapon.name.toLowerCase().indexOf(prof) > -1)
                        weaponList.push(weapon.name);
            }
            return weaponList;
        }
        else return "Invalid Type: Needs type Character";
    };
    
    getArmorList(character){
        var fs = require('fs'),
        path = require('path'),    
        filePath = path.join(__dirname, "../../info/equipment/equipment/armor/");
        
        if(character === undefined){
            var dirs = fs.readdirSync(filePath);
            for(var dir of dirs){
                var files = fs.readdirSync(filePath + dir + "/");
                for(var file of files)
                    this.armorList.push(file.split(".")[0]);
            }
        }
        else if(character instanceof Character){
            var armorList = [];
            var c = character.class;
            var profs = c.armorProf.split(", ");
            for(var armor of this.armorList){
                armor = new Armor(armor);
                for(var prof of profs)
                    if(armor.type.toLowerCase().indexOf(prof) > -1)
                        armorList.push(armor.name);
            }
            return armorList;
        }
        else return "Invalid Type: Needs type Character";
    };
    
    getSpellList(person, level){
        var spellList = [];
            
        var fs = require('fs'),
        path = require('path'),    
        filePath = path.join(__dirname, "../../info/spells/categories/" + person + " Spells/");
        if(person === undefined){   //person and level === undefined
            filePath = path.join(__dirname, "../../info/spells/basicList/");

            var files = fs.readdirSync(filePath);
            for(var file of files)
                this.spellList.push(file.split(".")[0]);
        }
        else if(level === undefined){ //person === defined and level === undefined
            var dirs = fs.readdirSync(filePath);
            for(var dir of dirs){
                filePath = path.join(__dirname, "../../info/spells/categories/" + person + " Spells/" + dir)
                var files = fs.readdirSync(filePath);
                for(var file of files)
                    spellList.push(file.split(".")[0]);
            }
            return spellList;
        }
        else{ //person and level === defined
            var dirs = fs.readdirSync(filePath);
            for(var dir of dirs)
                if(dir.indexOf(level) > -1)
                    filePath = path.join(__dirname, "../../info/spells/categories/" + person + " Spells/" + dir);
            
            var files = fs.readdirSync(filePath);
            for(var file of files)
                spellList.push(file.split(".")[0]);
            return spellList;
        }
    }
}

module.exports = StorageBank;