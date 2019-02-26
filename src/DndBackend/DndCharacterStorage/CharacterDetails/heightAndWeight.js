const Base = require('./../base');

class HeightAndWeight extends Base{
    constructor(name){
        super(name);
        this.heightBase = null;
        this.heightMod = null;
        this.weightBase = null;
        this.weightMod = null;
        this.getInfo();
    };
    
    getInfo(){
        var name = this.name;
        this.name = "height_and_weight";
        var fs = require('fs'),
        filePath = this.getFilePath('character_details/'),
        array = fs.readFileSync(filePath).toString().split("\r\n");

        this.name = name;
        
        name = "";
        for(var line of array){
            var info = line.split(" ");
            var i = 0;
            
            name = info[i++];
            if(this.name.toLowerCase().indexOf(name.substring(0, name.length-1).toLowerCase()) > -1){
                if(name.indexOf(",") > -1){
                    if(this.name.toLowerCase().indexOf(info[i].toLowerCase()) > -1)
                        name += " " + info[i++];
                    else continue;
                }
                this.heightBase = info[i++];
                this.heightMod = info[i++];
                this.weightBase = info[i++] + " " + info[i++];
                this.weightMod = info[i++] + " " + info[i++] + " " + info[i];
                break;
            }
        }
    };
    
    randomHeightandWeight(){
        var h = this.heightBase.split("\'");
        h = h[0] * 12 + (h[1].substring(0, h[1].length - 1) - 0);
        
        var hmod = this.heightMod.split("d");
        var sum = 0;
        for(var i = 0; i < hmod[0].substring(1); i++)
            sum += Math.ceil(Math.random() * hmod[1]);
        h += sum;
        
        var w = this.weightBase.split(" ")[0];
        var wmod = this.weightMod.split(" ")[1];
        if(wmod === "1")
            w = (w - 0) + sum;
        else{
            var sum2 = 0;
            wmod = wmod.substring(1, wmod.length - 1).split("d");
            for(var i = 0; i < wmod[0]; i++)
                sum2 += Math.ceil(Math.random() * wmod[1]);
            w = (w - 0) + sum * sum2;
        }
        
        var ft = Math.floor(h / 12);
        var inch = h % 12;
        h = ft + "\'" + inch + "\""
        w = w + " lbs";
        return {h, w};
    };
}

module.exports = HeightAndWeight;

