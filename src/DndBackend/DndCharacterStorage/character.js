class Stats{
    constructor(){
        this.str = null;
        this.dex = null;
        this.con = null;
        this.int = null;
        this.wis = null;
        this.cha = null;
        this.skills = null;
        this.savingThrows = null;
    }
    
    getStrMod(){
        return Math.floor((this.str - 10) / 2);
    }
    
    getDexMod(){
        return Math.floor((this.dex - 10) / 2);
    }
    
    getConMod(){
        return Math.floor((this.con - 10) / 2);
    }
    
    getIntMod(){
        return Math.floor((this.int - 10) / 2);
    }
    
    getWisMod(){
        return Math.floor((this.wis - 10) / 2);
    }
    
    getChaMod(){
        return Math.floor((this.cha - 10) / 2);
    }
    
    setStats(str, dex, con, int, wis, cha){
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
    }
}

class Info{
    constructor(name){
        this.name = name;
        this.level = 1;
        this.alignment = null;
        this.exp = 0;
        this.backstory = null;
        this.languages = null;
    }
}

class PhysicalInfo{
    constructor(){
        this.age = null;
        this.height = null;
        this.weight = null;
        this.eyeColor = null;
        this.skinColor = null;
        this.hairColor = null;
    }
}

class CombatInfo{
    constructor(){
        this.proficiency = null;
        this.ac = 10;
        this.init = 0;
        this.speed = null;
        this.hpMax = null;
        this.hp = null;
        this.hitDiceNum = 1;
        this.hitDice = null;
    }
}

class Equipment{
    constructor(){
        this.weapons = [];
        this.armor = [];
        this.other = [];
        this.equippedWeapon = null;
        this.equippedArmor = null;
    }
}

class SpellLevel{
    constructor(){
        this.total = null;
        this.remaining = null;
        this.known = [];
    }
}

class Spells{
    constructor(){
        this.cantrips = new SpellLevel();
        this.level1 = new SpellLevel();
        this.level2 = new SpellLevel();
        this.level3 = new SpellLevel();
        this.level4 = new SpellLevel();
        this.level5 = new SpellLevel();
        this.level6 = new SpellLevel();
        this.level7 = new SpellLevel();
        this.level8 = new SpellLevel();
        this.level9 = new SpellLevel();
    }
}

class Powers{
    constructor(){
        this.features = [];
        this.abilities = [];
    }
}

class Character{
    constructor(name, race, cla){
        if(name !== undefined){
            this.info = new Info(name);
            this.stats = new Stats();
            this.physInfo = new PhysicalInfo();
            this.combatInfo = new CombatInfo();
            this.equipment = new Equipment();
            this.spells = new Spells();
            this.powers = new Powers();
            this.class = cla;
            this.race = race;
            this.initializeInfo();
        }
    }
    
    initializeInfo(){
        this.info.languages = this.race.languages;
        this.combatInfo.proficiency = this.class.levels[0].proficiency;
        this.combatInfo.speed = this.race.speed;
        this.combatInfo.hpMax = this.class.rollHitDice(true);
        this.combatInfo.hp = this.combatInfo.hpMax;
        this.combatInfo.hitDice = this.class.hitDice;
        if(this.class.features[0].name !== "Spellcasting")
            delete this.spells;
        this.addFeatures(1);
        this.powers.abilities = this.race.abilities;
    }
    
    
    writeToFile(fileName){
        const fs = require('fs');
        var path = "../CreatedCharacters";
        if(!fs.existsSync(path))
            fs.mkdirSync(path);
        
        var info = JSON.stringify(this.info);
        var stats = JSON.stringify(this.stats);
        var physInfo = JSON.stringify(this.physInfo);
        var combatInfo = JSON.stringify(this.combatInfo);
        var equipment = JSON.stringify(this.equipment);
        var spells = JSON.stringify(this.spells);
        var powers = JSON.stringify(this.powers);
        var className = JSON.stringify(this.class.name);
        var raceName = JSON.stringify(this.race.name);
        
        var data = "info::" + info + "\r\n\
stats::" + stats + "\r\n\
physInfo::" + physInfo + "\r\n\
combatInfo::" + combatInfo + "\r\n\
equipment::" + equipment + "\r\n\
spells::" + spells + "\r\n\
powers::" + powers + "\r\n\
class::" + className + "\r\n\
race::" + raceName;
        
        fs.writeFileSync(path + "/" + fileName + ".txt", data);
    }
    
