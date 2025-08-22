import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              La plataforma universal de IA™ <br className="hidden md:inline"/> para orquestar la IA empresarial
            </h1>
            <p className="max-w-[700px] text-lg text-gray-600 md:text-xl dark:text-gray-400 mx-auto lg:mx-0">
              Desbloquee la creación de análisis, modelos y agentes en los que la gente confíe — con el control que necesita para escalar.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
            <Link
              href="/demo" // Véalo en acción
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Véalo en acción
            </Link>
            <Link
              href="/#contact" // Empezar a construir
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Empezar a construir
            </Link>
          </div>
          {/* El texto de confianza de clientes se moverá a una sección dedicada */}
        </div>
        <div className="relative h-[350px] w-full lg:h-[500px] xl:h-[650px] flex items-center justify-center">
          {/* Placeholder para una ilustración compleja de plataforma de IA */}
          <Image
            src="/images/robot3.svg" // Usando el robot SVG
            width={600}
            height={600}
            alt="FreeCloud Unified Data Science"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
