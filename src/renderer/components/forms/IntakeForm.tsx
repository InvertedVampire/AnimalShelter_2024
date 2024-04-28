import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

// this interface holds the variable involved in the new customer form
interface AnimalValues {
  intake: string;
  type: string;
  name: string;
  sex: string;
  sn: boolean; // Spayed or neutered
  vax: boolean; // vaccinated or not
  breed: string;
  euth: boolean; // can be euthanized
  cage: number;
  vet: string;
}

// defines input validation using yup validation library
const ValiadtionSchema = yup.object().shape({});

const IntakeForm: React.FC = () => {
  const navigate = useNavigate();

  // initialize variable to hold user input for validation
  const initialValues: AnimalValues = {
    intake: '',
    type: '',
    name: '',
    sex: '',
    sn: false,
    vax: false,
    breed: '',
    euth: false,
    cage: 0,
    vet: '',
  };

  // function for handling submit
  const handleSubmit = (values: AnimalValues) => {
    // Here is where database method would be called
    // Inserts values into table and move to next page.

    // for now
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
                id="intake"
                name="intake"
                placeholder="Intake Number"
                className="input input-bordered w-full max-w-l"
              />
              <br />
              <div className="text-error">
                <ErrorMessage name="intake" />
              </div>
            </div>
            <br />
            <div>
              <Field
                id="name"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full max-w-l"
              />
              <br />
              <div className="text-error">
                <ErrorMessage name="name" />
              </div>
            </div>
            <br />
            <div>
              <Field
                id="breed"
                name="breed"
                placeholder="Breed"
                className="input input-bordered w-full max-w-l"
              />
              <br />
              <div className="text-error">
                <ErrorMessage name="breed" />
              </div>
            </div>
            <br />
            <div>
              <Field
                id="vet"
                name="vet"
                placeholder="Email Address"
                className="input input-bordered w-full max-w-l"
              />
              <br />
              <div className="text-error">
                <ErrorMessage name="vet" />
              </div>
            </div>
            <div>
              <label>
                <Field type="radio" name="picked" value="Small Animal" />
                Small Animal
              </label>
              <label>
                <Field type="radio" name="picked" value="LiveStock" />
                Livestock
              </label>
            </div>
            <div>
              <label>
                <Field type="radio" name="picked" value="Male" />
                Male
              </label>
              <label>
                <Field type="radio" name="picked" value="Female" />
                Female
              </label>
            </div>
            <div>
              <label>
                <Field type="checkbox" id="sn" name="sn" />
                Spayed/Neutered
              </label>
              <label>
                <Field type="checkbox" id="vax" name="vax" />
                Vaccinated
              </label>
              <label>
                <Field type="checkbox" id="euth" name="euth" />
                Liable to Euthanasia
              </label>
            </div>
            <button type="submit" className="btn bg-primary text-white">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default IntakeForm;