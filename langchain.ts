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
    chunkSize: 2000,
    chunkOverlap: 200,
  });
  const riskFactorsSection = part1Split[1].pageContent.replace("\n", "").trim();

  const riskFactorsParagraph = await secondSplitter.createDocuments([
    riskFactorsSection,
  ]);

  const dataRF = await GPT([riskFactorsParagraph[1]]);

  // const responseArr = [];
  // for (const chunk of riskFactorsParagraph) {
  //   const textData = chunk.pageContent.trim();
  //   console.log(typeof chunk.pageContent);
  //   const data = await GPT(textData);

  //   responseArr.push(data);
  // }

  console.log(dataRF);
  console.log(riskFactorsParagraph[1].pageContent);
  // const responseData = responseArr.reduce(
  //   (acc, curr) => {
  //     acc.answer += curr.answer;
  //     return acc;
  //   },
  //   { answer: "" },
  // );
}
getPartOne();
