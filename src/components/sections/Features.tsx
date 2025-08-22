
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featuresData = [
  {
    value: "genai",
    title: "GenAI & Agentes",
    content: "Construye y escala agentes de IA y casos de uso de IA Generativa a nivel empresarial con un gateway de LLM seguro, y herramientas de desarrollo, evaluación y gobernanza.",
    cta: { label: "Explorar GenAI", href: "#" },
  },
  {
    value: "ml",
    title: "Aprendizaje Automático",
    content: "Construye y evalúa modelos de ML rápidamente con opciones que van desde AutoML hasta código completo, asegurando altos estándares de explicabilidad.",
    cta: { label: "Explorar ML", href: "#" },
  },
  {
    value: "analytics",
    title: "Análisis y Perspectivas",
    content: "Mejora el BI y la analítica de autoservicio, permitiendo decisiones mejores y más rápidas a través de visualización, dashboards y storytelling impulsado por GenAI.",
    cta: { label: "Explorar Análisis", href: "#" },
  },
  {
    value: "data-prep",
    title: "Preparación de Datos para IA",
    content: "Acelera 10x la conexión, limpieza y preparación de datos, con una transición fluida al análisis, modelado y despliegue en un único entorno.",
    cta: { label: "Explorar Preparación", href: "#" },
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Construye Analíticas, Modelos y Agentes en un Solo Lugar</h2>
        </div>

        <Tabs defaultValue="genai" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {featuresData.map((feature) => (
              <TabsTrigger key={feature.value} value={feature.value} className="transition-colors">
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {featuresData.map((feature) => (
            <TabsContent key={feature.value} value={feature.value}>
              <div className="p-8 bg-background rounded-lg shadow-sm text-center">
                <p className="text-lg text-muted-foreground mb-6 mx-auto max-w-2xl">
                  {feature.content}
                </p>
                <Button variant="outline" asChild>
                  <Link href={feature.cta.href}>{feature.cta.label}</Link>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Features;
