import utilStyles from '../../styles/utils.module.css';
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
          ? utilStyles.authButtonsLg
          : utilStyles.authButtonsMobile,
        classes === undefined ? '' : classes
      )}
      style={{ ...sx }}
    >
      <button type="button" className={classNames(utilStyles.button, utilStyles.ripple)}>
        Login
      </button>
      <button type="button" className={classNames(utilStyles.button, utilStyles.ripple)}>
        Sign up free
      </button>
    </div>
  );
}
