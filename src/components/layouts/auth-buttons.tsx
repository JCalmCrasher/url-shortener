import { classNames } from '@/utils/helpers';
import AuthButton from '../button/auth-button';
import Button from '../button/button';

interface AuthButtonProps {
  sx?: object;
  breakpoint?: 'large' | 'small';
  others?: object;
}

export default function AuthButtons({
  sx,
  breakpoint,
  others
}: AuthButtonProps) {
  return (
    <div
      className={classNames(
        breakpoint === 'large' ? 'authButtonsLg' : 'authButtonsMobile'
      )}
      style={{ ...sx }}
      {...others}
    >
      <AuthButton
        classes="btn-secondary btn-sm text-slate-400"
        isUrl={true}
        text="Login"
        disabled={true}
      />
      <Button
        classes="btn-primary btn-sm"
        isUrl={true}
        text="Sign up free"
        disabled={true}
      />
    </div>
  );
}
