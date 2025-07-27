import Navbar from "./components/Navbar";
import ProductInfo from "./components/ProductInfo";
import Swiper from "./components/Swiper";

function App() {
  return (
    <main>
      <Navbar />
      <div className="h-[calc(100vh-60px)] flex flex-col md:flex-row md:items-center md:justify-center">
        <Swiper />
        <ProductInfo />
      </div>
    </main>
  );
}

export default App;
