import { Platform, Post, PostParser, recognizedPlatforms } from "./parser";

// TODO: error handling - platform must match URL.

async function init(platform: Platform, url: string): Promise<Post[]> {
  const parser = new PostParser(recognizedPlatforms[platform]);

  const postList = await parser.parse(url);

  return postList;
}

module.exports = {
  parseFn: init,
};
