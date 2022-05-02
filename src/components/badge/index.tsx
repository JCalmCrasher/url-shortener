import { classNames } from '@/utils/classNames';

interface BadgeProps {
  text: string;
  color?: 'text-primary' | 'text-secondary' | 'text-blue-600';
}

export default function Badge({ text, color = 'text-blue-600' }: BadgeProps) {
  return <small className={classNames('rounded-lg p-1', color)}>{text}</small>;
}
