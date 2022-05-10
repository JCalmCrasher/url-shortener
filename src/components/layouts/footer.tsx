import Link from 'next/link';
import Logo from '../logo';

export default function TheFooter() {
  return (
    <footer>
      <div className="flex md:flex-row flex-col md:space-y-0 space-y-2 justify-between">
        <Logo />
        <div className="space-x-2">
          <small>
            <Link href="#" passHref>
              Privacy Policy
            </Link>
          </small>
          <small>
            <Link href="#" passHref>
              Terms of Service
            </Link>
          </small>
        </div>
      </div>
    </footer>
  );
}
