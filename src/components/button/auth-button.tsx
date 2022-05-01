import { classNames } from '@/utils/classNames';
import Link from 'next/link';

interface AuthButtonProps {
  text: string;
  classes?: string;
  url?: string;
  isUrl?: boolean;
  sx?: object;
}
export default function AuthButton({
  text,
  classes = '',
  url = '/',
  isUrl = false,
  sx
}: AuthButtonProps) {
  return (
    <button
      className={classNames('btn border border-solid border-sky-800', classes)}
      {...sx}
    >
      {isUrl ? <Link href={url}>{text}</Link> : text}
    </button>
  );
}
