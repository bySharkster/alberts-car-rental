import Hero from "../components/Hero/Hero";
import Mission from "../components/Mission/Mission";
import Vision from "../components/Vision/Vision";
import Faq from "../components/Faq/Faq";
import Features from "../components/Features/Features";

export default function Home() {
  return (
    <div className="dark">
      <Hero />
      <Features />
      <Mission />
      <Vision />
      <Faq />
    </div>
  );
}
