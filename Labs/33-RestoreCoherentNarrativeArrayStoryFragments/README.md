# RestoreCoherentNarrativeArrayStoryFragments

Build a Restore a Coherent Narrative from an Array of Story Fragments App Project.

## Source Code

```js
/*
    This lab is about restoring a coherent narrative from a corrupted Array of story fragments.
*/

const shuffledFragments = [
  {
    id: 15,
    text: "and, after a time, passed the place where the Hare was sleeping.",
  },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  {
    id: 11,
    text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
  },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  {
    id: 6,
    text: "The Hare was much amused at the idea of running a race with the Tortoise,",
  },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(fragments) {
  if (!Array.isArray(fragments)) {
    return;
  }

  let newFragments = [];

  for (let i = 0; i < fragments.length; i++) {
    if (fragments[i]) {
      newFragments.push({ id: fragments[i].id, text: fragments[i].text });
    } else {
      console.log("[COMPACTED]");
    }
  }

  return newFragments;
}

function sortFragments(fragments) {
  let sortedFragments = [...fragments];

  for (let i = 0; i < sortedFragments.length; i++) {
    for (let j = i; j < sortedFragments.length; j++) {
      if (sortedFragments[i].id > sortedFragments[j].id) {
        const temp = sortedFragments[i];
        sortedFragments[i] = sortedFragments[j];
        sortedFragments[j] = temp;
      }
    }
  }

  return sortedFragments;
}

function dedupeFragments(sortedFragments) {
  let notDuplicateFragments = [];
  let isNextIteration = true;

  for (let i = 0; i < sortedFragments.length; i++) {
    for (let j = 0; j < notDuplicateFragments.length; j++) {
      if (notDuplicateFragments[j].id === sortedFragments[i].id) {
        isNextIteration = false;
        console.log(`[DEDUPED] for id ${sortedFragments[i].id}`);
        break;
      } else {
        isNextIteration = true;
      }
    }

    if (isNextIteration) {
      notDuplicateFragments.push({
        id: sortedFragments[i].id,
        text: sortedFragments[i].text,
      });
    }
  }

  return notDuplicateFragments;
}

function fillMissingFragments(sortedFragments) {
  let missingFragments = [];

  for (let i = 0; i < sortedFragments.length; i++) {
    const currentFragment = sortedFragments[i];

    missingFragments.push(currentFragment);

    if (i < sortedFragments.length - 1) {
      const nextFragment = sortedFragments[i + 1];

      for (
        let missingId = currentFragment.id + 1;
        missingId < nextFragment.id;
        missingId++
      ) {
        missingFragments.push({ id: missingId, text: "[...]" });

        console.log(`[FILLED] Missing fragment with id ${missingId}`);
      }
    }
  }
  assembleStory;

  return missingFragments;
}

function assembleStory(sortedFragments) {
  let fragmentText = "";

  for (let index = 0; index < sortedFragments.length; index++) {
    if ((index + 1) % sortedFragments.length !== 0) {
      // not last index
      fragmentText = fragmentText + sortedFragments[index].text + "\n";
    } else {
      // last index
      fragmentText += sortedFragments[index].text;
    }
  }

  return fragmentText;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

const sortedFragments = sortFragments(compactedShuffledFragments);

const dedupedFragments = dedupeFragments(sortedFragments);

const filledFragments = fillMissingFragments(dedupedFragments);

console.log(assembleStory(filledFragments));
```

## Output

![Image](https://github.com/user-attachments/assets/ccf7f069-7891-4f8b-a704-55aa8e3008f1)
