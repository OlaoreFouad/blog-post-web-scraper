import { Post } from "./parser";

function buildString(posts: Post[]): string {
  let builtString = "<ul>";

  posts.forEach((post) => {
    builtString += `<li>${
      post.index + 1
    }. <a target="_blank" href="https://medium.com${post.link}" >${
      post.title
    }</a></li>`;
  });

  builtString += "</ul>";

  return builtString;
}

module.exports = {
  builderFn: buildString,
};
