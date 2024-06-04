import * as cheerio from "cheerio";
import {
  CharacterTextSplitter,
  RecursiveCharacterTextSplitter,
} from "langchain/text_splitter";
import { ChatSum } from "./OpenAI";

// Part one only
export async function getPartOne(name: string, symbol: string) {
  const fetchURL = await fetch(
    "https://www.sec.gov/Archives/edgar/data/1318605/000156459021004599/tsla-10k_20201231.htm",
  );

  const data = await fetchURL.text();

  const $ = cheerio.load(data);
  const part2 = $("#PART_II");

  const part1Text = $("#PART_I").nextUntil(part2).text();

  const splitter = new CharacterTextSplitter({
    separator: "ITEM",
    chunkSize: 2500,
    chunkOverlap: 200,
  });

  const part1Split = await splitter.createDocuments([part1Text]);

  const secondSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 2000,
    chunkOverlap: 200,
  });
  const riskFactorsSection = part1Split[1].pageContent.trim();

  //   const riskFactorsParagraph = await secondSplitter.createDocuments([
  //     riskFactorsSection,
  //   ]);

  // const summarizedParagraph = riskFactorsParagraph.map(async (paragraph) => {
  //   const text = paragraph.pageContent;
  //   const data = await ChatSum(text);
  //   return data;
  // });

  console.log(riskFactorsSection);
}
