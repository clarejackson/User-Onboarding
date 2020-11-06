import React from 'react';

const Form = (props) => {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = event => {
    event.preventDefault()
    submit()
  }

  const onChange = event => {
    const { name, value, type, checked } = event.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>User Onbording</h2>


        <button disabled={disabled} id='submitBtn'>Submit</button>

        <div> 
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div>
        <h2>Registration</h2>

        <label>Name:     </label>
        <input 
        value={values.name}
        onChange={onChange}
        name='name'
        type='text'
        />

        <label>Email:     </label>
        <input 
        value={values.email}
        onChange={onChange}
        name='email'
        type='email'
        />

        <label>Password:     </label>
        <input 
        value={values.password}
        onChange={onChange}
        name='password'
        type='password'
        />

        <label>Terms of Service:     </label>
        <input 
        value='true'
        onChange={onChange}
        name='terms'
        type='radio'
        checked={values.terms === 'true'}
        />
        
        
      </div>
    </form>
  )

}

export default Form