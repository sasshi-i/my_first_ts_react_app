import React, { Component } from 'react'
import { connect } from 'react-redux'
import { readEvents } from '../../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

interface Props {
  readEvents: () => void
  events: {key: IEvent}
}

interface IEvent {
  id: number
  title: string
  body: string
}

interface State {
  events: {key: IEvent}
}

// ToDo
// テーブルを書く
class EventsIndex extends Component<Props> {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    return(
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Message</td>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to="/event/new">New Event</Link>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state: State) => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
