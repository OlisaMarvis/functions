// function to calculate student's score and grade compared to the total score

// Parameters
// students's score, total possible score
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

// method one

function result(sScore, totalScore){
    output = (sScore/totalScore) * 100
     
    if(output >=90 && output <=100) {
        return (`You got an A (${output.toFixed(0)}%)`)
    } else if(output >=80 && output <=89){
        return (`You got a B (${output.toFixed(0)}%)`)
    } else if(output >=70 && output <=79){
        return (`You got a C (${output.toFixed(0)}%)`)
    } else if(output >=60 && output <=69){
        return (`You got a D (${output.toFixed(0)}%)`)
    } else if(output >=0 && output <=59){
        return (`You got an F (${output.toFixed(0)}%)`)
    }
    else {
        return (`You don't have a score`)
    }
}
let yourresult = result(29, 30)
console.log(yourresult)


//method two

let gradeCalc = function(score, totalScore){
    let percent = (score/totalScore) * 100
    let letterGrade = ''

    if(percent >= 90){
        letterGrade = 'A'
    } else if(percent >=80){
        letterGrade = 'B'
    } else if(percent >=70){
        letterGrade = 'C'
    } else if(percent >= 60){
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percent})`
}
let result = gradeCalc(12, 20)
console.log(result)