import { OpenAI } from "langchain/llms";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";
import { readFileSync } from "fs";

const llm = new OpenAI({ openAIApiKey: process.env.OPENAI_API, maxTokens: -1 });
const chain = loadQAStuffChain(llm);
const filename = process.argv[2];
const pageContent = readFileSync(filename, "utf8");
const docs = [new Document({ pageContent })];
const res = await chain.call({
  input_documents: docs,
  question:
    "Write unit tests for all the provided typescript code function using the Jest framework with comments. Return only the function body.",
});
console.log(res.text);
