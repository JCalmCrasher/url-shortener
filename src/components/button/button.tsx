import Link from 'next/link';
import { classNames } from '@/utils/classNames';

interface ButtonProps {
  text: string;
  classes?: string;
  url?: string;
  isUrl?: boolean;
  sx?: object;
}
export default function Button({
  text,
  classes = '',
  url = '/',
  isUrl = false,
  sx
}: ButtonProps) {
  return (
    <button className={classNames('btn text-center', classes)} {...sx}>
      {isUrl ? <Link href={url}>{text}</Link> : text}
    </button>
  );
}
