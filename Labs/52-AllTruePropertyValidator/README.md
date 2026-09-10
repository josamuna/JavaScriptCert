# AllTruePropertyValidator

Building an All True Poject Validator Project.

## Source Code

```js
/*
    This lab is about building test a specific property of each object in 
    an array to see if it always has a truthy value or not. 

    For example, you could be asked to test one property of the objects in an array like the following:

    [{
        name: "Quincy",
        role: "Founder",
        isBot: false
    }, {
        name: "Naomi",
        role: "",
        isBot: false
    }, {
        name: "Camperbot",
        role: "Bot",
        isBot: true
    }]

    If you were asked to test the name property, in the objects of this array the property 
    name has the values of "Quincy", "Naomi", and "Camperbot", so it is always truthy.

    If you were asked to test the role property, the values are "Founder", "", and "Bot", 
    in this case "" is a falsy value, so the values are not always truthy.
*/

function truthCheck(collection, pre) {
  return pre;
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot",
);
```

## Output

![Image]()
