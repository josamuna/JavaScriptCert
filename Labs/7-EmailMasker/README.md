# EmailMasker

Build a Email Masker Project.

## Source Code

```js
function maskEmail(email) {
  if (!email || !email.includes("@")) {
    return "Invalid email address.";
  }
  let maskedEmail = "";
  const atIndex = email.indexOf("@");
  maskedEmail += email[0];
  const partOfEmailToReplace = email.slice(1, atIndex - 1);
  const maskedEmailText = "*".repeat(partOfEmailToReplace.length);
  const remainedEmail = email.slice(atIndex - 1);
  maskedEmail += maskedEmailText + remainedEmail;

  return maskedEmail;
}

let email = ""; // Empty email
console.log(
  `The email '${email}' has masked and becomes '${maskEmail(email)}'`,
);
email = "bademail"; // Bad email
console.log(
  `The email '${email}' has masked and becomes '${maskEmail(email)}'`,
);
email = "mymaskedemail@email.com";
console.log(
  `The email '${email}' has masked and becomes '${maskEmail(email)}'`,
);
email = "apple.pie@example.com";
console.log(
  `The email '${email}' has masked and becomes '${maskEmail(email)}'`,
);
email = "freecodecamp@example.com";
console.log(
  `The email '${email}' has masked and becomes '${maskEmail(email)}'`,
);
email = "info@test.dev";
console.log(
  `The email '${email}' has masked and becomes '${maskEmail(email)}'`,
);
email = "user@domain.org";
console.log(
  `The email '${email}' has masked and becomes '${maskEmail(email)}'`,
);
```

## Output

![Image](https://github.com/user-attachments/assets/a96f219c-08cc-4529-89d0-c34e7c06910c)
