// import { ChatOpenAI, OpenAI } from "@langchain/openai";
// import { loadSummarizationChain } from "langchain/chains";
// import { ChatPromptTemplate } from "@langchain/core/prompts";

// export async function GPT(docs: any) {
//   const model = new OpenAI({
//     temperature: 0.3,
//     openAIApiKey: process.env.OPENAI_API_KEY,
//   });

//   const chain = loadSummarizationChain(model, { type: "map_reduce" });
//   const res = await chain.invoke({
//     input_documents: docs,
//   });

//   return { res };
// }

// export async function ChatSum(text: string) {
//   const model = new ChatOpenAI({
//     temperature: 0.4,
//     openAIApiKey: process.env.OPENAI_API_KEY,
//   });
//   const prompt = ChatPromptTemplate.fromMessages([
//     [
//       "human",
//       "Summarize {topic} as someone providing insights to the following data, using an opportunistic and positive tone.Extract 5 key headings and give 75-125 word summary per heading. Return your response in this markdown.",
//     ],
//   ]);
//   const promptValue = await prompt.invoke({ topic: text });
//   const promptAsMessages = promptValue.toChatMessages();
//   const response = await model.invoke(promptAsMessages);
//   console.log(response);
//   return response;
//   // const chain = promptTemplate.pipe(model);

//   // const result = await chain.invoke({ topic: text });
//   // return result.lc_kwargs.content;
// }

// import { openai } from "@ai-sdk/openai";
// import { generateObject, generateText, streamObject, streamText } from "ai";
// import { z } from "zod";

// export async function ChatSum(docs: any) {
//   const result = await generateText({
//     model: openai("gpt-3.5-turbo"),
//     prompt: `Summarize ${docs} as someone providing insights.`,
//   });

//   console.log(result.text);
// }

import { GoogleGenerativeAI } from "@google/generative-ai";
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Write a short story about a magic backpack.";

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text);
}
run();
