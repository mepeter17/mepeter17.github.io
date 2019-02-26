package equipmentsorter;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

/**
 *
 * @author sirla
 */
public class EquipmentSorter {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws FileNotFoundException, IOException {
        
        File equipmentDir;
        equipmentDir = new File("../equipment");
        if(!equipmentDir.exists()) equipmentDir.mkdir();
        
        armor();
        container();
        food();
        gear();
        money();
        mount();
        mountEquipment();
        packs();
        services();
        tools();
        tradeGoods();
        vehiclesWater();
        weapons();
    }
    
    private static void descriptionSort(File dir, File file) throws FileNotFoundException, IOException{
        
        BufferedReader br;
        br = new BufferedReader(new FileReader(file));
        char c = 65533;
        String s = String.valueOf(c);
        
        String titleLine;
        while((titleLine = br.readLine()) != null){
            titleLine = titleLine.replaceAll(s, "'");
            
            String title = titleLine.substring(0, titleLine.indexOf("."));
            String cost = "";
            if(title.contains("(")){
                cost = title.substring(title.indexOf("(")+1, title.indexOf(")"));
                title = title.substring(0, title.indexOf("(")-1);
            }
            
            String description = titleLine.substring(titleLine.indexOf(".")+2);
            String line;
            while(!(line = br.readLine()).endsWith("."))
                description = description.concat(" " + line);
            description = description.concat(" " + line);
            
            description = description.replaceAll(s, "'");
            description = closeGaps(description);
            
            File[] fileList = dir.listFiles();
            String[] fileNames = new String[fileList.length];
            for(int i = 0; i < fileList.length; i++)
                fileNames[i] = fileList[i].getName().toLowerCase();
            
            int fileNum = -1;
            for(int i = 0; i < fileNames.length; i++)
                if(fileNames[i].contains(title.toLowerCase()))
                    fileNum = i;
            
            if(fileNum == -1){
                File outputFile = new File(dir.getPath() + "/" + title + ".txt");
                try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile.getPath()))) {
                    writer.write(title + "\r\n");
                    if(!cost.equals("")) writer.write("Cost: " + cost + "\r\n");
                    writer.write("Description: " + description + "\r\n");
                    writer.close();
                }
            }
            else{
                File outputFile = fileList[fileNum];
                if(outputFile.isDirectory()){
                    File[] outputFiles = outputFile.listFiles();
                    for(int i = 0; i < outputFiles.length; i++){
                        BufferedReader reader = new BufferedReader(new FileReader(outputFiles[i]));
                        String fileContent = "";
                        String l;
                        while((l = reader.readLine()) != null)
                            fileContent = fileContent.concat(l + "\r\n");
                        
                        try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFiles[i].getPath()))) {
                            writer.write(fileContent);
                            if(!cost.equals("")) writer.write("Cost: " + cost + "\r\n");
                            writer.write("Description: " + description + "\r\n");
                            writer.close();
                        }
                    }
                }
                else{
                    BufferedReader reader = new BufferedReader(new FileReader(outputFile));
                    String fileContent = "";
                    String l;
                    while((l = reader.readLine()) != null)
                        fileContent = fileContent.concat(l + "\r\n");

                    try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile.getPath()))) {
                        writer.write(fileContent);
                        if(!cost.equals("")) writer.write("Cost: " + cost + "\r\n");
                        writer.write("Description: " + description + "\r\n");
                        writer.close();
                    }
                }
            }
        }
    }
    
    private static void itemSort(File dir, File file, int[] divRef, String[] div) throws FileNotFoundException, IOException{
        BufferedReader br;
        br = new BufferedReader(new FileReader(file));
        
        String[] categories = br.readLine().split(" ");
        for(int i = 0; i < categories.length; i++)
            categories[i] = categories[i].replaceAll("_", " ");
        
        String s1 = br.readLine();
        String s2;
        boolean run = true;
        File subDir = null;
        while(run){
            run = ((s2 = br.readLine()) != null);
            if(!run) s2 = s1;
            char c = 65533;
            s2 = s2.replaceAll(String.valueOf(c), "—");
            
            if(!s1.contains("*") && s2.contains("*")){
                subDir = new File(dir.getPath() + "/" + s1);
                if(!subDir.exists()) subDir.mkdir();
            }
            else{
                String path = dir.getPath();
                if(s1.contains("*")) path = subDir.getPath();
                
                s1 = s1.replaceAll("\\*", "");
                
                String[] item = new String[categories.length];
                for(int i = 0; i < item.length; i++)
                    item[i] = "";
                String[] description = s1.split(" ");
                int iter = 0;
                int iterCat = 0;
                
                while(iter < description.length){
                    if(divRef[iterCat] == -1){
                        if(div[iterCat].equals("num")){
                            while(!isNum(description[iter]))
                                item[iterCat] = item[iterCat].concat(description[iter++] + " ");
                        }
                        else if(div[iterCat].equals("all")){
                            while(iter < description.length)
                                item[iterCat] = item[iterCat].concat(description[iter++] + " ");
                        }
                        else{
                            String[] ends = div[iterCat].split(",");
                            while(!inArray(description[iter], ends))
                                item[iterCat] = item[iterCat].concat(description[iter++] + " ");
                        }
                    }
                    else if(divRef[iterCat] == 0){
                        String[] possibilities = div[iterCat].split(",");
                        for(int i = 0; i < possibilities.length; i++){
                            String[] map = possibilities[i].split(" ");
                            if(description[iter].equals(map[0])){
                                for(int j = 0; j < Integer.parseInt(map[1]); j++)
                                    item[iterCat] = item[iterCat].concat(description[iter++] + " ");
                                break;
                            }
                        }
                    }
                    else{
                        for(int i = 0; i < divRef[iterCat]; i++)
                            item[iterCat] = item[iterCat].concat(description[iter++] + " ");
                    }
                    iterCat++;
                }
                
                
                
                File outputFile = new File(path + "/" + item[0].substring(0, item[0].length()-1)  + ".txt");
                try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile.getPath()))) {
                    for(int i = 0; i < categories.length; i++)
                        writer.write(categories[i] + ": " + item[i] + "\r\n");
                    writer.close();
                }
            }
            s1 = s2;
        }
    }
    
    private static void armor() throws IOException, FileNotFoundException{
        File armor;
        armor = new File("../_armor.txt");
        
        File armorDir;
        armorDir = new File("../equipment/armor");
        if(!armorDir.exists()) armorDir.mkdir();
        
        int[] armorDivsRef = {-1, 2, -1, 0, 1, -1};
        String[] armorDivs = {"num", null, "—,Str", "— 1,Str 2", null, "all"};
        
        itemSort(armorDir, armor, armorDivsRef, armorDivs);
    }
    
    private static void container() throws IOException, FileNotFoundException{
        File container;
        container = new File("../_containers.txt");
        
        File containerDir;
        containerDir = new File("../equipment/containers");
        if(!containerDir.exists()) containerDir.mkdir();
        
        int[] containerDivsRef = {-1, -1};
        String[] containerDivs = {"num", "all"};
        
        itemSort(containerDir, container, containerDivsRef, containerDivs);
    }
    
    private static void food() throws IOException, FileNotFoundException {
        File food;
        food = new File("../_food_drink_lodging.txt");
        
        File foodDir;
        foodDir = new File("../equipment/food_drink_lodging");
        if(!foodDir.exists()) foodDir.mkdir();
        
        int[] foodDivsRef = {-1, -1};
        String[] foodDivs = {"num", "all"};
        
        itemSort(foodDir, food, foodDivsRef, foodDivs);
    }
    
    private static void gear() throws IOException, FileNotFoundException {
        File gear;
        gear = new File("../_gear.txt");
        File gearDesc;
        gearDesc = new File("../_gear_descriptions.txt");
        
        File gearDir;
        gearDir = new File("../equipment/gear");
        if(!gearDir.exists()) gearDir.mkdir();
        
        int[] gearDivsRef = {-1, 2, -1};
        String[] gearDivs = {"num", null, "all"};
        
        itemSort(gearDir, gear, gearDivsRef, gearDivs);
        descriptionSort(gearDir, gearDesc);
    }
    
    private static void money() throws IOException, FileNotFoundException {
        File money;
        money = new File("../_money.txt");
        
        File moneyDir;
        moneyDir = new File("../equipment/money");
        if(!moneyDir.exists()) moneyDir.mkdir();
        
        int[] moneyDivsRef = {1, -1};
        String[] moneyDivs = {null, "all"};
        
        itemSort(moneyDir, money, moneyDivsRef, moneyDivs);
    }
    
    private static void mount() throws IOException, FileNotFoundException {
        File mounts;
        mounts = new File("../_mounts.txt");
        
        File mountsDir;
        mountsDir = new File("../equipment/mounts");
        if(!mountsDir.exists()) mountsDir.mkdir();
        
        int[] mountsDivsRef = {-1, 2, 2, 2};
        String[] mountsDivs = {"num", null, null, null};
        
        itemSort(mountsDir, mounts, mountsDivsRef, mountsDivs);
    }
    
    private static void mountEquipment() throws IOException, FileNotFoundException {
        File mountEquipment;
        mountEquipment = new File("../_mount_equipment.txt");
        
        File mountEquipmentDir;
        mountEquipmentDir = new File("../equipment/mount_equipment");
        if(!mountEquipmentDir.exists()) mountEquipmentDir.mkdir();
        
        int[] mountEquipmentDivsRef = {-1, 2, -1};
        String[] mountEquipmentDivs = {"num", null, "all"};
        
        itemSort(mountEquipmentDir, mountEquipment, mountEquipmentDivsRef, mountEquipmentDivs);
    }
    
    private static void packs() throws IOException, FileNotFoundException {
        File packs;
        packs = new File("../_packs.txt");
        
        File packsDir;
        packsDir = new File("../equipment/packs");
        if(!packsDir.exists()) packsDir.mkdir();
        
        descriptionSort(packsDir, packs);
    }
    
    private static void services() throws IOException, FileNotFoundException {
        File services;
        services = new File("../_services.txt");
        
        File servicesDir;
        servicesDir = new File("../equipment/services");
        if(!servicesDir.exists()) servicesDir.mkdir();
        
        int[] servicesDivsRef = {-1, -1};
        String[] servicesDivs = {"num", "all"};
        
        itemSort(servicesDir, services, servicesDivsRef, servicesDivs);
    }
    
    private static void tools() throws IOException, FileNotFoundException {
        File tools;
        tools = new File("../_tools.txt");
        File toolsDesc;
        toolsDesc = new File("../_tool_descriptions.txt");
        
        File toolsDir;
        toolsDir = new File("../equipment/tools");
        if(!toolsDir.exists()) toolsDir.mkdir();
        
        int[] toolsDivsRef = {-1, 2, -1};
        String[] toolsDivs = {"num", null, "all"};
        
        itemSort(toolsDir, tools, toolsDivsRef, toolsDivs);
        descriptionSort(toolsDir, toolsDesc);
    }
    
    private static void tradeGoods() throws IOException, FileNotFoundException {
        File tradeGoods;
        tradeGoods = new File("../_trade_goods.txt");
        
        File tradeGoodsDir;
        tradeGoodsDir = new File("../equipment/trade_goods");
        if(!tradeGoodsDir.exists()) tradeGoodsDir.mkdir();
        
        int[] tradeGoodsDivsRef = {2, -1};
        String[] tradeGoodsDivs = {null, "all"};
        
        itemSort(tradeGoodsDir, tradeGoods, tradeGoodsDivsRef, tradeGoodsDivs);
    }
    
    private static void vehiclesWater() throws IOException, FileNotFoundException {
        File vehicles;
        vehicles = new File("../_vehicles_water.txt");
        
        File vehiclesDir;
        vehiclesDir = new File("../equipment/vehicles_water");
        if(!vehiclesDir.exists()) vehiclesDir.mkdir();
        
        int[] vehiclesDivsRef = {-1, 2, -1};
        String[] vehiclesDivs = {"num", null, "all"};
        
        itemSort(vehiclesDir, vehicles, vehiclesDivsRef, vehiclesDivs);
    }
    
    private static void weapons() throws IOException, FileNotFoundException {
        File weapons;
        weapons = new File("../_weapons.txt");
        
        File weaponsDir;
        weaponsDir = new File("../equipment/weapons");
        if(!weaponsDir.exists()) weaponsDir.mkdir();
        
        int[] weaponsDivsRef = {-1, 2, 2, 2, -1};
        String[] weaponsDivs = {"num", null, null, null, "all"};
        
        itemSort(weaponsDir, weapons, weaponsDivsRef, weaponsDivs);
    }
    
    private static boolean isNum(String s){
        if(s.charAt(0) < '0' || s.charAt(0) > '9') return false;
        if(s.charAt(s.length()-1) < '0' || s.charAt(s.length()-1) > '9') return false;
        return true;
    }
    
    private static boolean inArray(String s, String[] sA){
        int i = 0;
        while(i < sA.length)
            if(s.equals(sA[i++]))
                return true;
        return false;
    }
    
    private static String closeGaps(String s){
        int i = 0;
        int j = 1;
        int k = 2;
        if(s.charAt(j) == ' ' && s.charAt(i) != 'a' && s.charAt(i) != 'A' && s.charAt(i) != 'I')
            s = s.substring(i, i+1).concat(s.substring(k, s.length()));
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
