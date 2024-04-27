import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

// this interface holds the variable involved in the new customer form
interface CustomerValues {
  fname: string;
  lname: string;
  phone: string;
  email: string;
}

// defines input validation using yup validation library
const ValiadtionSchema = yup.object().shape({
  fname: yup
    .string()
    .required('First name is required')
    .matches(/[a-zA-Z]/, 'Invalid first name')
    .min(2, 'Last Name must be at least 2 characters'),
  lname: yup
    .string()
    .required('Last name is required')
    .matches(/[a-zA-Z]/, 'Invalid last name')
    .min(2, 'Last Name must be at least 2 characters'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/[0-9]/, 'Invalid phone number')
    .length(10, 'Invalid phone number'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
});

export const NewCustomerForm: React.FC = () => {
  const navigate = useNavigate();

  // initialize variable to hold user input for validation
  const initialValues: CustomerValues = {
    fname: '',
    lname: '',
    phone: '',
    email: '',
  };

  // function for handling submit
  const handleSubmit = (values: CustomerValues) => {
    // Here is where database method would be called
    // Inserts values into table and move to next page.

    // for now
    navigate('/layout/payment');
  };

  // displays form and uses on change to hold data for validation.
  return (
    <div>
      <div>
        <br />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ValiadtionSchema}
        >
          <Form>
            <div>
              <Field
                id="fname"
                name="fname"
                placeholder="First Name"
                className="input input-bordered w-full max-w-l"
              />
              <br />
              <div className="text-error">
                <ErrorMessage name="fname" />
              </div>
            </div>
            <br />
            <div>
              <Field
                id="lname"
                name="lname"
                placeholder="Last Name"
                className="input input-bordered w-full max-w-l"
              />
              <br />
              <div className="text-error">
                <ErrorMessage name="lname" />
              </div>
            </div>
            <br />
            <div>
              <Field
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-l"
              />
              <br />
              <div className="text-error">
                <ErrorMessage name="phone" />
              </div>
            </div>
            <br />
            <div>
              <Field
                id="email"
                name="email"
                placeholder="Email Address"
                className="input input-bordered w-full max-w-l"
              />
              <br />
              <div className="text-error">
                <ErrorMessage name="email" />
              </div>
            </div>
            <br />
            <button type="submit" className="btn bg-primary text-white">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
