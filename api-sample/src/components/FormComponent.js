import React, {Component} from 'react';
import ReactDOM from 'react-dom';


function FormComponent (props){
  return(
    <form>
      <input 
        type="text" 
        name="firstName" 
        placeholder = "First Name" 
        onChange={props.handleChange} 
        value={props.firstName} 
      />
      <br/>
      <input 
        type="text" 
        name="lastName" 
        placeholder = "Last Name" 
        onChange={props.handleChange} 
        value={props.lastName} 
      />
      <br/>
      <input 
        type="text" 
        name="age" 
        placeholder = "Age" 
        onChange={props.handleChange} 
        value={props.age} 
      />
      <br/>
      <label>
        <input 
          type="radio" 
          name="gender" 
          value="male" 
          checked={props.gender === "male"} 
          onChange={props.handleChange}/> Male
      </label>
      <br/>
      <label>
        <input 
          type="radio" 
          name="gender" 
          value="female" 
          checked={props.gender === "female"} 
          onChange={props.handleChange}/> Female
      </label>
      <br/>
      <select name="destination" onChange={props.handleChange} value={props.destination}>
        <option value="">---Please Choose a Destination---</option>
        <option value="germany">Germany</option>
        <option value="norway">Norway</option>
        <option value="north pole">North Pole</option>
        <option value="south pole">South Pole</option>
      </select>
      <br/>
      <label>
        <input type="checkbox" name="isVegan" checked={props.isVegan == true} onChange={props.handleChange} />
        Is Vegan?
      </label>
      <label>
        <input type="checkbox" name="isKosher" checked={props.isKosher == true} onChange={props.handleChange} />
        Is Kosher?
      </label>
      <label>
        <input type="checkbox" name="isLactoseFree" checked={props.isLactoseFree == true} onChange={props.handleChange} />
        Is Lactose Free?
      </label>
      <br/>
      <br/>
      <button>Submit</button>
      <hr />
      <h2>Entered Information</h2> <br/>
      Your Name : {props.firstName}  {props.lastName} <br/>
      Your Age : {props.age} <br/>
      Gender : {props.gender} <br/>
      Destination : {props.destination} <br/>
      Is Vegan? {props.isVegan === true? "True": "False"} <br/>
      Is Kosher? {props.isKosher ===true? "True":"False"} <br/>
      Is Lacotse Free? {props.isLactoseFree===true? "True" : "False"}
    </form>
  )
}

export default FormComponent;
