# HTMLEntityConverter

Implement a HTML Entity Converter Project.

## Source Code

```js
/*
    This lab is about converting converting special characters in a string with their corresponding HTML entities. 
*/

function convertHTML(strValue) {
  if (!strValue || typeof strValue !== "string") {
    return;
  }

  let htmlConverted = "";
  const stringTemplate = `&<>"'`;

  for (let i = 0; i < strValue.length; i++) {
    switch (strValue[i]) {
      case stringTemplate[0]: // &
        htmlConverted += "&amp;";
        break;
      case stringTemplate[1]: // <
        htmlConverted += "&lt;";
        break;
      case stringTemplate[2]: // >
        htmlConverted += "&gt;";
        break;
      case stringTemplate[3]: // "
        htmlConverted += "&quot;";
        break;
      case stringTemplate[4]: // '
        htmlConverted += "&apos;";
        break;
      default:
        htmlConverted += strValue[i];
        break;
    }
  }
  return htmlConverted;
}

// Invalid inputs.
let htmlValue = convertHTML(null);
console.log(htmlValue); // undefined

htmlValue = convertHTML(undefined);
console.log(htmlValue); // undefined

htmlValue = convertHTML("");
console.log(htmlValue); // undefined

htmlValue = convertHTML(100);
console.log(htmlValue); // undefined

// Valid inputs.
htmlValue = convertHTML("Dolce & Gabbana");
console.log(htmlValue); // Dolce &amp; Gabbana

htmlValue = convertHTML("Hamburgers < Pizza < Tacos");
console.log(htmlValue); // Hamburgers &lt; Pizza &lt; Tacos

htmlValue = convertHTML("Sixty > twelve");
console.log(htmlValue); // Sixty &gt; twelve

htmlValue = convertHTML('Stuff in "quotation marks"');
console.log(htmlValue); //Stuff in &quot;quotation marks&quot;

htmlValue = convertHTML("Schindler's List");
console.log(htmlValue); // Schindler&apos;s List

htmlValue = convertHTML("<>");
console.log(htmlValue); // &lt;&gt;

htmlValue = convertHTML("abc");
console.log(htmlValue); // abc
```

## Output

![Image](https://github.com/user-attachments/assets/505560a6-8da8-4070-b26b-ad156fcb21da)
