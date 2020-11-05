import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'; 
import * as yup from 'yup'
import schema from './formSchema'
import axios from 'axios'


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
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUsers = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(response => {
        setUsers([...users, response.data])
      })
      .catch(error => {
        debugger 
        console.log(error)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) => {
    // yup validation schema
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        })
      })
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
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    postNewUsers(newUser)
  }

  // Side Effects????
  useEffect(() => {
    console.log(formValues)
  }, [formValues])

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

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
