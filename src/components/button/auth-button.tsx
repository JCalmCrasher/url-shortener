import { classNames } from '@/utils/helpers';
import Link from 'next/link';

interface AuthButtonProps {
  text: string;
  classes?: string;
  url?: string;
  isUrl?: boolean;
  sx?: object;
  disabled?: boolean;
}
export default function AuthButton({
  text,
  classes = '',
  url = '/',
  isUrl = false,
  sx,
  disabled = false
}: AuthButtonProps) {
  return (
    <>
      {isUrl ? (
        <Link href={url} passHref>
          <button
            disabled={disabled}
            className={classNames(
              'btn border border-solid border-sky-800',
              classes
            )}
            {...sx}
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
          disabled={disabled}
          className={classNames(
            'btn border border-solid border-sky-800',
            classes
          )}
          {...sx}
        >
          {text}
        </button>
      )}
    </>
  );
}