    readFromFile(fileName){
        const fs = require('fs');
        var path = "../CreatedCharacters/" + fileName + ".txt";
        var array = fs.readFileSync(path).toString().split("\r\n");
        
        this.info = JSON.parse(array[0].split("::")[1]);
        this.stats = JSON.parse(array[1].split("::")[1]);
        this.physInfo = JSON.parse(array[2].split("::")[1]);
        this.combatInfo = JSON.parse(array[3].split("::")[1]);
        this.equipment = JSON.parse(array[4].split("::")[1]);
        if(JSON.parse(array[5].split("::")[1] !== "undefined"))
            this.spells = JSON.parse(array[5].split("::")[1]);
        this.powers = JSON.parse(array[6].split("::")[1]);
        const Class = require('./Classes/class');
        const Race = require('./Races/race');
        this.class = new Class(JSON.parse(array[7].split("::")[1]));
        this.race = new Race(JSON.parse(array[8].split("::")[1]));
    }
    
    
    addFeatures(level){
        level = level - 1;
        for(var feature of this.class.features){
            var features = this.class.levels[level].features.split(",");
            for(var feat of features){
                feat = feat.split("(")[0].trim();
                if(feature.name.toLowerCase() === feat.toLowerCase())
                    this.powers.features.push(feature);
            }
        }
    }
    
    levelUp(level){
        this.combatInfo.proficiency = this.class.levels[level].proficiency;
        this.addFeatures(level);
        this.combatInfo.hpMax = (this.combatInfo.hpMax - 0) + this.class.rollHitDice();
        this.combatInfo.hp = this.combatInfo.hpMax;
    }
    
    setName(n){
        this.info.name = n;
    }
    
    getName(){
        return this.info.name;
    }
    
    getLevel(){
        return this.info.level;
    }
    
    setAlignment(a){
        this.info.alignment = a;
    }
    
    getAlignment(){
        return this.info.alignment;
    }
    
    addExp(amount){
        var level = this.info.level;
        
        this.info.exp += amount;
        if(this.info.exp > 355000)
            this.info.level = 20;
        else if(this.info.exp > 305000)
            this.info.level = 19;
        else if(this.info.exp > 265000)
            this.info.level = 18;
        else if(this.info.exp > 225000)
            this.info.level = 17;
        else if(this.info.exp > 195000)
            this.info.level = 16;
        else if(this.info.exp > 165000)
            this.info.level = 15;
        else if(this.info.exp > 140000)
            this.info.level = 14;
        else if(this.info.exp > 120000)
            this.info.level = 13;
        else if(this.info.exp > 100000)
            this.info.level = 12;
        else if(this.info.exp > 85000)
            this.info.level = 11;
        else if(this.info.exp > 64000)
            this.info.level = 10;
        else if(this.info.exp > 48000)
            this.info.level = 9;
        else if(this.info.exp > 34000)
            this.info.level = 8;
        else if(this.info.exp > 23000)
            this.info.level = 7;
        else if(this.info.exp > 14000)
            this.info.level = 6;
        else if(this.info.exp > 6500)
            this.info.level = 5;
        else if(this.info.exp > 2700)
            this.info.level = 4;
        else if(this.info.exp > 900)
            this.info.level = 3;
        else if(this.info.exp > 300)
            this.info.level = 2;
        else
            this.info.level = 1;
        
        while(this.info.level > level++)
            this.levelUp(level);
    }
    
    getExp(){
        return this.info.exp;
    }
    
    setBackstory(b){
        this.info.backstory = b;
    }
    
    getBackstory(){
        return this.info.backstory;
    }
    
    addLanguage(l){
        this.info.languages += ", " + l;
    }
    
