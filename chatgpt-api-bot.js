import { ChatGPTAPI } from "chatgpt";

const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API,
});

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

const res = await api.sendMessage(
  `Current user:\n\n ${JSON.stringify(user)}\n\n`+
  `Available plans:\n\n ${JSON.stringify(plans)}\n\n` +
  `You will talk to the hosting customer from now own. Don't say that you are basing your answer on the info provided`
);

const question1 = "How much does my plan cost?";
const res2 = await api.sendMessage(question1, { parentMessageId: res.id });
console.log("Question 1", question1);
console.log("Answer 1", res2.text);

const question2 = "What are my upgrade options? I need the feature 'd'.";
const res3 = await api.sendMessage(question2, { parentMessageId: res2.id });
console.log("Question 2", question2);
console.log("Answer 2", res3.text);

const question3 = "When is my subscription due?";
const res4 = await api.sendMessage(question3, { parentMessageId: res3.id });
console.log("Question 3", question3);
console.log("Answer 3", res4.text);