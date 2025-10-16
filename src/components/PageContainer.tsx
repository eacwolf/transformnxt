import type { ReactNode } from 'react';

interface Props { children: ReactNode }

export default function PageContainer({ children }: Props) {
  return (
    <div className="w-full bg-white mt-24">
      <section className="container mx-auto px-4 py-14">
        <div className="max-w-6xl mx-auto text-gray-900">{children}</div>
      </section>
    </div>
  );
}
