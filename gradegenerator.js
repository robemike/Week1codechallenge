function calculateGrade(mark){
    if(mark > 0 && mark < 100){
        if(mark > 79){
            return `A`
        }else if (mark >= 60 && mark <= 79){
            return `B`
        }else if (mark >= 50 && mark <= 59){
            return `C`
        }else if (mark >= 40 && mark <= 49){
            return `D`
        }else if (mark < 40){
            return `E`
        }
    }
}
let mark = prompt('Enter the students mark (between 0 and 100)');
mark = parseInt(mark, 10);

let grade = calculateGrade(mark);
console.log('Grade: ' + grade);
// calculateGrade()