# Data examples

**Here are some examples of the data this app stores and the kind of messages it sends over. This is a good place to understand how the app works.**

The app keeps a long append log with all the versions of the text.

A version includes:

- The author
- The text
- A talk section, where the author can comment on parts or follow up comments from previous version's talks.

The idea is that the UI can rebuild the present state with two elements:

- A reduction of the log
- The live editing draft (contains the text you are suggesting and also comments you just added)

So when I open the page I start writing, and I can see how that differs to the reduction of the past versions, and I can also add talk comments/annotations that can optionally piggyback on past talk comments.

- Unique ids are used to identify versions (example: 9u6wgASevJ).
- Here's a UUID generator and colission chance calculator: https://zelark.github.io/nano-id-cc/
- Talk items derive their ids from version ids (example: 9u6wgASevJ.1 -- Notice how we do .1, .2, .3, etc)

## The data log stored in local storage

```js
const log = {
  versions: [
    {
      uuid: "9u6wgASevJ",
      shared: "2020-10-29T09:32:20Z",
      author: "turtle",
      text:
        "For all its matorial advantages, the sedentary life has left us edgy, unfulfilled. Even after 400 generations in villages and cities, we haven’t forgotten. The open road still softly calls, like a nearly forgotten song of childhood.",
    },
    {
      anchor: ["9u6wgASevJ"], // You can anchor a version to multiple parents to say it derives from those
      uuid: "Bk7cmNseNv",
      shared: "2020-10-29T11:12:00Z",
      author: "puffin",
      text:
        "For all its material advantages, the sedentary life has left us edgy, unfulfilled. Even after 400 generations in villages and cities, we haven’t forgotten. The open road still softly calls, like a nearly forgotten song of childhood.",
    },
  ],

  talk: [
    {
      uuid: "9u6wgASevJ.1",
      // Anchors are optional. They define what we're talking about. Here we're talking about a specific fragment in the text
      anchor: [0, 31],
      text: "By material I mean, you get to be warm and eat food everyday.",
    },
    {
      uuid: "Bk7cmNseNv.1",
      anchor: [12, 20],
      text: "You had a typo here. I corrected 'matorial' -> 'material'.",
    },
    {
      uuid: "Bk7cmNseNv.2",
      anchor: "9u6wgASevJ.1", // Here we're replying to a specific comment
      text: "By material I mean, you get to be warm and eat food everyday.",
    },
  ],
};
```

## The data shared in the link

All this will be stringified and compressed, and attached to the share URL. That's how the recipient gets it and it gets automatically appended to their local storage history.

```js
const dataSharedInLink = {
  uuid: "Bk7cmNseNv",
  shared: "2020-10-29T11:12:00Z",
  author: "puffin",

  // The recipient will get this text as a version appended to their local versions history
  newText:
    "For all its material advantages, the sedentary life has left us edgy, unfulfilled. Even after 400 generations in villages and cities, we haven’t forgotten. The open road still softly calls, like a nearly forgotten song of childhood.",

  // The recipient will get these talk items appended to their local talk history
  talk: [
    {
      anchor: [12, 20],
      text: "You had a typo here. I corrected 'matorial' -> 'material'.",
    },
    {
      anchor: "9u6wgASevJ.1",
      text: "By material I mean, you get to be warm and eat food everyday.",
    },
  ],
};
```

It's important to notice that, once you click on the "get share link" button, you no longer can edit that version or edit/remove your comments in that version. This is to avoid inconsistencies: **once a link exists in the clipboard, that version becomes immutable.**
