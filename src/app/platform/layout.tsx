import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FreeCloud Platform',
  description: 'Plataforma avanzada de IA y análisis de datos',
};

export const viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
