import Image from 'next/image';
import { ReactNode } from 'react';

interface WidgetProps {
  title: string;
  children: ReactNode;
  src: string;
}

export default function Card({ title, children, src }: WidgetProps) {
  return (
    <div className="p-3 flex flex-col items-center">
      <Image src={src} alt={title} width={120} height={120} />
      <span className="font-bold">{title}</span>
      {children}
    </div>
  );
}
