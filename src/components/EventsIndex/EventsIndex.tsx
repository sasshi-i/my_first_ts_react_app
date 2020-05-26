import React, { Component } from 'react'
import { connect } from 'react-redux'
import { readEvents } from '../../actions'

interface Props {
  readEvents: () => void
}

interface State {
  events: {key: string}
}

// ToDo
// テーブルを書く
class EventsIndex extends Component<Props> {
  componentDidMount(){
    console.log(this.props)
    console.log(this.state)
    this.props.readEvents()
  }
  render(){
    return(
      <div>hogehoge</div>
    )
  }
}

const mapStateToProps = (state: State) => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
