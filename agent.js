
import { GoogleGenAI, Type } from "@google/genai";
import "dotenv/config";
import readline from "node:readline";
import getWeather from "./weather.js";

// Initialize Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Define available tools
const tools = [
  {
    functionDeclarations: [
      {
        name: "get_weather",
        description:
          "Fetch actual current weather and 5-day forecast for a city. " +
          "Use this whenever the user asks about weather.",
        parameters: {
          type: Type.OBJECT,
          properties: {
            city: {
              type: Type.STRING,
              description: "Name of the city",
            },
          },
          required: ["city"],
        },
      },
    ],
  },
];

// Create conversation
const chat = ai.chats.create({
model: "gemini-3.8-flash",
  config: {
    systemInstruction: `
  You are a professional AI weather assistant.

  Rules:
  1. Understand natural language weather questions.
  2. Identify the city from the user's question.
  3. Always call get_weather for weather-related questions.
  4. Never invent weather information.
  5. Use only the actual API response.
  6. Explain temperatures in Celsius.
  7. Display current temperature, feels-like temperature,
     humidity, wind speed and weather condition.
  8. Display the 5-day forecast with dates, minimum
     temperature, maximum temperature and rain probability.
  9. Interpret Open-Meteo weather codes correctly.
  10. Give a short and helpful weather summary.
  11. If the user asks a non-weather question,
      answer normally without calling the weather tool.
`,
    tools,
  },
});

// Create terminal interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Run AI agent

async function runAgent(userInput) {
  let response = await chat.sendMessage({
    message: userInput,
  });

  while (response.functionCalls?.length) {
    const functionResponses = [];

    for (const call of response.functionCalls) {
      console.log(`\n[Tool Called]: ${call.name}`);
      console.log("[Arguments]:", call.args);

      if (call.name === "get_weather") {
        try {
          const weatherData = await getWeather(call.args.city);

          console.log("[Weather API]: Data fetched successfully");

          functionResponses.push({
            functionResponse: {
              name: call.name,
              response: {
                result: weatherData,
              },
            },
          });

        } catch (error) {
          functionResponses.push({
            functionResponse: {
              name: call.name,
              response: {
                error: error.message,
              },
            },
          });
        }
      }
    }

    // Send tool results back to Gemini
    response = await chat.sendMessage({
      message: functionResponses,
    });
  }

  // Display Gemini's final answer
  console.log("\nAI:");
  console.log(response.text || "No response generated.");
}


// Terminal prompt
function askQuestion() {
  rl.question("\nYou: ", async (input) => {
    const question = input.trim();

    if (question.toLowerCase() === "exit") {
      console.log("\nAI Agent stopped. Goodbye!");
      rl.close();
      return;
    }

    if (!question) {
      askQuestion();
      return;
    }

    try {
      await runAgent(question);
    } catch (error) {
      console.error("\nError:", error.message);
    }

    askQuestion();
  });
}

// Start application
console.log("==================================");
console.log("       AI WEATHER ASSISTANT");
console.log("==================================");
console.log("Powered by Gemini + Open-Meteo");
console.log("Type 'exit' to stop.");

askQuestion();
