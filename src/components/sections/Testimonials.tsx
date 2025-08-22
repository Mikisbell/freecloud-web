import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      quote: "FreeCloud transformó nuestra eficiencia operativa. La implementación fue increíblemente rápida y los resultados superaron nuestras expectativas.",
      name: "Ana García",
      title: "CTO, TechSolutions Inc.",
      avatar: "https://avatars.githubusercontent.com/u/1?v=4", // Placeholder
    },
    {
      quote: "La escalabilidad de FreeCloud nos permitió crecer sin preocuparnos por la infraestructura. Es la plataforma definitiva para cualquier empresa que busque innovar con IA.",
      name: "Carlos Ruiz",
      title: "CEO, InnovateCorp",
      avatar: "https://avatars.githubusercontent.com/u/2?v=4", // Placeholder
    },
    {
      quote: "La facilidad de uso y la potencia de los modelos de IA de FreeCloud son inigualables. Hemos reducido nuestros costos y mejorado la toma de decisiones significativamente.",
      name: "María López",
      title: "Directora de Datos, DataDriven Co.",
      avatar: "https://avatars.githubusercontent.com/u/3?v=4", // Placeholder
    },
  ];

  return (
    <section id="testimonials" className="w-full py-8 md:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Historias de éxito de empresas que han transformado sus operaciones con FreeCloud.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <blockquote className="text-lg font-semibold leading-snug text-gray-900 dark:text-gray-100">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex flex-col items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover mb-2"
                />
                <div className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
