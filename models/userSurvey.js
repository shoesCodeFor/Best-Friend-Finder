const Survey = class {
    constructor(formObject){
        this.habitatSize = formObject.habitatSize;
        this.energy = formObject.energy;
        this.independence = formObject.independence;
        this.trainability = formObject.trainability;
        this.kids = formObject.kids;
        this.otherDogs = formObject.otherDogs;
        this.temperment = formObject.temperment;
        this.loyalty = formObject.loyalty;
        this.size = formObject.size;
        this.longevity = formObject.longevity;
        this.climate = formObject.climate;
    }
}

module.exports = Survey;