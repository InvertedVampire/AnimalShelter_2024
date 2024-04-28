import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

// this interface holds the variable involved in the animal search
interface AnimalValue {
  name: string;
}

// defines input validation using yup validation library
const ValiadtionSchema = yup.object().shape({
  name: yup
    .string()
    .required('Animal name is required')
    .matches(/[a-zA-Z]/, 'Invalid Animal Name'),
});

const AnimalSearch: React.FC = () => {
  const navigate = useNavigate();

  // initialize variable to hold user input for validation
  const initialValues: AnimalValue = { name: '' };

  // function for handling submit
  const handleSubmit = (values: AnimalValue) => {
    // Here is where database method would be called
    // Selects intake number where name = name
    // If returns nothing then throw error that animal doesn't exist
    // Else move to next page.
    const currentFeature = sessionStorage.getItem('feature');
    if (currentFeature === 'animal') navigate('/layout/animal');
    else navigate('/layout/customer');
  };

  // displays form and uses on change to hold data for validation.
  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ValiadtionSchema}
        >
          <Form>
            <div>
              <Field
                id="name"
                name="name"
                placeholder="Enter Animal Name"
                className="input input-bordered w-full max-w-l"
              />
              <br />
              <div className="text-error">
                <ErrorMessage name="name" />
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

export default AnimalSearch;
