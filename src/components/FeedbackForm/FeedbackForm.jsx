import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { selectFormData } from '../../redux/selectors';
import { fetchFormData } from '../../redux/operations';
 
 const feedbackSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Username must be more then 2 characters long')
     .max(15, 'Username must be less then 15 characters long')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   message: Yup.string()
     .min(4, 'Please, enter some text!')
     .required('Required'),
 });
 
const FeedbackForm = () => {
  const formData = useSelector(selectFormData);
  const dispatch = useDispatch();

  return (
      <>
        <Formik
        initialValues={formData}
        validationSchema={feedbackSchema}
        onSubmit={(values, actions) => {
          dispatch(fetchFormData(values));
          actions.resetForm();
       }}>
          <Form>
          <div>
            <label htmlFor="user-name"></label>
            <Field id="user-name" type="text" name="name" placeholder="Your name*" />
            <ErrorMessage component='p' name="name"/>
          </div>
          <div>
            <label htmlFor="user-email"></label>
            <Field id="user-email" type="email" name="email" placeholder="Your e-mail*" />
            <ErrorMessage component='p' name="email"/>
          </div>
          <div>
            <label htmlFor="user-message"></label>
            <Field id="user-message" as="textarea" name="message" placeholder="Your message*"></Field>
            <ErrorMessage component='p' name="message"/>
          </div>
          <button type="submit">Send message</button>
        </Form>
        </Formik>
      </>
  )
}

export default FeedbackForm;