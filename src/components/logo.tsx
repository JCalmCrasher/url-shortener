import Link from 'next/link';
import navbarStyles from '@/components/layouts/styles/navbar.module.css';
import { APP_NAME } from '@/utils/index';

export default function Logo() {
  return (
    <h1 className={navbarStyles.logo} aria-label={APP_NAME}>
      <Link href="/">{APP_NAME}</Link>
    </h1>
  );
}
