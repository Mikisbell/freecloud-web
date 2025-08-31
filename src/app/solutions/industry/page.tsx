import { Metadata } from 'next';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Soluciones por Industria - FreeCloud',
  description: 'Descubre cómo FreeCloud puede transformar tu industria con soluciones de IA personalizadas.',
};

export default function IndustrySolutionsPage() {
  const industries = [
    {
      id: 'manufacturing',
      name: 'Manufactura',
      description: 'Optimiza la producción, reduce el tiempo de inactividad y mejora el control de calidad con IA predictiva.',
      icon: '🏭',
    },
    {
      id: 'finance',
      name: 'Finanzas',
      description: 'Detección de fraude, análisis de riesgo y automatización de procesos financieros con IA.',
      icon: '💳',
    },
    {
      id: 'healthcare',
      name: 'Salud',
      description: 'Diagnóstico asistido, investigación médica y gestión de pacientes con tecnología de vanguardia.',
      icon: '🏥',
    },
    {
      id: 'retail',
      name: 'Retail',
      description: 'Personalización, gestión de inventario y análisis de comportamiento del cliente.',
      icon: '🛍️',
    },
  ];

  return (
    <div className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Soluciones para tu industria
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Descubre cómo podemos impulsar la transformación digital en tu sector con soluciones de IA personalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {industries.map((industry) => (
            <div 
              key={industry.id}
              className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {industry.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {industry.description}
              </p>
              <Link 
                href={`/contact?industry=${industry.id}`}
                className={buttonVariants({ variant: 'outline' })}
              >
                Saber más
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
