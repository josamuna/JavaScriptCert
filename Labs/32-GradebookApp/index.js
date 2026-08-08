/*
    This lab is about set grade according to the student average score.
    100	"A+"
    90 - 99	"A"
    80 - 89	"B"
    70 - 79	"C"
    60 - 69	"D"
    0 - 59	"F"
*/

function getAverage(testScores) {
  let averageScore = 0;

  return averageScore;
}

function getGrade(studentScore) {
  let gradeLetter = "";

  return gradeLetter;
}

function hasPassingGrade(score) {
  return false;
}

function studentMsg(scores, studentScore) {
  let formattedMsg = "";

  return formattedMsg;
}

// Valid inputs.
let studentMessage = studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37);
console.log(studentMessage); // Class average: 71.7. Your grade: F. You failed the course.

studentMessage = studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100);
console.log(studentMessage); // Class average: 50.8. Your grade: A+. You passed the course.

studentMessage = studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85);
console.log(studentMessage); // Class average: 48.25. Your grade: B. You passed the course.

studentMessage = studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75);
console.log(studentMessage); // Class average: 45.625. Your grade: C. You passed the course.
