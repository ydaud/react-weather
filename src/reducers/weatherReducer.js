import weatherService from '../services/weatherService'

export const dailyWeather = (cityId) => {
  console.log('REDUCED')
  return async dispatch => {
    const response = await weatherService.getWeather(cityId)
    dispatch({
      type: 'DAILY_WEATHER',
      data: response
    })
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'DAILY_WEATHER':
      console.log('REDUCED')
      return null
    default:
      return state
  }
}

export default reducer
