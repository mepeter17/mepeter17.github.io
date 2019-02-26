/* global __dirname */

class fs{
    constructor(name, dir){
        this.category = dir;
        this.name = name;
        if(this.category === undefined) delete this.category;
        this.pathToInfo = "../../info/";
    }
    readTextFile = file => {
        console.log(file);
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        console.log(rawFile);
        rawFile.onreadystatechange = () => {
            if(rawFile.readyState === 4){
                if(rawFile.status === 200 || rawFile.status === 0){
                    var allText = rawFile.responseText;
                    console.log("allText: ", allText);
                }
            }
        };
        rawFile.send(null);
    }

    getFilePath(dirPath){
        dirPath = this.pathToInfo + dirPath;
        delete this.pathToInfo;

        var fs = require('fs'),
        path = require('path'),
        filePath = path.join(__dirname, dirPath);
        if(this.category !== undefined) filePath = path.join(__dirname, dirPath + this.category + "/");

        var name = this.name;

        var dirs = fs.readdirSync(filePath);
        for (var i = 0; i < dirs.length; i++) {

            var file = null;
            if(fs.lstatSync(filePath + dirs[i]).isDirectory()){
                var files = fs.readdirSync(filePath + dirs[i]);
                for(var j = 0; j < files.length; j++){
                    if(files[j].toLowerCase().indexOf(name.toLowerCase()) > -1){
                        file = filePath + dirs[i] + "\\" + name + ".txt";
                        break;
                    }
                }
            }
            else if(dirs[i].toLowerCase().indexOf(name.toLowerCase()) > -1){
                file = filePath + name + ".txt";
            }

            if(file !== null){
                filePath = file;
                break;
            }
        }
        return filePath;
    };

    setPath(s){
        this.pathToInfo = s;
    }
}

//module.exports = Base;
export default fs;
