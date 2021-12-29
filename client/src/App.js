import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import "./styles.css";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import FoodList from "./components/Food/FoodList";
import FoodDescription from "./components/Food/Food Item/FoodDescription";
function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/food-list/:categoryId/:categoryName"
          element={<FoodList />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/food-description/:foodId" element={<FoodDescription />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
