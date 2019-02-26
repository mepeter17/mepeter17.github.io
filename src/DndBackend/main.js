//const Armor = require('./DndCharacterStorage/Equipment/armor');
//const Weapon = require('./DndCharacterStorage/Equipment/weapon');
//const Container = require('./DndCharacterStorage/Equipment/container');
//const FoodDrinkLodging = require('./DndCharacterStorage/Equipment/foodDrinkLodging');
//const Gear = require('./DndCharacterStorage/Equipment/gear');
//const Money = require('./DndCharacterStorage/Equipment/money');
//const MountEquipment = require('./DndCharacterStorage/Equipment/mountEquipment');
//const Mount = require('./DndCharacterStorage/Equipment/mount');
//const Pack = require('./DndCharacterStorage/Equipment/pack');
//const Service = require('./DndCharacterStorage/Equipment/service');
//const Tool = require('./DndCharacterStorage/Equipment/tool');
//const TradeGood = require('./DndCharacterStorage/Equipment/tradeGood');
//const VehicleWater = require('./DndCharacterStorage/Equipment/vehicleWater');
//const Spell = require('./DndCharacterStorage/Spells/spell');
//const Alignment = require('./DndCharacterStorage/CharacterDetails/alignment');
//const HeightAndWeight = require('./DndCharacterStorage/CharacterDetails/heightAndWeight');
//const Language = require('./DndCharacterStorage/CharacterDetails/language');
//const Race = require('./DndCharacterStorage/Races/race');
//const RaceFake = require('./DndCharacterStorage/Races/race_1');
//const Class = require('./DndCharacterStorage/Classes/class');
//const StorageBank = require('./DndCharacterStorage/storageBank');
//const Character = require('./DndCharacterStorage/character');

