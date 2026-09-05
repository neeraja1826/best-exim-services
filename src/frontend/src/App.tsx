import { Layout } from "@/components/Layout";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { FAQ } from "@/sections/FAQ";
import { Hero } from "@/sections/Hero";
import { Industries } from "@/sections/Industries";
import { Process } from "@/sections/Process";
import { Services } from "@/sections/Services";
import { Stats } from "@/sections/Stats";
import { Testimonials } from "@/sections/Testimonials";
import { WhyChooseUs } from "@/sections/WhyChooseUs";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Process />
      <Industries />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
    </Layout>
  );
}
