import { classNames } from '@/utils/classNames';

interface TextInputProps {
  id: string;
  classes?: string;
  sx?: object;
}
export default function TextInput({ id, classes = '', sx }: TextInputProps) {
  return (
    <input
      type="text"
      id={id}
      name={id}
      className={classNames(classes)}
      {...sx}
    />
  );
}
