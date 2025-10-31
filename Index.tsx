import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Gallery from "@/components/Gallery";
import OrderForm from "@/components/OrderForm";
import Promotions from "@/components/Promotions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <Advantages />
        <Gallery />
        <OrderForm />
        <Promotions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
