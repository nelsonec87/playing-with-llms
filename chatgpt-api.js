import { ChatGPTAPI } from "chatgpt";
import { readFileSync } from "fs";

const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API,
});

const filename = process.argv[2];
const code = readFileSync(filename, "utf8");
const question =
  "Write unit tests for all the provided typescript code using the Jest framework with comments. Return only the function body.";

let res = await api.sendMessage(question + "\n\n" + code);
console.log(res.text);
