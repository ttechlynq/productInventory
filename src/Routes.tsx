import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContactPage } from "./ContactPage";
import { Thanks } from "./Thanks";
import { ProductsPage } from "./pages/ProductsPage";
import App from "./App";
import { ProductPage } from "./pages/productPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { lazy, Suspense } from "react";

const AdminPage = lazy(() => import("./pages/AdminPage"));
// import { Header } from "./Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/thanks/:name",
        element: <Thanks />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
      {
        path: "/admin",
        element: (
          <Suspense
            fallback={
              <div className="text-center p-5 text-x1 text-slate-00">
                Loading...
              </div>
            }
          >
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
