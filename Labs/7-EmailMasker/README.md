# EmailMasker

Build a Email Masker Project.

## Source Code

```js
function maskEmail(email) {
  if (!email) {
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

let email = "mymaskedemail@email.com";
console.log(maskEmail(email));
email = "apple.pie@example.com";
console.log(maskEmail(email));
email = "freecodecamp@example.com";
console.log(maskEmail(email));
email = "info@test.dev";
console.log(maskEmail(email));
email = "user@domain.org";
console.log(maskEmail(email));
```

## Output

![Image]()
