import About from "@/components/about";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Product from "@/components/product";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="product">
        <Product />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
