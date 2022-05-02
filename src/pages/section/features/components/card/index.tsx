import { classNames } from '@/utils/classNames';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import cardStyles from './card.module.css';

interface WidgetProps {
  title: string;
  children: ReactNode;
  src: string;
}

export default function Card({ title, children, src }: WidgetProps) {
  return (
    <div className={classNames('card', cardStyles.feature)}>
      <Image src={src} alt={title} width={120} height={120} />
      <span className="font-bold">{title}</span>
      {children}
    </div>
  );
}
