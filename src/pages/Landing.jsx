import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Landing() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="products">
        <ProductCard
          title="Black Hoodie"
          price="120"
        />

        <ProductCard
          title="White Tee"
          price="60"
        />

        <ProductCard
          title="Cargo Pants"
          price="90"
        />
      </div>

      <Footer />
    </>
  );
}

export default Landing;