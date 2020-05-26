import axios from 'axios'
import { Dispatch } from 'redux'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async (dispatch: Dispatch) => {
  const res = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({type: READ_EVENTS, res})
}
