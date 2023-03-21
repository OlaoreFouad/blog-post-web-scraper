import { Extractor } from "./extractor";
import { CrawlerHandler } from "./crawler";

export type Platform = "medium";

export enum PostPlatform {
  MEDIUM = "medium",
}

export const recognizedPlatforms: Record<Platform, PostPlatform> = {
  medium: PostPlatform.MEDIUM,
};

export interface Post {
  title: string;
  link: string;
  index: number;
}

export class PostParser {
  constructor(private platform: PostPlatform) {}

  async parse(blogUrl: string): Promise<Post[]> {
    const postList: Post[] = [];

    const crawlerHandler = new CrawlerHandler();
    crawlerHandler.setUrl(blogUrl);

    const content = await crawlerHandler.crawlToString();

    const linksSelector = "a[aria-label='Post Preview Title']";
    const titleSelector = "a[aria-label='Post Preview Title'] > div > h2";

    const extractor = new Extractor(titleSelector, linksSelector);
    const extractedContent = extractor.extract(content);

    extractedContent.links.forEach((link, index) => {
      const title = extractedContent.titles[index];

      if (title && link) {
        postList.push({
          title,
          link,
          index,
        });
      }
    });

    return postList;
  }
}
