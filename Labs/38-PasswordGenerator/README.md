# PasswordGenerator

Building an Password Generator Project.

## Source Code

```js
/*
    This lab is about building a random password generator.
*/

function generatePassword(passwordLength) {
  if (
    typeof passwordLength !== "number" ||
    Number.isNaN(passwordLength) ||
    passwordLength <= 0
  ) {
    return;
  }

  let generatedPassword = "";
  const sourcePassword =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  // The random character will be chosen by generating a random number that corresponds to the sourcePassword string index character.

  for (let i = 0; i < passwordLength; i++) {
    const min = 0,
      max = sourcePassword.length - 1;
    const randomIndex = Math.floor(Math.random() * (max - min) + 1) + min;
    generatedPassword += sourcePassword[randomIndex];
  }

  return generatedPassword;
}

// Invalid inputs.
//let password = generatePassword(null);
//console.log(`Generated password: ${password}`); // undefined

//password = generatePassword(undefined);
//console.log(`Generated password: ${password}`); // undefined

//password = generatePassword(NaN);
//console.log(`Generated password: ${password}`); // undefined

//password = generatePassword("12");
//console.log(`Generated password: ${password}`); // undefined

// valid inputs.
let password = generatePassword(12);
console.log(`Generated password: ${password}`);

password = generatePassword(8);
console.log(`Generated password: ${password}`);

password = generatePassword(5);
console.log(`Generated password: ${password}`);

password = generatePassword(3);
console.log(`Generated password: ${password}`);
```

## Output

![Image](https://github.com/user-attachments/assets/b36e399e-80d0-4d9f-9e36-f1e3ece6603c)
