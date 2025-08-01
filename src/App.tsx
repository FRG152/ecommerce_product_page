import Navbar from "./components/Navbar";
import Swiper from "./components/Swiper";
import ProductInfo from "./components/ProductInfo";

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
