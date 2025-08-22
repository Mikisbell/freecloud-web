import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ResourcesPreview() {
  const resources = [
    {
      title: "IA para la fabricación: guía de casos de uso",
      description: "Cada minuto de inactividad no planificada cuesta a los fabricantes miles de dólares. Sin embargo, la mayoría de los equipos siguen volando a ciegas cuando se trata de mantenimiento predictivo.",
      image: "https://via.placeholder.com/300x200/007bff/ffffff?text=Manufacturing+AI", // Placeholder
      link: "/blog/manufacturing-ai-use-cases",
      date: "21 de agosto de 2025",
      category: "fabricación",
    },
    {
      title: "Gobernanza de la IA activa: 4 criterios para evaluar herramientas",
      description: "Escalando la IA. Indicaciones inquietantes para evaluar el sesgo en las tareas de LLM.",
      image: "https://via.placeholder.com/300x200/28a745/ffffff?text=AI+Governance", // Placeholder
      link: "/blog/ai-governance-criteria",
      date: "19 de agosto de 2025",
      category: "Escalando la IA",
    },
    {
      title: "IA para análisis de marketing: su guía para la hiperpersonalización",
      description: "Comercializadores en una computadora. IA agente gobernante.",
      image: "https://via.placeholder.com/300x200/ffc107/ffffff?text=Marketing+AI", // Placeholder
      link: "/blog/marketing-ai-hyperpersonalization",
      date: "15 de agosto de 2025",
      category: "Casos de uso y proyectos",
    },
  ];

  return (
    <section id="resources" className="w-full py-8 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Últimos conocimientos de nuestro equipo
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            EXPLORA EL BLOG
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <div key={index} className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{resource.category} • {resource.date}</p>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{resource.description}</p>
                <Link href={resource.link} className={cn(buttonVariants({ variant: "link" }), "self-start")}>
                  EXPLORAR <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            Ver todos los conocimientos
          </Link>
        </div>
      </div>
    </section>
  );
}