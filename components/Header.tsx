import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps): React.JSX.Element {
  return (
    <header className="main-header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
