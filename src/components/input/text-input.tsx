import { classNames } from '@/utils/helpers';

interface TextInputProps {
  id: string;
  classes?: string;
  style?: object;
}
export default function TextInput({ id, classes = '', style }: TextInputProps) {
  return (
    <input
      type="text"
      id={id}
      name={id}
      className={classNames(classes)}
      style={style}
      placeholder='Shorten your link 😉'
    />
  );
}
