/* global __dirname */

class Base{
    constructor(name, dir){
        this.category = dir;
        this.name = name;
        if(this.category === undefined) delete this.category;
        this.pathToInfo = "../../info/";
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
export default Base;
