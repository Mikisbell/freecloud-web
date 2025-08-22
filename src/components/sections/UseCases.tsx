import { FactoryIcon, BanknoteIcon, HeartPulseIcon, ShoppingCartIcon } from "lucide-react";

export function UseCases() {
  const cases = [
    {
      icon: FactoryIcon,
      title: "Fabricación",
      description: "Los fabricantes utilizan FreeCloud para reducir el tiempo de inactividad, mejorar la calidad y ampliar los conocimientos.",
    },
    {
      icon: BanknoteIcon,
      title: "Banca y FSI",
      description: "Las principales instituciones financieras confían en FreeCloud para gestionar el riesgo y tomar decisiones más inteligentes.",
    },
    {
      icon: HeartPulseIcon,
      title: "Ciencias de la vida",
      description: "Los equipos farmacéuticos utilizan FreeCloud para acelerar la investigación y el desarrollo, garantizar el cumplimiento y escalar la innovación.",
    },
    {
      icon: ShoppingCartIcon,
      title: "Comercio minorista y CPG",
      description: "Los minoristas y líderes de CPG confían en FreeCloud para pronosticar la demanda y conocer a sus clientes.",
    },
  ];

  return (
    <section id="solutions" className="w-full py-8 md:py-16 lg:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Casos de uso industriales listos para usar que impulsan los resultados comerciales
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            FreeCloud impulsa la innovación en una amplia gama de sectores.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <item.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}