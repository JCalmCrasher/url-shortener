import Button from '@/components/button/button';
import UrlResult from '@/components/UrlResult';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import { URLResponse } from '@/pages/api/response';
import fetcher from '@/utils/fetcher';
import { Form, FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { TIMEOUT_VALUE } from 'src/variables/general';
import * as Yup from 'yup';
import urlStyles from './url.module.css';

const URL_PATTERN = new RegExp(
  '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?'
);
export default function UrlSection() {
  const [urls, setUrls] = useState<URLResponse[]>([]);
  const [copied, setCopied] = useState(false);
  const [, copy] = useCopyToClipboard();
  const [isShortened, setIsShortened] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      url: ''
    },
    onSubmit: (values) => {
      fetcher('/shorten', {
        url: values.url
      })
        .then((res: URLResponse) => {
          setUrls([...urls, res]);

          setSubmitting(false);

          // set the url input to the short url
          setFieldValue(
            'url',
            `${process.env.NEXT_PUBLIC_APP_URL}/${res.shortUrl}`
          );

          setIsShortened(true);
        })
        .catch(() => {
          setErrorMessage('Something went wrong. Please try again.');
        });
    },
    validationSchema: Yup.object().shape({
      url: Yup.string()
        .matches(URL_PATTERN, 'Enter valid URL')
        .required('Enter a URL')
    })
  });

  const handleCopy = (val: string) => {
    copy(val).then(() => {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, TIMEOUT_VALUE);
    });
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    isSubmitting,
    setSubmitting,
    setFieldValue
  } = formik;

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
                    onChange={(e) => {
                      setIsShortened(false);
                      handleChange(e);
                    }}
                  />
                  {!isShortened && (
                    <Button
                      text="Shorten URL"
                      classes="btn-secondary btn-md border border-sky-800 w-56"
                      type="submit"
                      disabled={isSubmitting}
                    />
                  )}
                  {isShortened && (
                    <Button
                      text={copied ? 'Copied' : 'Copy'}
                      classes={`btn-secondary btn-md border border-sky-800 w-56 ${
                        copied &&
                        'bg-green-400 hover:bg-green-400 border border-transparent'
                      }`}
                      type="button"
                      onClick={() => handleCopy(values.url)}
                    />
                  )}
                </div>
              </Form>
            </FormikProvider>
            {touched.url && errors.url ? (
              <small className="text-red-300 font-medium">{errors.url}</small>
            ) : null}

            {errorMessage && (
              <small className="text-red-300 font-medium">{errors.url}</small>
            )}
            {urls.length > 0 && (
              <div className="flex flex-col gap-4 text-black rounded-sm bg-white mt-4 p-2">
                {urls.map((singleUrl, i) => (
                  <UrlResult
                    key={i}
                    url={singleUrl.url}
                    shortenUrl={singleUrl.shortUrl}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
