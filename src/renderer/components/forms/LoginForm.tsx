import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

// this interface holds the variables involved in the login form
interface LoginFormValues {
  username: string;
  password: string;
}

// defines input validation using yup validation library
const ValiadtionSchema = yup.object().shape({
  username: yup
    .string()
    .required('User ID is required')
    .matches(/[a-zA-Z0-9]/, 'Invalid User ID')
    .length(6, 'User ID must be 6 characters'),
  password: yup
    .string()
    .required('Password is required')
    .max(20, 'Password is too long')
    .min(8, 'Password is too short'),
});

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  // initialize variable to hold user input for validation
  const initialValues: LoginFormValues = { username: '', password: '' };

  // function for handling submit
  const handleSubmit = () => {
    // Here is where database method would be called
    // Selects password where ID = username
    // If returns nothing then throw error that user doesn't exist
    // Else check that passwords match, if not throw error.
    navigate('/layout/home');
  };

  // displays form and uses on change to hold data for validation.
  return (
    <div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ValiadtionSchema}
        >
          <Form>
            <div>
              <Field
                id="username"
                name="username"
                placeholder="Enter User ID"
                className="input input-bordered w-full max-w-xs"
              />
              <br />
              <div className="text-error">
                <ErrorMessage name="username" />
              </div>
            </div>
            <br />
            <div>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                className="input input-bordered w-full max-w-xs decoration-dotted"
              />
              <br />
              <div className="text-error">
                <ErrorMessage name="password" />
              </div>
            </div>
            <br />
            <button
              type="submit"
              className="btn bg-gradient-to-r from-[#0DB4BE] to-[#04D3BC] text-white"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
