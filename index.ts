import { PostParser, PostPlatform } from "./lib/parser";
//

(async () => {
  const parser = new PostParser(PostPlatform.MEDIUM);

  const postList = await parser.parse("https://medium.com/@olaolaore");

  console.log(postList);

  process.exit();
})();
