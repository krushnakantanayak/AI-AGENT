
async function getWeather(city) {

  // 1. Get city coordinates
  const geoUrl =
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;

  const geoResponse = await fetch(geoUrl);
  const geoData = await geoResponse.json();

  if (!geoData.results?.length) {
    throw new Error("City not found");
  }

  const location = geoData.results[0];

  // 2. Fetch weather data
  const weatherUrl =
    `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=5&timezone=auto`;

  const response = await fetch(weatherUrl);
  const weather = await response.json();

  // 3. Return weather data
  return {
    city: location.name,
    country: location.country,

    current: weather.current,

    forecast: weather.daily,
  };
}

export default getWeather;
