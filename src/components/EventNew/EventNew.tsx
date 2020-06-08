import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { postEvent } from '../../actions'

interface Ifield {
  input: string
  label: string
  type: string
  meta: {
    touched: boolean
    error: object
  }
}

class EventNew extends Component<any> {
  constructor(props: any){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field: Ifield){
    const { input, label, type, meta: { touched, error }} = field
    return(
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values: {title: string, body: string}){
    console.log(values)
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render(){
    const { handleSubmit, pristine, submitting } = this.props
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="title" name="title" type="text" component={this.renderField}/>
          <Field label="body" name="body" type="text" component={this.renderField}/>
        </div>
        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting}/>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    )
  }
}

const validate = (values: {title: string, body: string}) => {
  const errors:{title?: string, body?: string} = {}

  if(!values.title) errors.title = "Enter a title, please"
  if(!values.body) errors.body = "Enter a body, please"

  return errors 
}

const mapDispatchtoProps = ({ postEvent })

export default connect(null, mapDispatchtoProps)(
  reduxForm({validate: validate, form: 'eventNewForm'})(EventNew)
)
