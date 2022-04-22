import Link from 'next/link';
import navbarStyles from '../styles/navbar.module.css';
import { APP_NAME } from '../utils/constants';

export default function Logo() {
  return (
    <h1 className={navbarStyles.logo} aria-label={APP_NAME}>
      <Link href="/">{APP_NAME}</Link>
    </h1>
  );
}
