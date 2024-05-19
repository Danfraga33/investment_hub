import { ChatOpenAI, OpenAI } from "@langchain/openai";
import { loadSummarizationChain } from "langchain/chains";
import { PromptTemplate } from "@langchain/core/prompts";

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

export async function ChatSum(text: string) {
  const model = new ChatOpenAI({
    temperature: 0.4,
    openAIApiKey: "sk-proj-JSbitKpfqOYwPWtlbYuDT3BlbkFJXswtKWvDhBPP5enwlHBk",
  });

  const promptTemplate = PromptTemplate.fromTemplate(
    "Summarize the following data, using an opportunistic and positive tone. Imagine you are an someone providing insights. {topic}",
  );

  const chain = promptTemplate.pipe(model);

  const result = await chain.invoke({ topic: text });
  console.log(result.lc_kwargs.content);
}
