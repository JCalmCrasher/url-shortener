import utilStyles from '@/styles/utils.module.css';
import { classNames } from '@/utils/classNames';
import AuthButton from '../button/auth-button';

interface AuthButtonProps {
  sx?: object;
  breakpoint?: 'large' | 'small';
}

export default function AuthButtons({ sx, breakpoint }: AuthButtonProps) {
  return (
    <div
      className={classNames(
        breakpoint === 'large'
          ? utilStyles.authButtonsLg
          : utilStyles.authButtonsMobile
      )}
      style={{ ...sx }}
    >
      <AuthButton
        classes="border border-solid border-sky-800 btn-sm"
        isUrl={true}
        text="Login"
      />
      <AuthButton
        classes="border border-solid border-sky-800 btn-sm"
        isUrl={true}
        text="Sign up free"
      />
    </div>
  );
}
