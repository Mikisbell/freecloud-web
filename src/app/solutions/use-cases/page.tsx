import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Casos de Uso - FreeCloud',
  description: 'Descubre cómo FreeCloud puede transformar tu negocio con nuestros casos de uso empresariales',
};

type UseCaseCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const UseCaseCard = ({ title, description, icon }: UseCaseCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
    <div className="text-blue-600 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function UseCasesPage() {
  const useCases = [
    {
      title: 'Automatización de Procesos',
      description: 'Automatiza tareas repetitivas y aumenta la eficiencia operativa en tu empresa con nuestras soluciones de IA.',
      icon: '⚙️',
    },
    {
      title: 'Análisis Predictivo',
      description: 'Anticipa tendencias y toma decisiones basadas en datos en tiempo real con nuestro motor de análisis avanzado.',
      icon: '📊',
    },
    {
      title: 'Atención al Cliente Inteligente',
      description: 'Mejora la experiencia del cliente con chatbots y asistentes virtuales impulsados por IA.',
      icon: '🤖',
    },
    {
      title: 'Gestión de Documentos',
      description: 'Organiza y procesa documentos de manera inteligente con nuestro sistema de gestión documental con IA.',
      icon: '📄',
    },
    {
      title: 'Monitoreo en Tiempo Real',
      description: 'Supervisa tus operaciones y recibe alertas en tiempo real para una mejor toma de decisiones.',
      icon: '👁️',
    },
    {
      title: 'Optimización de Recursos',
      description: 'Maximiza la eficiencia de tus recursos con nuestras herramientas de análisis y planificación.',
      icon: '📈',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Casos de Uso</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo FreeCloud puede transformar tu negocio con soluciones de IA adaptadas a tus necesidades específicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard 
              key={index}
              title={useCase.title}
              description={useCase.description}
              icon={useCase.icon}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/contacto" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Contáctanos para más información
          </Link>
        </div>
      </div>
    </div>
  );
}
