import { READ_EVENTS } from '../actions'
import _ from 'lodash'

export default (events={}, action: any) => {
  switch(action.type){
    case READ_EVENTS:
      console.log(_.mapKeys(action.res.data, 'id'))
      return _.mapKeys(action.res.data, 'id')
    default:
      return events
  }
}
