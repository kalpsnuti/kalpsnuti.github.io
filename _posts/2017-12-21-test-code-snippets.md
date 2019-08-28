---
layout: post
title: "code snippet test"
date: 2017-12-21
desc: "Quick test on writing code snippets in a blog post"
keywords: "Jalpc,Jekyll,gh-pages,website,blog,easy"
categories: [HTML]
tags: [Markdown, Snippets]
icon: icon-html
---

![India](/static/assets/img/flags/India.png)
The great work is over
Now we will test some [GFM] & [kramdown] & [emoji].

Task List

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] ~~this~~ is an incomplete item

This is <span style="color: red">written in red</span>.

> a blockquote

- Item one

* Item two

- Item three

1. One
2. Two
3. Three

| Header1 | Header2 | Header3 |
| :------ | :-----: | ------: |
| cell1   |  cell2  |   cell3 |
| cell4   |  cell5  |   cell6 |

|----
| cell1 | cell2 | cell3 |
| cell4 | cell5 | cell6 |
|
| Foot1 | Foot2 | Foot3

:pray:&nbsp;&nbsp;Thanks&nbsp;&nbsp;:thumbsup:

---

This is a raw snippet:

```
hello world
123
This is a text snippet
```

This is a JavaScript snippet:

```
const add = (a, b) => a + b
const minus = (a, b) => a - b

console.log(add(100,200))  // 300
console.log(minus(100,200))  // -100
```

This is a Python snippet:

```
def say_hello():
    print("hello world!")

say_hello()   // "hello world!"
```

---

Side note comment: applied a bug fix similar to [this commit](https://github.com/Atlas7/atlas7.github.io/commit/6659f4a47f6ec66987adb0f683a9c6f3842252ae#diff-818954a41dbfb01af70050a459c603b9) to ensure code snippet does not collapse unexpectly upon clicking on it. This issue is tracked [here](https://github.com/jarrekk/Jalpc/issues/97).

[gfm]: https://guides.github.com/features/mastering-markdown/ "GitHub Flavored Markdown"
[kramdown]: https://kramdown.gettalong.org/
[emoji]: https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md
