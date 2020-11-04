import React, { useState } from 'react';
import './App.css';
import Form from './Form'; 
import './App.css';


const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: ''
}
const initialUsers = [
  {
    name: 'Clare Jackson',
    email: 'clare.jackson@user.com',
    password: 'Coder123',
    terms: true
  },
]
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disables, setDisabled] = useState(initialDisabled)

  const postNewUsers = newUser => {
    //axios.post to ('https://reqres.in/api/users')
  }

  const validate = (name, value) => {
    // yup validation schema
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: ,
      email: ,
      password: ,
      terms: 
    }
    postNewUsers(newUser)
  }

  // Side Effects????

  return (
    <div className="App">
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />

      {
        users.map((user, index) => {
          return <div key={index}>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                  <p>{user.password}</p>
                  <p>{user.terms}</p>
                </div>
        }
        )
      }
    </div>
  );
}

export default App;
