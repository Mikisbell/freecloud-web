
import Image from 'next/image';

const logos = [
  { src: '/images/carrusel/Anthropic.svg', alt: 'Anthropic' },
  { src: '/images/carrusel/AWS.svg', alt: 'AWS' },
  { src: '/images/carrusel/Databricks.svg', alt: 'Databricks' },
  { src: '/images/carrusel/Deloitte.svg', alt: 'Deloitte' },
  { src: '/images/carrusel/Michelin.svg', alt: 'Michelin' },
  { src: '/images/carrusel/Mistral-1.svg', alt: 'Mistral AI' },
  { src: '/images/carrusel/Novartis.svg', alt: 'Novartis' },
  { src: '/images/carrusel/NVIDIA.svg', alt: 'NVIDIA' },
  { src: '/images/carrusel/OpenAI.svg', alt: 'OpenAI' },
  { src: '/images/carrusel/Snowflake.svg', alt: 'Snowflake' },
];

const TrustedBy = () => {
  return (
    <section id="trusted-by" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Con la Confianza de Clientes, Socios y el Ecosistema de IA
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {logos.map((logo) => (
            <div key={logo.alt} className="h-12 flex justify-center">
              <Image 
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={48}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
