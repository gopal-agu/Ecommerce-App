import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";
import Products from "./Products";

function Home() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-5 py-8">
        <h1 className="text-4xl font-bold text-center mb-8  text-black">
          Welcome to shopping world.
        </h1>

        <Products />
      </div>

      <Footer />
    </>
  );
}

export default Home;