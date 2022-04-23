import Button from '@/components/button/button';
import TextInput from '@/components/input/text-input';
import urlStyles from './url-section.module.css';

export default function UrlSection() {
  return (
    <section id={urlStyles.url}>
      <div className={urlStyles.wrapper}>
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
    </section>
  );
}
