import { Formik, Field, Form, ErrorMessage } from "formik";
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

// this interface holds the variable involved in the customer search
interface CustomerValue {
    phone:string;
}

// defines input validation using yup validation library
const ValiadtionSchema = yup.object().shape({
    phone: yup.string()
        .required('Phone number is required')
        .matches(/[0-9]/, 'Invalid phone number')
        .length(10, 'Invalid phone number')
});

export const CustomerSearch: React.FC = () => {
    const navigate = useNavigate();
    
    // initialize variable to hold user input for validation
    const initialValues: CustomerValue = {phone:''};

    //function for handling submit
    const handleSubmit = (values:CustomerValue) => {
        //Here is where database method would be called
        //Selects customer where phone = phone
        //If returns nothing then throw error that customer doesn't exist
        //Else move to next page.

        // for now
        const val = values.phone;
        if (val === '8438675309')
            navigate('/layout/customer-info')
        else navigate('/layout/new-customer')
    }

    // displays form and uses on change to hold data for validation.
    return (
      <div>
        <div><br/><br/><br/>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ValiadtionSchema}>
                <Form>
                    <div>
                    <Field id="phone" name="phone" placeholder="Customer Phone Number" className="input input-bordered w-full max-w-l"/><br/>
                    <div className="text-error"><ErrorMessage name="phone" /></div>
                    </div><br/>
                    <button type="submit" className="btn bg-primary text-white">Submit</button>
                </Form>
            </Formik>
        </div>
      </div>
    );
  };