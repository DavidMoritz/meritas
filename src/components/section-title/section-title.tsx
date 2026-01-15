import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="font-extrabold text-2xl text-gray-900 leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
      {children}
    </h2>
  );
}
