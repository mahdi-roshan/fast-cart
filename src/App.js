import { Route , Routes } from "react-router-dom";

import ProductCard from "./pages/productCard";

function App() {
  return (
    <Routes>
      <Route  path="/fastcart/:productId" element={<ProductCard />} />
    </Routes>
  );
}

export default App;
