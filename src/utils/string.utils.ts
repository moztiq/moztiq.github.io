import * as cheerio from 'cheerio';

export const extractText = (htmlString: string) => {
  const $ = cheerio.load(htmlString);
  return $.text();
};
