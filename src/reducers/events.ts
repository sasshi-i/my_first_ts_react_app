import { READ_EVENTS } from '../actions'
import { READ_EVENT } from '../actions'
import { DELETE_EVENT } from '../actions'
import { POST_EVENT } from '../actions'
import { UPDATE_EVENT } from '../actions'

import _ from 'lodash'

interface IEvent {
  [key: number]:{
    id: number
    title: string
    body: string
  }
}

interface IAction {
  [key: string]: any
}

export default (events: IEvent = {}, action: IAction) => {
  switch(action.type){
    case READ_EVENTS:
      return _.mapKeys(action.res.data, 'id')
    case DELETE_EVENT:
      delete(events[action.id])
      return {...events}
    case POST_EVENT:
    case UPDATE_EVENT:
    case READ_EVENT:
      const data = action.res.data
      return { ...events, [data.id]: data }
    default:
      return events
  }
}
