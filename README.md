# 🌦️ AI Weather Forecast Agent

An AI-powered Weather Forecast Agent built with JavaScript and Node.js that fetches real-time weather information using a Weather API and provides location-based weather updates.

## 🚀 Project Overview

The AI Weather Forecast Agent is designed to provide users with accurate and up-to-date weather information for their preferred locations.

It integrates with a Weather API to retrieve weather data and processes the response to deliver useful weather insights.

## ✨ Features

- 🌍 Location-based weather information
- 🌡️ Real-time temperature updates
- 💧 Humidity information
- 💨 Wind speed details
- ☁️ Weather conditions and descriptions
- 🤖 AI-powered weather assistance
- 🔗 Integration with an external Weather API

## 🛠️ Technologies Used

- JavaScript
- Node.js
- OpenAI API
- Weather API
- npm

## 📂 Project Structure

```text
AI-AGENT/
│
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env.example
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/krushnakantanayak/AI-AGENT.git
```

### 2. Navigate to the project directory

```bash
cd AI-AGENT
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory.

Add your API credentials:

```env
WEATHER_API_KEY=your_weather_api_key
OPENAI_API_KEY=your_openai_api_key
```


### 5. Run the application

```bash
node index.js
```

## 🔑 API Configuration

This project uses an external Weather API to fetch weather information.

Add your API key to the `.env` file before running the application.

Never share or upload your actual API keys to GitHub.

## 📸 Project Demo

<img width="1006" height="805" alt="image" src="https://github.com/user-attachments/assets/b6cedc42-d2a8-4f55-8e4e-b7b81bc3eec4" />
krushnakantanayak@Mac AI-AGENT % npm start

> ai-agent@1.0.0 start
> node agent.js

==========
       AI WEATHER ASSISTANT
        ==========

Powered by Gemini + Open-Meteo
Type 'exit' to stop.

You: Will it rain tomorrow in Cuttack?
> 
[Tool Called]: get_weather
[Arguments]: { city: 'Cuttack' }
[Weather Data]: {
  city: 'Cuttack',
  country: 'India',
  current: {
    time: '2026-11-01T01:30',
    interval: 900,
    temperature_2m: 25.5,
    relative_humidity_2m: 94,
    apparent_temperature: 31.8,
    wind_speed_10m: 0.4,
    weather_code: 0
  },
  forecast: {
    time: [
      '2026-11-01',
      '2026-11-02',
      '2026-11-03',
      '2026-11-04',
      '2026-11-05'
    ],
    weather_code: [ 2, 51, 80, 95, 3 ],
    temperature_2m_max: [ 31.1, 29.4, 31.1, 31.3, 30.3 ],
    temperature_2m_min: [ 24.4, 24.1, 24.7, 24, 23.6 ],
    precipitation_probability_max: [ 22, 61, 67, 95, 42 ]
  }
}
> 
AI:
**Yes, it is likely to rain tomorrow in Cuttack.** There is a **61% chance of rain** with light drizzle expected.

---

### **Current Weather in Cuttack, India**
* **Condition:** Clear sky
* **Temperature:** 25.5 °C
* **Feels-like Temperature:** 31.8 °C
* **Humidity:** 94%
* **Wind Speed:** 0.4 km/h

---

### **5-Day Weather Forecast**

| Date | Condition | Min Temp | Max Temp | Rain Probability |
| :--- | :--- | :--- | :--- | :--- |
| **2026-11-01** (Today) | Partly cloudy | 24.4 °C | 31.1 °C | 22% |
| **2026-11-02** (Tomorrow) | Light drizzle | 24.1 °C | 29.4 °C | 61% |
| **2026-11-03** | Rain showers | 24.7 °C | 31.1 °C | 67% |
| **2026-11-04** | Thunderstorm | 24.0 °C | 31.3 °C | 95% |
| **2026-11-05** | Overcast | 23.6 °C | 30.3 °C | 42% |

---

### **Summary**
Conditions in Cuttack are currently warm and humid under clear skies. Expect rainfall chances to increase starting tomorrow with light drizzle, leading into showers and potential thunderstorms by midweek. It's recommended to carry an umbrella if you are heading out tomorrow.

You: 

## 🔮 Future Improvements

- Add a 5-day weather forecast.
- Support voice-based weather queries.
- Improve AI-generated weather summaries.
- Add a user-friendly web interface.
- Support multiple locations.

## 👨‍💻 Author

**Krushnakanta Nayak**

GitHub: https://github.com/krushnakantanayak

---

⭐ If you find this project interesting, consider giving it a star!