//var myArmor = new Armor("Studded leather");
//console.log(myArmor);
//var otherArmor = new Armor("Plate");
//console.log(otherArmor);
//var thirdArmor = new Armor("Shield");
//console.log(thirdArmor);
//
//var myWeapon = new Weapon("Longsword");
//console.log(myWeapon);
//var otherWeapon = new Weapon("Light Hammer");
//console.log(otherWeapon);
//var thirdWeapon = new Weapon("Crossbow, heavy");
//console.log(thirdWeapon);
//
//var myContainer = new Container("Bottle");
//console.log(myContainer);
//var otherContainer = new Container("Pot, iron");
//console.log(otherContainer);
//
//var myFood = new FoodDrinkLodging("Bread, loaf");
//console.log(myFood);
//var otherFood = new FoodDrinkLodging("Comfortable", "Inn stay (per day)");
//console.log(otherFood);
//
//var myGear = new Gear("Blanket");
//console.log(myGear);
//var otherGear = new Gear("Totem");
//console.log(otherGear);
//
//var myMoney = new Money("Monk");
//console.log(myMoney);
//var otherMoney = new Money("Fighter");
//console.log(otherMoney);
//
//console.log("Monk 1: ", myMoney.randomStartingMoney());
//console.log("Monk 2: ", myMoney.randomStartingMoney());
//console.log("Monk 3: ", myMoney.randomStartingMoney());
//console.log("Fighter 1: ", otherMoney.randomStartingMoney());
//console.log("Fighter 2: ", otherMoney.randomStartingMoney());
//console.log("Fighter 3: ", otherMoney.randomStartingMoney());
//
//var myMountEquipment = new MountEquipment("Chariot");
//console.log(myMountEquipment);
//var otherMountEquipment = new MountEquipment("Military", "Saddle");
//console.log(otherMountEquipment);
//
//var myMount = new Mount("Elephant");
//console.log(myMount);
//var otherMount = new Mount("Pony");
//console.log(otherMount);
//
//var myPack = new Pack("Dungeoneer's Pack");
//console.log(myPack);
//var otherPack = new Pack("Priest's Pack");
//console.log(otherPack);
//
//var myService = new Service("Messenger");
//console.log(myService);
//var otherService = new Service("Untrained", "Hireling");
//console.log(otherService);
//
//var myTool = new Tool("Poisoner's kit");
//console.log(myTool);
//var otherTool = new Tool("Three-Dragon Ante set");
//console.log(otherTool);
//
//var myTradeGood = new TradeGood("5 sp");
//console.log(myTradeGood);
//var otherTradeGood = new TradeGood("3 gp");
//console.log(otherTradeGood);
//
//var myVehicle = new VehicleWater("Warship");
//console.log(myVehicle);
//var otherVehicle = new VehicleWater("Longship");
//console.log(otherVehicle);
//
//var mySpell = new Spell("Cure Wounds");
//console.log(mySpell);
//var otherSpell = new Spell("True Strike");
//console.log(otherSpell);
//var thirdSpell = new Spell("Fireball");
//console.log(thirdSpell);
//
//var myAlignment = new Alignment("Lawful Good");
//console.log(myAlignment);
//var otherAlignment = new Alignment("Chaotic Neutral");
//console.log(otherAlignment);
//
//var myHeightAndWeight = new HeightAndWeight("Gnome");
//console.log(myHeightAndWeight);
//var otherHeightAndWeight = new HeightAndWeight("Wood Elf");
//console.log(otherHeightAndWeight);
//
//console.log("Gnome 1: ", myHeightAndWeight.randomHeightandWeight());
//console.log("Gnome 2: ", myHeightAndWeight.randomHeightandWeight());
//console.log("Gnome 3: ", myHeightAndWeight.randomHeightandWeight());
//console.log("Wood Elf 1: ", otherHeightAndWeight.randomHeightandWeight());
//console.log("Wood Elf 2: ", otherHeightAndWeight.randomHeightandWeight());
//console.log("Wood Elf 3: ", otherHeightAndWeight.randomHeightandWeight());
//
//var myLanguage = new Language("Goblin");
//console.log(myLanguage);
//var otherLanguage = new Language("Deep Speech");
//console.log(otherLanguage);
//var thirdLanguage = new Language("Sylvan");
//console.log(thirdLanguage);
//
//var myRace = new Race("Hill Dwarf");
//console.log(myRace);
//var otherRace = new Race("Wood Elf");
//console.log(otherRace);
//var thirdRace = new Race("Dark Elf");
//console.log(thirdRace);
//var fourthRace = new Race("Elf");
//console.log(fourthRace);
//
//var myClass = new Class("Barbarian");
//console.log(myClass);
//var otherClass = new Class("Bard");
//console.log(otherClass);
//
//var myStorageBank = new StorageBank();
//var bardSpells = myStorageBank.getSpellList("Bard");
//console.log("BARD SPELLS: ", bardSpells);
//var paladinLvl3Spells = myStorageBank.getSpellList("Paladin", 3);
//console.log("PALADIN LVL 3 SPELLS: ", paladinLvl3Spells);
//
//var myCharacter = new Character("Bob", myRace, myClass);
//console.log(myCharacter);
//var myCharWeapons = myStorageBank.getWeaponList(myCharacter);
//console.log(myCharWeapons);
//var myCharArmor = myStorageBank.getArmorList(myCharacter);
//console.log(myCharArmor);
//
//var otherCharacter = new Character("Jane", otherRace, otherClass);
//console.log(otherCharacter);
//var otherCharWeapons = myStorageBank.getWeaponList(otherCharacter);
//console.log(otherCharWeapons);
//var otherCharArmor = myStorageBank.getArmorList(otherCharacter);
//console.log(otherCharArmor);
//
//myCharacter.setStats(17, 14, 15, 8, 10, 11);
//myCharacter.setAlignment("Chaotic Neutral");
//myCharacter.addExp(350);
//myCharacter.setBackstory("I'm a cool guy.");
//myCharacter.addLanguage("Gnomish");
//myCharacter.setAge(55);
//var hw = new HeightAndWeight(myCharacter.race.name).randomHeightandWeight();
//myCharacter.setHeight(hw[0]);
//myCharacter.setWeight(hw[1]);
//myCharacter.setEyeColor("Grey");
//myCharacter.setSkinColor("Pale");
//myCharacter.setHairColor("Brown");
//myCharacter.takeDamage(9);
//myCharacter.heal(4);
//myCharacter.addWeapon(myCharWeapons[1]);
//myCharacter.addWeapon(myCharWeapons[5]);
//console.log(myCharacter.getWeapons());
//myCharacter.removeWeapon(myCharWeapons[1]);
//myCharacter.addArmor(myCharArmor[2]);
//console.log(myCharacter);
//
//console.log("_________________________\n_________________________");
//myCharacter.writeToFile("Char 1");
//
//var newCharacter = new Character();
//console.log(newCharacter);
//console.log("_________________________\n_________________________");
//newCharacter.readFromFile("Char 1");
//console.log(newCharacter);
//console.log("_________________________\n_________________________");
//if(JSON.stringify(myCharacter) === JSON.stringify(newCharacter))
//    console.log("Same");
//else
//    console.log("Not Same");
  
//var fakeRace = new RaceFake("Barbarian");