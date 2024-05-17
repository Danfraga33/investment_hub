import * as cheerio from "cheerio";
import {
  CharacterTextSplitter,
  RecursiveCharacterTextSplitter,
} from "langchain/text_splitter";
import { GPT } from "./Openai";
export async function getPartOne() {
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
    chunkSize: 3000,
    chunkOverlap: 250,
  });
  const riskFactors = part1Split[1].pageContent.replace("\n", "").trim();

  const largeContentSplit = await secondSplitter.createDocuments([riskFactors]);

  const responseArr = [];
  for (const chunk of largeContentSplit) {
    const textData = chunk.pageContent.trim();
    const data = await GPT(textData);
    responseArr.push(data);
  }

  const responseData = responseArr.reduce(
    (acc, curr) => {
      acc.answer += curr.answer;
      return acc;
    },
    { answer: "" },
  );

  console.log(responseData);

  // const businessOverview = part1Split[0].pageContent.trim();
  // const properties = part1Split[3].pageContent.replace("\n", "").trim();
  // const legalProceedings = part1Split[4].pageContent.trim();
  // const mineSafetyDisclosure = part1Split[5].pageContent.trim();

  // return businessOverview;
  // return({
  //   businessOverview,
  //   riskFactors,
  //   properties,
  //   legalProceedings,
  //   mineSafetyDisclosure,
  // });
}
getPartOne();
