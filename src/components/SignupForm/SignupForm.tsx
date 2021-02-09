import React, {
  FunctionComponent,
  ChangeEvent,
  useState,
  FormEvent
} from 'react';
import './SignupForm.scss';
import { ISignupFormData } from '../../utils/interfaces';
import { addToMailingList } from '../../services/apiService';

const initialFormData = {
  email: '',
  firstName: ''
};

const SignupForm: FunctionComponent = () => {
  const [formData, setFormData] = useState<ISignupFormData>(initialFormData);

  function textChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setFormData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value
      };
    });
  }
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addToMailingList(formData);
    setFormData(initialFormData);
  }

  return (
    <div className="signup-form-wrapper">
      <p>
        You can help by subscribing to our email list below for the most
        up-to-date information about our campaigns, initiatives and projects
        moving forward into 2021:
      </p>
      <form onSubmit={submitHandler}>
        <div className="inputs-wrapper">
          <label htmlFor="firstName">
            Your first name:
            <input
              onChange={textChangeHandler}
              value={formData.firstName}
              id="firstName"
              name="firstName"
              type="text"
              required
            />
          </label>
          <label htmlFor="email">
            Your email address:
            <input
              onChange={textChangeHandler}
              value={formData.email}
              id="email"
              name="email"
              type="text"
              required
            />
          </label>
        </div>
        <button>
          <p>Get involved</p>
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
