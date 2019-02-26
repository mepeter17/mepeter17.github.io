export default class CommonDataManager
{
    static myInstance = null;

    _class = null;
    _race = null;

    _languages = "";
    _race_bonuses = "Race not yet selected";

    _important_stats = "Class not yet selected";
    _recommended_stats = "";
    _alternative_stats = [];

    _speed = "20 ft";
    _iniative = "0";
    _ac = 10;
    _hp = 12;

    _alignment = null;

    _stats = "empty";
    _cats = "empty";

    _gender = null;
    _name = "";
    _age = "";
    _ft = "";
    _in = "";
    _lbs = "";
    _bio = "";

    _gold = 100;

    _available_weapons = [{name:"Great Axe",price: 30}, {name:"Filler1", price:20}, {name:"Filler_2",price:3}];
    _purchased_weapons = [];

    _available_armor = [{name:"Cool Armor",price: 30}, {name:"Not Rad Armor", price:20}, {name:"Muffin Mask",price:3}];
    _purchased_armor = [];

    _available_other = [{name:"Nift Nick Nack",price: 10}, {name:"Yugioh Card", price:5}, {name:"Human Tears",price:1}];
    _purchased_other = [];

    _max_spells0 = 2;
    _available_spells0 = [{name:"Wimpo Sauce"}, {name:"Diabetes"}, {name:"Nose Flute Magic"}];
    _spells0 = [];

    _max_spells1 = 1;
    _available_spells1 = [{name:"Omegatron Delux"}, {name:"Super Spicy Caserole"}];
    _spells1 = [];

    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }

    static gi() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }

    getStats() {
        return this._stats;
    }

    setStats(stats) {
        this._stats = stats;
    }

    getCats()
    {
      return this._cats;
    }

    setCats(cats)
    {
      this._cats = cats;
    }
}
