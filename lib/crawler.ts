import * as puppeteer from "puppeteer";

export class CrawlerHandler {
  private url: string = "";

  constructor() {}

  setUrl(url: string) {
    this.url = url;
  }

  async crawlToString(): Promise<string> {
    const res = await this.launchPage();
    return await res.content();
  }

  private async launchPage(): Promise<puppeteer.Page> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(this.url);

    return page;
  }
}
