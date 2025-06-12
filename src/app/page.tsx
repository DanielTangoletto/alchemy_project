import Header from "../components/Header/page";
import Hero from "../components/Hero/page";
import LibraryPrompts from "../components/LibraryPrompts/page";
import ExtensionAI from "../components/ExtensionAI/page";
import AlchemyDashboard from "../components/AlchemyDashboard/page";
import PowerAI from "../components/PowerAI/page";
import Pricing from "../components/Pricing/page";
import InteractionAI from "@/components/InteractionAI/page";
import FAQ from "@/components/FAQ/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LibraryPrompts />
      <ExtensionAI />
      <AlchemyDashboard />
      <PowerAI />
      <Pricing />
      <InteractionAI />
      <FAQ />
      <Footer />
    </div>
  );
}
