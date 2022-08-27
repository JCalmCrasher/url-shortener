import Button from '@/components/button/button';
import UrlResult from '@/components/UrlResult';
import { Form, FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import urlStyles from './url.module.css';

export default function UrlSection() {
  const [url, setUrl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      url: ''
    },
    onSubmit: async (values) => {
      console.log({ values });
    },
    validationSchema: Yup.object().shape({
      url: Yup.string().required('Please enter a valid URL')
    })
  });

  const { values, errors, touched, handleChange, } = formik;

  return (
    <section id={urlStyles.url}>
      <div className={urlStyles.wrapper}>
        <div className={urlStyles.urlArea}>
          <div className="max-w-3xl w-full p-2">
            <FormikProvider value={formik}>
              <Form>
                <div className={urlStyles.urlArea}>
                  <input
                    type="text"
                    id="url-input"
                    name="url"
                    className={urlStyles.shortenInput}
                    placeholder="Shorten your link 😉"
                    value={values.url}
                    onChange={handleChange}
                  />
                  <Button
                    text="Shorten URL"
                    classes="btn-secondary btn-md border border-sky-800 md:max-w-fit max-w-full whitespace-nowrap"
                    type='submit'
                    disabled={isLoading}
                  />
                </div>
              </Form>
            </FormikProvider>
            {touched.url && errors.url ? (
              <small className="text-red-300 font-medium">{errors.url}</small>
            ) : null}
            <div className="flex flex-col gap-4 text-black rounded-sm bg-white mt-4 p-2">
              <UrlResult url={values.url} shortenUrl="url" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
