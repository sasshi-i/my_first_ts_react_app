import axios from 'axios'
import { Dispatch } from 'redux'

export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const POST_EVENT = 'POST_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async (dispatch: Dispatch) => {
  const res = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({type: READ_EVENTS, res})
}

export const postEvent = (values: {title: string, body: string}) => async (dispatch: Dispatch) => {
  const res = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`,values)
  dispatch({type: POST_EVENT, res})
}

export const deleteEvent = (id: number) => async (dispatch: Dispatch) => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({type: DELETE_EVENT, id})
}

export const getEvent = (id: number) => async (dispatch: Dispatch) => {
  const res = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({type: READ_EVENT, res})
}
