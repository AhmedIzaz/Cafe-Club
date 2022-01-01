import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./styles.css";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import FoodList from "./components/Food/FoodList";
import FoodDescription from "./components/Food/Food Item/FoodDescription";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  const location = useLocation();
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

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
