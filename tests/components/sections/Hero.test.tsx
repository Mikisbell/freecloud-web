import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';
import '@testing-library/jest-dom';

// Mock de next/link y next/image
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1, name: /La Plataforma Unificada para IA y Ciencia de Datos/i })).toBeInTheDocument();
  });

  it('renders the main description', () => {
    render(<Hero />);
    expect(screen.getByText(/Acelera la innovación, democratiza el acceso a los datos y escala tus proyectos de IA desde el prototipo hasta la producción con FreeCloud./i)).toBeInTheDocument();
  });

  it('renders both primary and secondary CTAs', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /Comenzar prueba gratuita/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ver demostración/i })).toBeInTheDocument();
  });

  it('renders the no-credit-card and cancellation benefits', () => {
    render(<Hero />);
    expect(screen.getByText(/Sin tarjeta de crédito/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancelación en cualquier momento/i)).toBeInTheDocument();
  });

  it('renders the hero image with correct alt text', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText('FreeCloud Unified Data Science');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', '/images/platform-illustration.svg');
  });
});
