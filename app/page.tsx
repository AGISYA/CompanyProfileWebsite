import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Innovations from "@/components/inofation";
import Navbar from "@/components/navbar";
import Solutions from "@/components/solutions";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Innovations />
      <Footer />
    </div>
  );
}
