"use strict";
// import { ChatOpenAI, OpenAI } from "@langchain/openai";
// import { loadSummarizationChain } from "langchain/chains";
// import { ChatPromptTemplate } from "@langchain/core/prompts";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
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
// require("dotenv").config();
// export async function ChatSum(docs: any) {
//   const result = await generateText({
//     model: openai("gpt-3.5-turbo"),
//     prompt: `Summarize ${docs} as someone providing insights.`,
//   });
//   console.log(result.text);
// }
var generative_ai_1 = require("@google/generative-ai");
var genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var model, prompt, result, response, text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                    prompt = "Write a short story about a magic backpack.";
                    return [4 /*yield*/, model.generateContent(prompt)];
                case 1:
                    result = _a.sent();
                    response = result.response;
                    text = response.text();
                    console.log(text);
                    return [2 /*return*/];
            }
        });
    });
}
run();
