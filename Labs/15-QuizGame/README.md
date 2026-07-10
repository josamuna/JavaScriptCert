# QuizGame

Build a Quiz Game Project.

## Source Code

```js
const questions = [
  {
    category: "Question 1.",
    question: "What is JavaScript?",
    choices: [
      "A. A markup language used to structure web pages.",
      "B. A high-level programming language used to create interactive web applications.",
      "C. A database management system.",
    ],
    answer:
      "B. A high-level programming language used to create interactive web applications.",
  },
  {
    category: "Question 2.",
    question: "Where can JavaScript be executed?",
    choices: [
      "A. Only in web browsers.",
      "B. Only on web servers.",
      "C. In web browsers and on servers using environments like Node.js.",
    ],
    answer:
      "C. In web browsers and on servers using environments like Node.js.",
  },
  {
    category: "Question 3.",
    question: "Which of the following is a primitive data type in JavaScript?",
    choices: ["A. Array", "B. Object", "C. Boolean"],
    answer: "C. Boolean",
  },
  {
    category: "Question 4.",
    question: "What is the difference between null and undefined?",
    choices: [
      "A. undefined means a variable has no assigned value, while null represents an intentional absence of value.",
      "B. null and undefined are exactly the same.",
      "C. null is used only for numbers.",
    ],
    answer:
      "A. undefined means a variable has no assigned value, while null represents an intentional absence of value.",
  },
  {
    category: "Question 5.",
    question: "What is a JavaScript object?",
    choices: [
      "A. A collection of key-value pairs used to store related data.",
      "B. A function that executes automatically.",
      "C. A special type of loop.",
    ],
    answer: "A. A collection of key-value pairs used to store related data.",
  },
  {
    category: "Question 6.",
    question:
      "Which statement correctly accesses the name property of the user object?",
    choices: ["A. user->name", "B. user.name", "C. user:name"],
    answer: "B. user.name",
  },
  {
    category: "Question 7.",
    question:
      "How do you add an age property with the value 30 to a person object?",
    choices: [
      "A. person(age) = 30;",
      "B. person.age = 30;",
      "C. person:add(age, 30);",
    ],
    answer: "B. person.age = 30;",
  },
  {
    category: "Question 8.",
    question: "What does JSON stand for?",
    choices: [
      "A. Java Syntax Object Notation.",
      "B. JavaScript Object Network.",
      "C. JavaScript Object Notation.",
    ],
    answer: "C. JavaScript Object Notation.",
  },
  {
    category: "Question 9.",
    question: "Which statement about JSON is true?",
    choices: [
      "A. JSON can contain functions.",
      "B. JSON is a text format used to exchange data and does not support functions.",
      "C. JSON allows comments and trailing commas.",
    ],
    answer:
      "B. JSON is a text format used to exchange data and does not support functions.",
  },
  {
    category: "Question 10.",
    question: "Which JavaScript method converts an object into a JSON string?",
    choices: ["A. JSON.parse()", "B. JSON.stringify()", "C. JSON.convert()"],
    answer: "B. JSON.stringify()",
  },
];

// Return a random question fromthe array passed as parameter.
function getRandomQuestion(questions) {
  if (!questions) {
    // Invalid array.
    return;
  }

  if (questions.length === 0) {
    // Empty array.
    return;
  }

  const min = 0,
    max = questions.length - 1;
  // generate a random number between min and max treshold.
  const random = Math.floor(Math.random() * (max - min) + 1) + min;
  // Return a question according to the selected question.
  return questions[random];
}

// Return a random answer to the selected question from the choices passed as parameter.
function getRandomComputerChoice(choices) {
  if (!choices) {
    // Invalid array.
    return;
  }

  if (choices.length === 0) {
    // Empty array.
    return;
  }

  const min = 0,
    max = choices.length - 1;
  // generate a random number between min and max treshold.
  const random = Math.floor(Math.random() * (max - min) + 1) + min;
  // Return a random answer according to the selected choice.
  return choices[random];
}

// Gives the answer to the question by telling the right one when a wrong is provided.
function getResults(question, computerChoice) {
  if (!question || Object.keys(question).length === 0) {
    // Null or empty Object
    return;
  }
  if (!computerChoice || computerChoice.trim() === "") {
    // Invalid computer choice (String input).
    return;
  }

  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

console.log("------------------ Invalid inputs -----------");
let question = getRandomQuestion(null);
console.log(question); // undefined.

let answer = getRandomComputerChoice(null);
console.log(answer); // undefined.

let result = getResults(question, answer);
console.log(result); // undefined.

question = getRandomQuestion([]);
console.log(question); // undefined.

answer = getRandomComputerChoice([]);
console.log(answer); // undefined.

result = getResults(question, answer);
console.log(result); // undefined.

console.log("------------------ Valid inputs --------------");
question = getRandomQuestion(questions);
console.log("QUESTION:\n========");
console.log(question);

answer = getRandomComputerChoice(questions[5].choices);
console.log(`COMPUTER CHOICE ANSWER:\n======================\n${answer}`);

result = getResults(question, answer);
console.log(`RESULT:\n======\n${result}`);
```

## Output

![Image](https://github.com/user-attachments/assets/03f3346d-3757-4e0f-97d4-b579b32844e2)
