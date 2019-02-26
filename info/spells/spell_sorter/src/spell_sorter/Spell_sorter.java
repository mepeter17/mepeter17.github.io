package spell_sorter;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 *
 * @author sirla
 */
public class Spell_sorter {

    /**
     * @param args the command line arguments
     * @throws java.io.FileNotFoundException
     * @throws java.io.IOException
     */
    public static void main(String[] args) throws FileNotFoundException, IOException {
                
        File basicListDir = new File("../basicList");
        if(!basicListDir.exists()){
            basicListDir.mkdir();
        }
        File categoryDir = new File("../categories");
        if(!categoryDir.exists()){
            categoryDir.mkdir();
        }
        
        File fileList;
        fileList = new File("../_list.txt");
        File fileCategories;
        fileCategories = new File("../_categories.txt");
        
        parseSpellsToDirectory(basicListDir, fileList);
        parseSpellsToCategoriesFromDirectory(categoryDir, basicListDir, fileCategories);
    }
    
    private static void parseSpellsToCategoriesFromDirectory(File dir, File fromDir, File file) throws FileNotFoundException, IOException{
        
        BufferedReader br;
        br = new BufferedReader(new FileReader(file));
        
        char c = 65533;
        String s = String.valueOf(c);
        
        String classDirStr = "";
        String levelDirStr = "";
        String title;
        while((title = br.readLine()) != null){
            title = title.replaceAll(s, "'");
            if(title.contains("Spells")){
                classDirStr = title;
                File classDir = new File(dir.toPath() + "/" + classDirStr);
                if(!classDir.exists()) classDir.mkdir();
            }
            else if(title.contains("Level")){
                levelDirStr = title;
                File levelDir = new File(dir.toPath() + "/" + classDirStr + "/" + levelDirStr);
                if(!levelDir.exists()) levelDir.mkdir();
            }
            else{
                Files.copy(new File(fromDir.toPath() + "/" + title + ".txt").toPath(),
                        new File(dir.toPath() + "/" + classDirStr + "/" + levelDirStr + "/" + title + ".txt").toPath(),
                        StandardCopyOption.REPLACE_EXISTING);
            }
        }
    }
    
    private static void parseSpellsToDirectory(File dir, File file) throws IOException{
        
        BufferedReader br;
        br = new BufferedReader(new FileReader(file));
        
        char c = 65533;
        String s = String.valueOf(c);
        
        String description = "";
        String t = br.readLine();
        t = cutSpaces(t);
        t = t.replaceAll(s, "\'");
        t = replaceOffending(t);
        description = description.concat(t.concat("\r\n")); //title
        description = description.concat(br.readLine() + "\r\n"); //type
        description = description.concat(br.readLine() + "\r\n"); //casting time
        description = description.concat(br.readLine() + "\r\n"); //range
        description = description.concat(br.readLine() + "\r\n"); //components
        description = description.concat(br.readLine() + "\r\n"); //duration
        
        String title;
        String type;
        String cast;
        String range;
        String comp;
        String duration;
        while((title = br.readLine()) != null){
            type = br.readLine();
            cast = br.readLine();
            range = br.readLine();
            comp = br.readLine();
            duration = br.readLine();
            
            while(!(cast.contains("Casting Time") && comp.contains("Components"))){
                description = description.concat(title);
                if(title.endsWith(".")) description = description.concat("\r\n");
                else description = description.concat(" ");
                title = type;
                type = cast;
                cast = range;
                range = comp;
                comp = duration;
                duration = br.readLine();
                if(duration == null) {                    
                    description = description.concat(title);
                    if(title.endsWith(".")) description = description.concat("\r\n");
                    else description = description.concat(" ");
                    
                    description = description.concat(type);
                    if(type.endsWith(".")) description = description.concat("\r\n");
                    else description = description.concat(" ");
                    
                    description = description.concat(cast);
                    if(cast.endsWith(".")) description = description.concat("\r\n");
                    else description = description.concat(" ");
                    
                    description = description.concat(range);
                    if(range.endsWith(".")) description = description.concat("\r\n");
                    else description = description.concat(" ");
                    
                    description = description.concat(comp);
                    if(comp.endsWith(".")) description = description.concat("\r\n");
                    else description = description.concat(" ");
                    
                    break;
                }
            }
            
            File outputFile = new File("../" + dir.getName() + "/" + t + ".txt");
            
            title = cutSpaces(title);
            title = title.replaceAll(s, "\'");
            title = replaceOffending(title);
            t = title;
            
            description = description.replaceAll(s, "\'");
            description = closeGaps(description);
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile.getPath()))) {
                writer.write(description);
                writer.close();
            }
            
            if(duration == null) return;
            
            description = title + "\r\n";
            description = description.concat(type + "\r\n");
            description = description.concat(cast + "\r\n");
            description = description.concat(range + "\r\n");
            while(comp.contains("(") && !comp.contains(")")){
                comp = comp.concat(" ".concat(duration));
                duration = br.readLine();
            }
            description = description.concat(comp + "\r\n");
            description = description.concat(duration + "\r\n");
        }
    }
    
    private static String cutSpaces(String s){
        s = s.replaceAll(" ", "");
        int i = 1;
        while(i < s.length()){
            if(s.charAt(i) < 'a'){
                s = s.substring(0, i).concat(" ").concat(s.substring(i, s.length()));
                i++;
            }
            i++;
        }
        return s;
    }
    
    private static String replaceOffending(String s){
            s = s.replaceAll("the ", " the ");
            s = s.replaceAll("with ", " with ");
            s = s.replaceAll("of ", " of ");
            s = s.replaceAll("via ", " via ");
            if(!s.contains("Woodland"))
                s = s.replaceAll("and ", " and ");
            s = s.replaceAll("from ", " from ");
            s = s.replaceAll("without ", " without ");
            s = s.replaceAll("into ", " into ");
            if(!s.contains("into"))
                s = s.replaceAll("to ", " to ");
            if(!s.contains("Armor") && !s.contains("Major") && 
                    !s.contains("Minor") && !s.contains("Mirror")
                    && !s.contains("Color") && !s.contains("Meteor"))
                s = s.replaceAll("or ", " or ");
            return s;
    }
    
    private static String closeGaps(String s){
        int i = 0;
        int j = 1;
        int k = 2;
        if(s.charAt(j) == ' ' && s.charAt(i) != 'a' && s.charAt(i) != 'A' && s.charAt(i) != 'I')
            s = s.substring(i, i).concat(s.substring(k, s.length()));
        while(k < s.length()){
            if((s.charAt(i) == ' ' || s.charAt(i) == '\n') && s.charAt(k) == ' '){
                if(s.charAt(j) != 'a' && s.charAt(j) != 'A' && s.charAt(j) != 'I'){
                    s = s.substring(0, k).concat(s.substring(k+1, s.length()));
                }
            }
            i++; j++; k++;
        }
        return s;
    }
}
