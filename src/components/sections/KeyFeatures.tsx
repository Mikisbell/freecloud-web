import { BrainCircuitIcon, CpuIcon, BarChartIcon, DatabaseIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function KeyFeatures() {
  const features = [
    {
      icon: BrainCircuitIcon,
      title: "GenAI y agentes",
      description: "Vaya más allá de los POC. Cree agentes de IA de nivel empresarial y casos de uso de GenAI a escala. FreeCloud ofrece de todo, desde una puerta de enlace LLM segura hasta herramientas de desarrollo, evaluación y gobernanza.",
      link: "/features/genai",
    },
    {
      icon: CpuIcon, // Usar un icono adecuado para ML
      title: "Aprendizaje automático",
      description: "Desde un enfoque guiado con AutoML hasta técnicas de vanguardia y código completo, utilice FreeCloud para crear y evaluar modelos de aprendizaje automático (ML) más rápido — todo con los más altos estándares de explicabilidad.",
      link: "/features/machine-learning",
    },
    {
      icon: BarChartIcon,
      title: "Análisis y perspectivas",
      description: "Actualice sus esfuerzos de análisis de BI y autoservicio con FreeCloud. Todos tomamos decisiones cotidianas mejores y más rápidas basadas en datos confiables a través de visualización, paneles, narración impulsada por GenAI y más.",
      link: "/features/analytics",
    },
    {
      icon: DatabaseIcon,
      title: "Preparación de datos para IA",
      description: "Conecte, limpie y prepare datos 10 veces más rápido con FreeCloud. Desde la preparación de datos, la transición sin esfuerzo a cualquier cosa, desde el análisis básico hasta el modelado e incluso la implementación —, todo dentro de un solo entorno.",
      link: "/features/data-prep",
    },
  ];

  return (
    <section id="platform" className="w-full py-8 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Cree análisis, modelos y agentes en un solo lugar
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            FreeCloud ofrece una plataforma integral para todas sus necesidades de IA.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{feature.description}</p>
              <Link href={feature.link} className={cn(buttonVariants({ variant: "link" }), "self-start")}>
                EXPLORAR
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
