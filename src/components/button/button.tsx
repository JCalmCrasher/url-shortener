import Link from 'next/link';
import { classNames } from '@/utils/helpers';
import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<any> {
  text: string;
  classes?: string;
  url?: string;
  isUrl?: boolean;
  style?: object;
  disabled?: boolean;
}
export default function Button({
  text,
  classes = '',
  url = '/',
  isUrl = false,
  style,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <>
      {isUrl ? (
        <Link href={url} passHref>
          <button
            className={classNames('btn text-center', classes)}
            disabled={disabled}
            style={style}
            {...props}
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
          className={classNames('btn text-center', classes)}
          disabled={disabled}
          style={style}
          {...props}
        >
          {text}
        </button>
      )}
    </>
  );
}
