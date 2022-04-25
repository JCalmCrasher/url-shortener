import Button from '@/components/button/button';
import TextInput from '@/components/input/text-input';
import urlStyles from './url-section.module.css';
import utilStyles from '@/styles/utils.module.css';

export default function UrlSection() {
  return (
    <section id={urlStyles.url}>
      <div className={urlStyles.wrapper}>
        <div className={urlStyles.urlArea}>
          <TextInput
            id="shorten-url"
            classes={urlStyles.shortenInput}
            sx={{ placeholder: 'Shorten your link 😉' }}
          />
          <Button
            text="Shorten URL"
            classes="btn-secondary btn-md border border-sky-800 md:max-w-fit max-w-full"
          />
        </div>
        <p className={urlStyles.termsNConditions}>
          By clicking SHORTEN, you are agreeing to Jxly’s Terms of Service,{' '}
          <a href="#" className={utilStyles.linkHover}>
            Privacy Policy
          </a>
          , and{' '}
          <a href="#" className={utilStyles.linkHover}>
            Acceptable Use Policy
          </a>
        </p>
      </div>
    </section>
  );
}
