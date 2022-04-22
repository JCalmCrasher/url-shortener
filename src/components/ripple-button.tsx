import { classNames } from '../utils/classNames';

interface RippleButtonProps {
  classes?: string;
  rippleColor: string;
  text: string;
}
export default function RippleButton({
  rippleColor,
  classes,
  text,
}: RippleButtonProps) {
  return (
    <div>
      <button
        className={classNames(classes === undefined ? '' : classes, 'ripple')}
      >
        {text}
      </button>
      <style jsx>{`
        .ripple {
          background-position: center;
          transition: background 0.8s;
        }

        .ripple:hover {
            radial-gradient(circle, transparent 1%, ${rippleColor} 1%)
            center/15000%;
        }

        .ripple:active {
          background-size: 100%;
          transition: background 0s;
        }
      `}</style>
    </div>
  );
}
