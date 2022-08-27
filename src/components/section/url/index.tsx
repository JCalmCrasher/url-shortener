import Button from '@/components/button/button';
import TextInput from '@/components/input/text-input';
import UrlResult from '@/components/UrlResult';
import { useState } from 'react';
import urlStyles from './url.module.css';

export default function UrlSection() {
  const [url, setUrl] = useState('');

  return (
    <section id={urlStyles.url}>
      <div className={urlStyles.wrapper}>
        <div className={urlStyles.urlArea}>
          <div className="max-w-3xl w-full p-2">
            <div className={urlStyles.urlArea}>
              <input
                type="text"
                id="url-input"
                className={urlStyles.shortenInput}
                name="urlInput"
                placeholder="Shorten your link 😉"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Button
                text="Shorten URL"
                classes="btn-secondary btn-md border border-sky-800 md:max-w-fit max-w-full whitespace-nowrap"
              />
            </div>
            <div className="flex flex-col gap-4 text-black rounded-sm bg-white mt-4 p-2">
              <UrlResult url={url} shortenUrl="url" onCopy={} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
