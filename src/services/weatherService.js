import axios from 'axios'
// eslint-disable-next-line no-undef
const apiKey = '&appid=' + process.env.REACT_APP_API_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?id='

const getWeather = async (cityId) => {
  const finalUrl = baseUrl + cityId + apiKey
  console.log(finalUrl)
  const response = await axios.get(finalUrl, cityId)
  return response.data
}

export default {
  getWeather,
}
