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
  if (!Array.isArray(testScores) || testScores.length === 0) {
    return;
  }

  let averageScore = 0;

  for (const score of testScores) {
    averageScore += score;
  }

  averageScore /= testScores.length;

  return averageScore;
}

function getGrade(studentScore) {
  if (typeof studentScore !== "number" || Number.isNaN(studentScore)) {
    return;
  }

  if (studentScore < 0) {
    return;
  }

  if (studentScore === 100) {
    return "A+";
  } else if (studentScore >= 90 && studentScore <= 99) {
    return "A";
  } else if (studentScore >= 80 && studentScore <= 89) {
    return "B";
  } else if (studentScore >= 70 && studentScore <= 79) {
    return "C";
  } else if (studentScore >= 60 && studentScore <= 69) {
    return "D";
  } else if (studentScore >= 0 && studentScore <= 59) {
    return "F";
  }
}

// Internal function. Not needed to check input param.
function hasPassingGrade(score) {
  const grade = getGrade(score);

  switch (grade) {
    case "A+":
    case "A":
    case "B":
    case "C":
    case "D":
      return true;
    case "F":
      return false;
    default:
      return false;
  }
}

function studentMsg(scores, studentScore) {
  if (typeof studentScore !== "number" || Number.isNaN(studentScore)) {
    return;
  }

  if (!Array.isArray(scores) || scores.length === 0) {
    return;
  }

  if (studentScore < 0) {
    return;
  }

  const average = getAverage(scores);
  const grade = getGrade(studentScore);
  const isPassed = hasPassingGrade(studentScore);

  if (isPassed) {
    // Student passed.
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    // Student failed.
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

let studentMessage = studentMsg([], 37);
console.log(studentMessage); // undefined

studentMessage = studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], -2);
console.log(studentMessage); // undefined

studentMessage = studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37);
console.log(studentMessage); // Class average: 71.7. Your grade: F. You failed the course.

studentMessage = studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100);
console.log(studentMessage); // Class average: 50.8. Your grade: A+. You passed the course.

studentMessage = studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85);
console.log(studentMessage); // Class average: 48.25. Your grade: B. You passed the course.

studentMessage = studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75);
console.log(studentMessage); // Class average: 45.625. Your grade: C. You passed the course.
