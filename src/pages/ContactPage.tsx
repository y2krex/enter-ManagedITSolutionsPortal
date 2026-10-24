import { Contact } from "@/components/brochure/contact";
import { SectionHeading } from "@/components/brochure/section-heading";
import { SiteLayout } from "@/components/brochure/site-layout";

const ContactPage = () => {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-32 pb-4 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-brand-glow/15 blur-[140px]" />

        <div className="container relative z-10">
          <SectionHeading
            eyebrow="Contact"
            title="Contact Cloud.Lab"
            description="Talk to a senior engineer about your IT, security, or cloud challenges — no sales script, no obligation."
          />
        </div>
      </section>

      <Contact showHeading={false} />
    </SiteLayout>
  );
};

export default ContactPage;
