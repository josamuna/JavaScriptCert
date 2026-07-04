# WildlifeTracker

Build a Wildlife Tracker Project.

## Source Code

```js
const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true,
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true,
};

const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

const getProperty = (animal, propertyName) => {
  return animal[propertyName];
};

console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));
```

## Output

![Image](https://github.com/user-attachments/assets/9d31b509-850d-4c81-945e-7dce842ca634)
