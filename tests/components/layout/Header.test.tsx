import { render, screen } from '@testing-library/react';
import { Header } from '@/components/layout/Header';
import '@testing-library/jest-dom';

// Mock de next/link para que no falle en tests
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Header', () => {
  it('renders the site name', () => {
    render(<Header />);
    expect(screen.getByText('FreeCloud')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /Plataforma/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Soluciones/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Clientes/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Recursos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contacto/i })).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /Comenzar prueba gratuita/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ver demostración/i })).toBeInTheDocument();
  });
});
