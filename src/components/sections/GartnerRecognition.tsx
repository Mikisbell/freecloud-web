
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const GartnerRecognition = () => {
  return (
    <section id="gartner-recognition" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FreeCloud: Líder en Plataformas de Ciencia de Datos y Machine Learning</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Reconocidos por Gartner Peer Insights, FreeCloud se destaca por su excelencia y la satisfacción de sus usuarios.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-xl font-bold">4.8</span>
              </div>
              <span className="text-muted-foreground">de 741 reseñas</span>
            </div>
            <p className="text-2xl font-bold text-primary mb-8">94% de recomendación</p>
            <Button size="lg" asChild>
              <Link href="#">Obtener el Informe Gartner</Link>
            </Button>
          </div>
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
            {/* Placeholder for Gartner Report Image */}
            <p className="text-muted-foreground">Imagen del Informe Gartner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GartnerRecognition;
