import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
const UserScheme = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short! Not less than 3 symbols.")
    .max(50, "Too many! No more than 50 symbols.")
    .required("This field is required!"),
    number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Phone number is not valid. Correct format is: 123-45-67"
    )
    .min(3, "Phone number is too short!")
    .max(50, "Phone number is too long!")
    .required("This field is required!"),
});
export default function ContactForm({ onAdd }) {
  const id = useId();
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserScheme}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
 <Form className={css.form}>
        <label htmlFor={`${id}-name`}>Name</label>
        <Field type="text" id={`${id}-name`} name="name" />
        <ErrorMessage name="name" component="span" className={css.errText} />
        <label htmlFor={`${id}-number`}>Number</label>
        <Field type="text" id={`${id}-number`} name="number" />
        <ErrorMessage name="number" component="span" className={css.errText} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}