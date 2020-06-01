import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

interface Ifield {
  input: string
  label: string
  type: string
  meta: {
    touched: boolean
    error: Object
  }
}

class EventShow extends Component<any>{
  constructor(props: any){
    super(props)
  }

  componentDidMount(){
    console.log(this.props)
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

  render(){
    return(
      <form>
        <Field label='title' name='title' type='text' component={this.renderField}></Field>
        <Field label='body' name='body' type='text' component={this.renderField}></Field>

        <div>
          <input type="submit" value='Submit' disabled={false}/>
          <Link to='/'>Cancel</Link>
        </div>
      </form>
    )
  }
}

const validate = (values: {title?: string, body?: string}) => {
  const errors:{title?: string, body?: string} = {}

  if(!values.title) errors.title = 'Enter a title, please'
  if(!values.body) errors.body = 'Enter a body, please'

  return errors
}
export default connect(null, null)(
  reduxForm({validate: validate, form: 'eventShowForm'})(EventShow)
)
