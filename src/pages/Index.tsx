import { Navbar } from "@/components/brochure/navbar";
import { Hero } from "@/components/brochure/hero";
import { Stats } from "@/components/brochure/stats";
import { Services } from "@/components/brochure/services";
import { WhyUs } from "@/components/brochure/why-us";
import { HowItWorks } from "@/components/brochure/how-it-works";
import { Testimonials } from "@/components/brochure/testimonials";
import { Pricing } from "@/components/brochure/pricing";
import { FAQ } from "@/components/brochure/faq";
import { Contact } from "@/components/brochure/contact";
import { Footer } from "@/components/brochure/footer";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
