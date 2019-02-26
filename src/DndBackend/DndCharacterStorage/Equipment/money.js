const Base = require('./../base');

class Money extends Base{
    constructor(name){
        super(name);
        this.funds = null;
        this.getInfo();
    };
    
    getInfo(){
        var fs = require('fs'),
        filePath = this.getFilePath('equipment/equipment/money/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");
        
        this.funds = array[1].split(":")[1].trim();
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

module.exports = Money;