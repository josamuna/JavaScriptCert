# StringInverter

Build a String Inverter Project.

## Source Code

```js
/*
    This lab is about building a simple string inverter that reverses the characters of a given string.
*/

function reverseString(str) {
  if (!str || typeof str !== "string") {
    return;
  }

  return str.split("").reverse().join("");
}

// Invalid input.
let strValue = reverseString(null);
console.log(strValue); // undefined.

strValue = reverseString(undefined);
console.log(strValue); // undefined.

strValue = reverseString(NaN);
console.log(strValue); // undefined.

strValue = reverseString("");
console.log(strValue); // undefined.

strValue = reverseString(10);
console.log(strValue); // undefined.

// Valid input.
strValue = reverseString("hello");
console.log(strValue); // olleh.

strValue = reverseString("Howdy");
console.log(strValue); // ydwoH.

strValue = reverseString("Greetings from Earth");
console.log(strValue); // htraE morf sgniteerG.
```

## Output

![Image](https://github.com/user-attachments/assets/aa660224-eca7-4145-8e50-640f2892c17b)
