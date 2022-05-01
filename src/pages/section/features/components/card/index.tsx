import Image from 'next/image';
import cardStyles from './card.module.css';

interface WidgetProps {
  title: string;
  description: string;
  src: string;
}

export default function Card({ title, description, src }: WidgetProps) {
  return (
    <div className={cardStyles.card}>
      <Image src={src} alt={title} width={120} height={120} />
      <span className="font-bold">{title}</span>
      <p>{description}</p>
    </div>
  );
}
