import Link from 'next/link';
import { classNames } from '@/utils/classNames';

interface ButtonProps {
  text: string;
  classes?: string;
  url?: string;
  isUrl?: boolean;
  sx?: object;
  disabled: boolean;
}
export default function Button({
  text,
  classes = '',
  url = '/',
  isUrl = false,
  sx,
  disabled = false
}: ButtonProps) {
  return (
    <>
      {isUrl ? (
        <Link href={url} passHref>
          <button
            className={classNames('btn text-center', classes)}
            disabled={disabled}
            {...sx}
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
          className={classNames('btn text-center', classes)}
          disabled={disabled}
          {...sx}
        >
          {text}
        </button>
      )}
    </>
  );
}
