import Button from '@/components/button/button';
import TextInput from '@/components/input/text-input';
import UrlResult from '@/components/UrlResult';
import { classNames } from '@/utils/helpers';
import urlStyles from './url.module.css';

export default function UrlSection() {
  return (
    <section id={urlStyles.url}>
      <div className={urlStyles.wrapper}>
        <div className={urlStyles.urlArea}>
          <div className="max-w-3xl w-full p-2">
            <div className={urlStyles.urlArea}>
              <TextInput id="shorten-url" classes={urlStyles.shortenInput} />
              <Button
                text="Shorten URL"
                classes="btn-secondary btn-md border border-sky-800 md:max-w-fit max-w-full whitespace-nowrap"
              />
            </div>
            <div className="flex flex-col gap-4 text-black rounded-sm bg-white mt-4 p-2">
              <UrlResult />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
