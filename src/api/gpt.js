const { Configuration, OpenAIApi } = require("openai");
const { OPENAI_API_KEY } = require("../config/env");

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function generateText(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.9,
    max_tokens: 100,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    n: 1,
  });

  return response.data.choices[0].text;
}

module.exports = { generateText };
