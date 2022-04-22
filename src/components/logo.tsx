import Link from 'next/link';
import navbarStyles from '../styles/navbar.module.css';

export default function Logo() {
  return (
    <h1 id={navbarStyles.jxly} aria-label="jxly">
      <Link href="/">jxly</Link>
    </h1>
  );
}
