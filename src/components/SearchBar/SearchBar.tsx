import { Field, Form, Formik, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import searchIcon from '/src/img/searchIcon.svg';
import { Props, FormValues } from './SearchBar.types';
import React from 'react';

function SearchBar({ onSubmit }: Props): React.ReactElement {
  const notify = () => toast('Please type a desired word.');

  function handleSubmit(
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) {
    if (values.searchedText.trim() !== '') {
      onSubmit(values.searchedText);
      actions.resetForm();
    } else {
      notify();
    }
  }

  return (
    <header className={css.header}>
      <Formik initialValues={{ searchedText: '' }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <button className={css.button} type="submit">
              <img className={css.searchIcon} src={searchIcon} alt="Search" />
            </button>
            <Field
              className={css.input}
              name="searchedText"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </div>
        </Form>
      </Formik>
      <Toaster position="top-right" />
    </header>
  );
}

export default SearchBar;
