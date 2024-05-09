import { ChatOpenAI } from "@langchain/openai";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { LangChainStream, StreamingTextResponse } from "ai";

export async function POST(req: Request) {
  try {
    /**
     * Part 1: User Input
     * 1. Connect Messages from props
     * 2. Create a prompt with a prompt template - User input and context should be put in ehre.
     * 3. Insert prompt template into createStuffDocumentsChain
     *  Part 2: Model
     * 4. Create a LLM
     * 5. Insert LLM Model into createStuffDocumentsChain
     * Part 3: Website
     * 6. Get Website Embeddings
     * 7. Insert Embeddings/Vector into createStuffDocumentsChain
     */

    const body = await req.json();
    const messages = body.messages ?? [];
    const { stream, handlers } = LangChainStream();
    const currentMessageContent = messages[messages.length - 1].content;

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are an informative bot." +
          "Answer the users question based on the below context." +
          "Helping visitors learn about the business." +
          "Whenever it makes sense, provide links that contain more information about the topic from the given context." +
          "Format your responses in markdown format. \n\n" +
          "Context: \n {context}",
      ],
      ["user", "{input}"],
    ]);
    const chatModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      streaming: true,
      callbacks: [handlers],
    });

    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
    });

    const retriever = (await getVectorStore()).asRetriever();

    const retrieverChain = await createRetrievalChain({
      combineDocsChain,
      retriever,
    });
    retrieverChain.invoke({
      input: currentMessageContent,
    });
    return new StreamingTextResponse(stream);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Internal Server Problem" });
  }
}
