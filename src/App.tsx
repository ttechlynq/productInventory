// import { Outlet } from "react-router-dom";
import { Header } from "./Header";
// import { useReducer } from "react";
// import { Header } from "./Header";
import { Main } from "./Main";
import { AppProvider } from "./appContext";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/productPage";

export default function App() {
  return (
    <div className="max-w-7x1 mx-auto px-4">
      <AppProvider>
        <Header />
        <Main />
        <ProductsPage />
        <ProductPage />
      </AppProvider>
    </div>
  );
}
