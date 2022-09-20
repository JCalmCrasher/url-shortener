import { nanoid } from 'nanoid';

export default function shortenUrl() {
  return `${process.env.NEXT_PUBLIC_APP_URL}/${nanoid(10)}`;
}
