import { classNames } from '@/utils/classNames';
import AuthButton from '../button/auth-button';
import Button from '../button/button';

interface AuthButtonProps {
  sx?: object;
  breakpoint?: 'large' | 'small';
}

export default function AuthButtons({ sx, breakpoint }: AuthButtonProps) {
  return (
    <div
      className={classNames(
        breakpoint === 'large' ? 'authButtonsLg' : 'authButtonsMobile'
      )}
      style={{ ...sx }}
    >
      <AuthButton
        classes="btn-secondary btn-sm text-slate-400"
        isUrl={true}
        text="Login"
      />
      <Button classes="btn-primary btn-sm" isUrl={true} text="Sign up free" />
    </div>
  );
}
