import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Section = ({ children, id, className = "" }: SectionProps) => (
  <section id={id} className={`py-20 ${className}`}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle: string;
}

const SectionTitle = ({ children, subtitle }: SectionTitleProps) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{children}</h2>
    {subtitle ? <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p> : null}
  </div>
);

export { Section, SectionTitle };
