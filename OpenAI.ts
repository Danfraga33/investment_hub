import { OpenAI } from "@langchain/openai";
import { loadSummarizationChain } from "langchain/chains";

export async function GPT(docs: any) {
  const model = new OpenAI({
    temperature: 0.3,
    openAIApiKey: "sk-proj-JSbitKpfqOYwPWtlbYuDT3BlbkFJXswtKWvDhBPP5enwlHBk",
  });

  const chain = loadSummarizationChain(model, { type: "map_reduce" });
  const res = await chain.invoke({
    input_documents: docs,
  });

  return { res };
}
