import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CustomerLogos } from "@/components/sections/CustomerLogos";
import { CallToAction } from "@/components/sections/CallToAction";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { KeyFeatures } from "@/components/sections/KeyFeatures";
import { UseCases } from "@/components/sections/UseCases";
import { Testimonials } from "@/components/sections/Testimonials";
import { AIGovernanceOperations } from "@/components/sections/AIGovernanceOperations";
import { EconomicImpact } from "@/components/sections/EconomicImpact";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";
import { FinalCallToAction } from "@/components/sections/FinalCallToAction";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeInWhenVisible } from "@/components/shared/FadeInWhenVisible";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CustomerLogos />
      <CallToAction />
      <FadeInWhenVisible>
        <ProblemSolution />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <KeyFeatures />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <UseCases />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <EconomicImpact />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Testimonials />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <AIGovernanceOperations />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ResourcesPreview />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ContactForm />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FinalCallToAction />
      </FadeInWhenVisible>
    </>
  );
}