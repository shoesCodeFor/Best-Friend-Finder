const Animals = require ('../models/breeds');
const Survey= require('../models/userSurvey');
var breeds = new Animals();

var testForm = {
    habitatSize:10,
    energy:8,
    'independence':6,
    'trainability':6,
    'kids':4,
    'otherDogs':6,
    'temperment':9,
    'loyalty':6,
    'size':4,
    'longevity':4,
    'climate':4
}


const createScorecard = (form) =>{
    let survey = new Survey(form);
    let overallScores = [];
    let singleScore = [];
    let keys = Object.keys(breeds.dogs[0]);
    keys.shift();
    keys.pop();
    console.log(keys);
    for(var i = 0; i < breeds.dogs.length; i++){
        let dog = breeds.dogs[i];
        console.log("+++++++++++")
        console.log(dog.name);
        for(var j = 0; j < keys.length; j++){
            // Start building a match score
            let score = Math.abs(survey[keys[j]] - dog[keys[j]]);
            
            singleScore.push(score);
            console.log(`Dog: ${dog[keys[j]]}`);
            console.log(`Survey: ${survey[keys[j]]}`);
            console.log(`${keys[j]} score: ${score}`);
            
        }
        // console.log(singleScore);
        overallScores.push(singleScore);
    }
};

createScorecard(testForm);


module.exports = {
    createScorecard: createScorecard

}