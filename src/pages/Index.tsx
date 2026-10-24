import { Hero } from "@/components/brochure/hero";
import { Stats } from "@/components/brochure/stats";
import { Services } from "@/components/brochure/services";
import { WhyUs } from "@/components/brochure/why-us";
import { HowItWorks } from "@/components/brochure/how-it-works";
import { Testimonials } from "@/components/brochure/testimonials";
import { Pricing } from "@/components/brochure/pricing";
import { FAQ } from "@/components/brochure/faq";
import { Contact } from "@/components/brochure/contact";
import { SiteLayout } from "@/components/brochure/site-layout";

const Index = () => {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </SiteLayout>
  );
};

export default Index;
