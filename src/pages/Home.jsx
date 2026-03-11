import { useContext } from "react";
import HeroSection from "../components/HeroSection";
import { ProductSection } from "../components/ProductSection";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { name, values, setValues } = useContext(AppContext);

  console.log("Data from store:", values);

  return (
    <div>
      <h1>{values}</h1>
      <button onClick={() => setValues(100)}>Change</button>
      <HeroSection />
      <ProductSection />
    </div>
  );
};

export default Home;
