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
