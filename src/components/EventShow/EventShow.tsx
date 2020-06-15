import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { deleteEvent, getEvent, putEvent } from '../../actions'

interface Ifield {
  input: string
  label: string
  type: string
  meta: {
    touched: boolean
    error: object
  }
}

interface State {
  events: {
    [key: number]:{
      id: number
      title: string
      body: string
    }
  }
}


class EventShow extends Component<any>{
  constructor(props: any){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount(){
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
  }

  renderField(field: Ifield){
    const { input, label, type, meta: {touched, error} } = field
    return(
      <div>
        <input placeholder={label} type={type} {...input}/>
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onDeleteClick(){
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values: {id: number, title: string, body: string}){
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render(){
    const { handleSubmit, pristine, submitting, invalid } = this.props
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label='title' name='title' type='text' component={this.renderField}></Field>
        <Field label='body' name='body' type='text' component={this.renderField}></Field>

        <div>
          <input type="submit" value='Submit' disabled={ pristine || submitting || invalid}/>
          <Link to='/'>Cancel</Link>
          <Link to='/' onClick={this.onDeleteClick}>Delete</Link>
        </div>
      </form>
    )
  }
}

const validate = (values: {title: string, body: string}) => {
  const errors:{title?: string, body?: string} = {}

  if(!values.title) errors.title = 'Enter a title, please'
  if(!values.body) errors.body = 'Enter a body, please'

  return errors
}

const mapDispatchToProps = ( {deleteEvent, getEvent, putEvent} )
const mapStateToProps = (state: State, ownProps: any ) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, state }
}
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({validate: validate, form: 'eventShowForm', enableReinitialize: true})(EventShow)
)
