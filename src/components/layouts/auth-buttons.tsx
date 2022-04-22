import navbarStyles from '../../styles/navbar.module.css';
import { classNames } from '../../utils/classNames';

interface AuthButtonProps {
  classes?: string;
  sx?: object;
  breakpoint?: 'large' | 'small';
}

export default function AuthButtons({
  sx,
  breakpoint,
  classes,
}: AuthButtonProps) {
  return (
    <div
      className={classNames(
        breakpoint === 'large'
          ? navbarStyles.authButtonsLg
          : navbarStyles.authButtonsMobile,
        classes === undefined ? '' : classes
      )}
      style={{ ...sx }}
    >
      <button type="button" className={navbarStyles.button}>
        Login
      </button>
      <button type="button" className={navbarStyles.button}>
        Sign up free
      </button>
    </div>
  );
}
