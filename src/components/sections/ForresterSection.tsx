
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ForresterSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
            <Image 
              src="https://placehold.co/600x400/0f172a/ffffff?text=Forrester+Report"
              alt="Forrester Report Cover"
              width={600}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-primary uppercase">Estudio de Forrester Consulting</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">El Impacto Económico Total™ de FreeCloud</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Descubre cómo FreeCloud ofrece un retorno de inversión significativo y optimiza tus operaciones de IA, según un estudio comisionado por Forrester Consulting.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                    <p className="text-4xl font-bold text-primary">70%</p>
                    <p className="text-sm text-muted-foreground">Reducción de tiempo en análisis de datos</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-primary">42%</p>
                    <p className="text-sm text-muted-foreground">Mejora en el ciclo de vida del modelo</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-primary">413%</p>
                    <p className="text-sm text-muted-foreground">ROI</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-primary">$23M</p>
                    <p className="text-sm text-muted-foreground">Valor presente neto</p>
                </div>
            </div>
            <Button size="lg" className="mt-8" asChild>
                <Link href="#">Descargar el informe</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForresterSection;
