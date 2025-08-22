import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { LogoCarousel } from "@/components/shared/LogoCarousel"; // Importar el nuevo componente

export function CustomerLogos() {
  const mainLogos = [
    "/images/carrusel/Anthropic.svg",
    "/images/carrusel/AWS.svg",
    "/images/carrusel/Databricks.svg",
    "/images/carrusel/Deloitte.svg",
    "/images/carrusel/Michelin.svg",
    "/images/carrusel/Mistral-1.svg",
    "/images/carrusel/Novartis.svg",
    "/images/carrusel/NVIDIA.svg",
    "/images/carrusel/OpenAI.svg",
    "/images/carrusel/Snowflake.svg",
  ];

  return (
    <section id="customers" className="w-full py-8 md:py-16 lg:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Con la confianza de Clientes, Socios & el Ecosistema de IA
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Empresas líderes globales confían en FreeCloud para orquestar su IA empresarial.
          </p>
        </div>
        {/* Integrar el carrusel de logos */}
        <LogoCarousel logos={mainLogos} />

        {/* Secciones de informes y casos de estudio */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Dataiku es líder por cuarta vez</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Obtenga el informe Gartner para conocer por qué.</p>
            <Link href="/reports/gartner-report" className={cn(buttonVariants({ variant: "link" }))}>
              Obtenga el informe Gartner
            </Link>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Transformando las operaciones de Rolls-Royce</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Vea cómo Dataiku y Deloitte colaboraron.</p>
            <Link href="/case-studies/rolls-royce" className={cn(buttonVariants({ variant: "link" }))}>
              VER CÓMO: DATAIKU + DELOITTE
            </Link>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Creación de aplicaciones operativas a escala</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Lea la guía tecnológica de O'Reilly.</p>
            <Link href="/guides/oreilly-guide" className={cn(buttonVariants({ variant: "link" }))}>
              LEA LA GUÍA TECNOLÓGICA DE O'REILLY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
