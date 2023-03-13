import { OpenAI } from "langchain/llms";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";

const llm = new OpenAI({ openAIApiKey: process.env.OPENAI_API });
const chain = loadQAStuffChain(llm);

const user = {
  name: "John",
  plan: "ecommerce",
  period: "yearly",
  plan_expiration: "2023-05-01",
};

const plans = {
  ecommerce: {
    price: 19.99,
    features: ["a", "b", "c"],
  },
  enterprise: {
    price: 29.99,
    features: ["a", "b", "c", "d", "e"],
  },
};

const docs = [
  new Document({ pageContent: JSON.stringify(user) }),
  new Document({ pageContent: JSON.stringify(plans) }),
  new Document({
    pageContent: "You are talking to the hosting customer.",
  }),
];

const question1 = "How much does my plan cost?";
const res = await chain.call({
  input_documents: docs,
  question: question1,
});
console.log("Question 1", question1);
console.log("Answer 1", res.text);

const question2 = "What are my upgrade options? I need the feature 'd'.";
const res2 = await chain.call({
  input_documents: docs,
  question: question2,
});
console.log("Question 2", question2);
console.log("Answer 2", res2.text);

const question3 = "When is my subscription due?";
const res3 = await chain.call({
  input_documents: docs,
  question: question3,
});
console.log("Question 3", question3);
console.log("Answer 3", res3.text);