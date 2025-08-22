import Image from "next/image";
import { LightbulbIcon, UsersIcon, TrendingUpIcon } from "lucide-react";

export function ProblemSolution() {
  return (
    <section id="platform" className="w-full py-8 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 items-center">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Supera los Desafíos de la IA Empresarial
            </h2>
            <p className="max-w-[600px] text-gray-600 md:text-lg dark:text-gray-400">
              Muchas empresas luchan con la complejidad, la fragmentación y la falta de escalabilidad en sus iniciativas de IA. FreeCloud resuelve estos problemas ofreciendo una plataforma integral.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <LightbulbIcon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold">De la Idea a la Producción</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Transforma rápidamente tus prototipos en soluciones de IA robustas y operativas.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <UsersIcon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Colaboración sin Esfuerzo</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Unifica equipos de datos, analistas y desarrolladores en un solo entorno.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TrendingUpIcon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Impacto de Negocio Real</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Genera valor tangible y medible a través de la aplicación estratégica de la IA.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] w-full lg:h-[450px] xl:h-[600px] flex items-center justify-center">
          {/* Ilustración que muestre la complejidad resuelta */}
          <Image
            src="/images/problem-solution.svg" // Nueva imagen
            width={500}
            height={500}
            alt="Problem Solution Illustration"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}