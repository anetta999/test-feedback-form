import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { selectFormData, selectLoading } from '../../redux/selectors';
import { fetchFormData } from '../../redux/operations';
import { Input, StyledForm, LastFormField, FormField, StyledErrorMsg } from './FeedbackForm.styled';
import { Loader } from '../Loader/Loader';
 
 const feedbackSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Username must be more then 2 characters long')
     .max(15, 'Username must be less then 15 characters long')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   message: Yup.string()
     .min(4, 'Please, enter some text')
     .required('Required'),
 });
 
const FeedbackForm = () => {
  const formData = useSelector(selectFormData);
  const isLoading = useSelector(selectLoading);
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
          <StyledForm>
          <FormField>
            <label htmlFor="user-name"></label>
            <Input id="user-name" type="text" name="name" placeholder="Your name*" />
            <StyledErrorMsg component='p' name="name"/>
          </FormField>
          <FormField>
            <label htmlFor="user-email"></label>
            <Input id="user-email" type="email" name="email" placeholder="Your e-mail*" />
            <StyledErrorMsg component='p' name="email"/>
          </FormField>
          <LastFormField>
            <label htmlFor="user-message"></label>
            <Input id="user-message" as="textarea" name="message" cols='30' rows='10' placeholder="Your message*"></Input>
            <StyledErrorMsg component='p' name="message"/>
          </LastFormField>
          <button type="submit"><span>Send message</span>{isLoading && <Loader/>}</button>
        </StyledForm>
        </Formik>
      </>
  )
}

export default FeedbackForm;