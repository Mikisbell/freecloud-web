import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function EconomicImpact() {
  const stats = [
    {
      value: "70%",
      description: "reducción del tiempo dedicado al análisis, extracción y preparación de datos.",
    },
    {
      value: "42%",
      description: "reducción del tiempo dedicado a las actividades del ciclo de vida del modelo (capacitación, implementación y monitoreo).",
    },
    {
      value: "413%",
      description: "Retorno de la inversión.",
    },
    {
      value: "23M",
      description: "valor actual neto durante tres años.",
    },
  ];

  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            El impacto económico total™ de FreeCloud
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90">
            Un estudio encargado realizado por Forrester Consulting en nombre de FreeCloud.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-5xl font-extrabold text-white mb-2">{stat.value}</div>
                <p className="text-lg opacity-80">{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/reports/forrester-study" className={cn(buttonVariants({ size: "lg", variant: "secondary" }))}>
              LEA EL ESTUDIO DE FORRESTER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}