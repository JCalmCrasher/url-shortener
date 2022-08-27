import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCopyToClipboard } from '../hooks';

interface Props {
  url: string;
  shortenUrl: string;
}
const UrlResult = ({ url, shortenUrl }: Props) => {
  const [value, copy] = useCopyToClipboard();

  const onCopy = () => {
    copy(shortenUrl);
    console.log({ value });
  };

  return (
    <div className="flex md:flex-row flex-col justify-between items-center">
      <span className="truncate">{url}</span>
      <div className="inline-flex items-center gap-2">
        <a href="#" className="text-blue-600 truncate">
          {shortenUrl}
        </a>
        <button
          className="bg-secondary text-white px-2 py-[4px] rounded w-10"
          onClick={onCopy}
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </div>
  );
};

export default UrlResult;
