import weatherService from '../services/weatherService'

export const dailyWeather = (cityId) => {
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
      console.log(action.data)
      return action.data
    default:
      return state
  }
}

export default reducer
