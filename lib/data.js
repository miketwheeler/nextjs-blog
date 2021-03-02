const date = new Date();
const options = { year: "numeric", month: "long", day: "numeric" };

export const blogPosts = [
  {
    title: "First Post",
    slug: "first",
    date: new Intl.DateTimeFormat("en-US", options).format(date),
    content:
      "(1) This is the first post content....Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Second Post",
    slug: "second",
    date: new Intl.DateTimeFormat("en-US", options).format(date),
    content:
      "(2) This is the second post content....Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Third Post",
    slug: "third",
    date: new Intl.DateTimeFormat("en-US", options).format(date),
    content:
      "(4) This is the third post content....Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
