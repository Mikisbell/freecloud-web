
import { ShieldCheck, Settings, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const scaleFeatures = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: 'Gobernanza de IA',
    description: 'Asegura el cumplimiento y la ética en tus modelos de IA con herramientas de gobernanza robustas.',
    cta: 'Explorar Gobernanza',
    href: '#',
  },
  {
    icon: <Settings className="w-12 h-12 text-primary" />,
    title: 'Operaciones de Ingeniería de IA',
    description: 'Automatiza el ciclo de vida de tus modelos, desde el desarrollo hasta el despliegue y monitoreo.',
    cta: 'Explorar Ingeniería',
    href: '#',
  },
  {
    icon: <Cloud className="w-12 h-12 text-primary" />,
    title: 'Ecosistema de IA',
    description: 'Integra FreeCloud con tus herramientas y plataformas existentes para un flujo de trabajo sin interrupciones.',
    cta: 'Explorar Ecosistema',
    href: '#',
  },
];

const AIScale = () => {
  return (
    <section id="ai-scale" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Gestiona la IA a Escala con Confianza</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            FreeCloud te proporciona las herramientas y el control necesarios para escalar tus iniciativas de IA en toda la empresa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scaleFeatures.map((feature) => (
            <div key={feature.title} className="bg-secondary/50 p-8 rounded-lg shadow-sm text-center transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <Button variant="outline" asChild>
                <Link href={feature.href}>{feature.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIScale;
