import { React, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import css from "./ModalBookNow.module.css";
import ButtonSendBooking from "../Buttons/ButtonSendBooking";
import ModalThankYou from "../ModalThankYou/ModalThankYou";

const initialValues = {
  name: "",
  email: "",
  number: "",
  date: null,
  nights: "",
  adults: "",
  children: "",
  comments: "",
};

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  number: Yup.string()
    .min(6, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  date: Yup.date().required("Required"),
  nights: Yup.number()
    .min(1, "Minimum 1 night")
    .max(30, "Maximum 30 nights")
    .required("Required"),
  adults: Yup.number()
    .min(1, "Minimum 1 adult")
    .max(4, "Maximum 4 adults")
    .required("Required"),
  children: Yup.number()
    .min(0, "Minimum 0 children")
    .max(4, "Maximum 4 children")
    .required("Required"),
  comments: Yup.string(),
});
const BookingForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userName, setUserName] = useState(null);

  const handleSubmit = (FormData, actions) => {
    setUserName(FormData.name);
    setModalOpen(!modalOpen);
    actions.resetForm();
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Schema}
      >
        <Form className={css.form}>
          <label className={css.block}>
            <span className={css.label}>Name Surname</span>
            <Field className={css.input} type="text" name="name" />
          </label>
          <label className={css.block}>
            <span className={css.label}>Email</span>
            <Field className={css.input} type="email" name="email" />
          </label>
          <label className={css.block}>
            <span className={css.label}>Telephone</span>
            <Field className={css.input} type="tel" name="number" />
          </label>
          <div className="date-picker-container">
            <label className={css.block}>
              <span className={css.label}>Date of arrival</span>
              <Field className={css.input} name="date">
                {({ field, form }) => (
                  <DatePicker
                    className={css.input}
                    selected={field.value}
                    onChange={(date) => form.setFieldValue(field.name, date)}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="Select a date"
                    autoComplete="off"
                  />
                )}
              </Field>
            </label>
          </div>

          <div className={css.inner_container}>
            <label className={css.block_small}>
              <span className={css.label}>Nights</span>
              <Field className={css.input_small} type="number" name="nights" />
            </label>
            <label className={css.block_small}>
              <span className={css.label}>Adults</span>
              <Field className={css.input_small} type="number" name="adults" />
            </label>
            <label className={css.block_small}>
              <span className={css.label}>Children</span>
              <Field
                className={css.input_small}
                type="number"
                name="children"
                placeholder="2-12 yo"
              />
            </label>
          </div>

          <label className={css.block_comments}>
            <span className={css.label_comments}>Comments</span>
            <Field
              className={css.input_comments}
              type="text"
              name="comments"
              placeholder="Comments"
            />
          </label>
          <div className={css.btn_container}>
            <ButtonSendBooking />
          </div>
        </Form>
      </Formik>
      {modalOpen && <ModalThankYou onClose={toggleModal} name={userName} />}
    </>
  );
};

export default BookingForm;
