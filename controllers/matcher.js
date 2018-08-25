const Animals = require ('../models/breeds');
const Survey= require('../models/userSurvey');
var breeds = new Animals();
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let keys = Object.keys(breeds.dogs[0]);
keys.shift();
keys.pop();




const createScorecard = (form) =>{
    let survey = new Survey(form);
    let singleScore = [];
    let overallScores = [];
    let reducedScore = 0;
    
    console.log(keys);
    for(var i = 0; i < breeds.dogs.length; i++){
        let dog = breeds.dogs[i];
        console.log("+++++++++++")
        console.log(dog.name);
        for(var j = 0; j < keys.length; j++){
            // Start building a match score
            let score = Math.abs(survey[keys[j]] - dog[keys[j]]);
            score = Number.parseInt(score.toFixed(2));
            singleScore.push(score);
            console.log(`Dog: ${dog[keys[j]]}`);
            console.log(`Survey: ${survey[keys[j]]}`);
            console.log(`${keys[j]} score: ${score}`);
            
        }
        // console.log(singleScore);
        // overallScores.push(singleScore);
        console.log('Reduced Value');
        reducedScore = singleScore.reduce(reducer)
        console.log(reducedScore);
        overallScores.push(reducedScore);
        breeds.dogs[i].matchScore = reducedScore;
        singleScore = [];
    }
    
    console.log(overallScores);
    // What the min
    console.log(Math.min(...overallScores));
    // Whats the index of the min
    let indexOfMin = overallScores.indexOf(Math.min(...overallScores))
    console.log();
    // what dog is there
    console.log(breeds.dogs[indexOfMin]);
    return indexOfMin;
};



module.exports = {
    createScorecard: createScorecard

}