import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { TIMEOUT_VALUE } from 'src/variables/general';
import { useCopyToClipboard } from '../hooks';

interface Props {
  url: string;
  shortenUrl: string;
}
const UrlResult = ({ url, shortenUrl }: Props) => {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    copy(shortenUrl).then(() => {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, TIMEOUT_VALUE);
    });
  };

  return (
    <div className="flex md:flex-row flex-col justify-between items-center">
      <span className="truncate">{url}</span>
      <div className="inline-flex items-center gap-2">
        <a href={shortenUrl} className="text-blue-600 truncate">
          {shortenUrl}
        </a>
        <button
          className="bg-secondary text-white px-2 py-[6px] rounded w-10"
          onClick={onCopy}
        >
          {copied ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faCopy} />
          )}
        </button>
      </div>
    </div>
  );
};

export default UrlResult;
