import { ShieldCheckIcon, SettingsIcon, CloudIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function AIGovernanceOperations() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Gobernanza de la IA",
      description: "Hacer cumplir los estándares de gobernanza de la IA en todo el trabajo de datos, todo en un solo lugar. Desde análisis hasta modelos y agentes, mantenga la visibilidad y reduzca el riesgo a medida que su cartera de IA escala con FreeCloud.",
      link: "/governance",
    },
    {
      icon: SettingsIcon,
      title: "Operaciones de ingeniería de IA",
      description: "Ya sea que esté automatizando canales de datos para garantizar datos limpios, confiables y oportunos o implementando y administrando modelos o agentes en producción, FreeCloud reúne todas las operaciones de su proyecto sin problemas.",
      link: "/engineering-ops",
    },
    {
      icon: CloudIcon,
      title: "Ecosistema de IA",
      description: "Con FreeCloud, tienes opciones. Ya sea que esté aprovechando la infraestructura existente o adoptando nuevas herramientas, integre perfectamente con su ecosistema manteniendo al mismo tiempo la flexibilidad para evolucionar su pila.",
      link: "/ecosystem",
    },
  ];

  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Gestione la IA a gran escala con confianza
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            FreeCloud te proporciona las herramientas para controlar y escalar tu estrategia de IA.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
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