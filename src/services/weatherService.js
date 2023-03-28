export async function getWeather() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578"
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
