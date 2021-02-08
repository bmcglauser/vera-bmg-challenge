import React, { ChangeEvent, useState } from 'react';
import './App.scss';

interface IFormData {
  email: string;
  firstName: string;
  zipCode: string;
}

const initialFormData = {
  email: '',
  firstName: '',
  zipCode: ''
}

function App () {
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  

  function textChangeHandler (e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setFormData(data => {
      return {
        ...data,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div className="app-wrapper">
      <form>
        <label htmlFor="email" >Your email address: 
          <input onChange={textChangeHandler} value={formData.email} id="email" name="email" type="text"/>
        </label>
        <label htmlFor="firstName" >Your first name: 
          <input onChange={textChangeHandler} value={formData.firstName} id="firstName" name="firstName" type="text"/>
        </label>
        <label htmlFor="zipCode" >Your zip code: 
          <input onChange={textChangeHandler} value={formData.zipCode} id="zipCode" name="zipCode" type="text"/>
        </label>
      </form>
    </div>
  );
}

export default App;
