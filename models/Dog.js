class Dog{
    name;
    habitatSize;
    energy;
    independence;
    trainability;
    kids;
    otherDogs;
    temperment;
    loyalty;
    size;
    longevity;
    climate;
    image; 
    constructor(name, scoringObj, image){
        this.name = name;
        let {habitatSize, energy, independence,
        trainability, kids, otherDogs, temperment,
        loyalty, size, longevity, climate} = scoringObj;
        this.habitatSize = habitatSize;
        this.energy = energy;
        this.independence = independence;
        this.trainability = trainability;
        this.kids = kids;
        this.otherDogs = otherDogs;
        this.temperment = temperment;
        this.loyalty = loyalty;
        this.size = size;
        this.longevity = longevity;
        this.climate = climate;
        this.image = image;
    }
}

export default Dog;