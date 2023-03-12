import * as cheerio from "cheerio";

interface ExtractedContent {
  links: (string | undefined)[];
  titles: (string | undefined)[];
}

export class Extractor {
  constructor(private titleSelector: string, private linksSelector: string) {}

  extract(content: string): ExtractedContent {
    const parser = cheerio.load(content);

    const parsedLinks = parser(this.linksSelector);
    const parsedTitles = parser(this.titleSelector);

    const links: (string | undefined)[] = [];
    parsedLinks.each(function (i, elem) {
      const link = parser(this).attr("href");
      links.push(link);
    });

    const titles: (string | undefined)[] = [];
    parsedTitles.each(function (i, elem) {
      titles.push(parser(this).text());
    });

    return {
      titles,
      links,
    };
  }
}
