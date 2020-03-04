import React, {Component} from 'react';
import FormComponent from './FormComponent'


class FormContainer extends Component{
    constructor(props)
{
  super(props)
  this.state={
    firstName:"",
    lastName: "",
    age:"",
    gender:"",
    destination:"",
    isVegan : false,
    isKosher: false,
    isLactoseFree : false
 }
  this.handleChange = this.handleChange.bind(this)
}

handleChange(e)
{
  const {name, value, type, checked} = e.target;
  type === "checkbox" ? 
  this.setState({[name] : checked}) :
  this.setState({[name] : value })
}
render(){
    return(
    <FormComponent 
    handleChange={this.handleChange} 
    {...this.state}
    />
    //We can also send as data = this.state so we can access in another component props.data.firstName
    )
  }
}
export default FormContainer;