    getLanguages(){
        return this.info.languages;
    }
    
    setAge(a){
        this.physInfo.age = a;
    }
    
    getAge(){
        return this.physInfo.age;
    }
    
    setHeight(h){
        this.physInfo.height = h;
    }
    
    getHeight(){
        return this.physInfo.height;
    }
    
    setWeight(w){
        this.physInfo.weight = w;
    }
    
    getWeight(){
        return this.physInfo.weight;
    }
    
    setEyeColor(e){
        this.physInfo.eyeColor = e;
    }
    
    getEyeColor(){
        return this.physInfo.eyeColor;
    }
    
    setSkinColor(s){
        this.physInfo.skinColor = s;
    }
    
    getSkinColor(){
        return this.physInfo.skinColor;
    }
    
    setHairColor(h){
        this.physInfo.hairColor = h;
    }
    
    getHairColor(){
        return this.physInfo.hairColor;
    }
    
    getAC(){
        return this.combatInfo.ac;
    }
    
    setInitiatory(i){
        this.combatInfo.init = i;
    }
    
    getInitiatory(){
        return this.combatInfo.init;
    }
    
    setSpeed(s){
        this.combatInfo.speed = s;
    }
    
    getSpeed(){
        return this.combatInfo.speed;
    }
    
    takeDamage(d){
        this.combatInfo.hp -= d;
    }
    
    heal(h){
        this.combatInfo.hp = (this.combatInfo.hp - 0) + h;
        if(this.combatInfo.hp > this.combatInfo.hpMax)
            this.combatInfo.hp = this.combatInfo.hpMax;
    }
    
    healToMax(){
        this.combatInfo.hp = this.combatInfo.hpMax;
    }
    
    setHitDiceNum(h){
        this.combatInfo.hitDiceNum = h;
    }
    
    incrementHitDiceNum(){
        this.combatInfo.hitDiceNum++;
    }
    
    setHitDice(h){
        this.hitDice = h;
    }
    
    addWeapon(w){
        this.equipment.weapons.push(w);
    }
    
    addArmor(a){
        this.equipment.armor.push(a);
    }
    
    addOther(o){
        this.equipment.other.push(o);
    }
    
    removeWeapon(w){
        this.equipment.weapons.splice(this.equipment.weapons.indexOf(w), 1);
    }
    
    removeArmor(a){
        this.equipment.armor.splice(this.equipment.armor.indexOf(a), 1);
    }
    
    removeOther(o){
        this.equipment.other.splice(this.equipment.other.indexOf(o), 1);
    }
    
    getWeapons(){
        return this.equipment.weapons;
    }
    
    getArmor(){
        return this.equipment.armor;
    }
    
    getOther(){
        return this.equipment.other;
    }
    
    setStats(str, dex, con, int, wis, cha){
        this.stats.setStats(str, dex, con, int, wis, cha);
    }
    
    setStr(s){
        this.stats.str = s;
    }
    
    getStr(){
        return this.stats.str;
    }
    
    setDex(d){
        this.stats.dex = d;
    }
    
    getDex(){
        return this.stats.dex;
    }
    
    setCon(c){
        this.stats.con = c;
    }
    
    getCon(){
        return this.stats.con;
    }
    
    setInt(i){
        this.stats.int = i;
    }
    
    getInt(){
        return this.stats.int;
    }
    
    setWis(w){
        this.stats.wis = w;
    }
    
    getWis(){
        return this.stats.wis;
    }
    
    setCha(c){
        this.stats.cha = c;
    }
    
    getCha(){
        return this.stats.cha;
    }
    
    getStrMod(){
        return this.stats.getStrMod();
    }
    
    getDexMod(){
        return this.stats.getDexMod();
    }
    
    getConMod(){
        return this.stats.getConMod();
    }
    
    getIntMod(){
        return this.stats.getIntMod();
    }
    
    getWisMod(){
        return this.stats.getWisMod();
    }
    
    getChaMod(){
        return this.stats.getChaMod();
    }
}

module.exports = Character;