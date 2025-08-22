import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCallToAction() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-primary text-primary-foreground text-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            ¿Listo para empezar a construir?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90">
            Obtenga su prueba gratuita hoy
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Link
              href="/#contact"
              className={cn(buttonVariants({ size: "lg", variant: "secondary" }))}
            >
              Empezar a construir
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Ponte en contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}