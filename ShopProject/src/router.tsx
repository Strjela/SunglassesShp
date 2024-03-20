import { createBrowserRouter } from "react-router-dom";
import { AppWrapperComponent } from "./components/AppWraperComponent/AppWrapperComponent";
import Home from "./components/home/Home";
import DetailProduct from "./components/products/DetailProduct";
import ShoppingCartDetaile from "./components/shoppingCartDetailed/ShoppingCartDetaile";

export const router = createBrowserRouter([
  {
    element: <AppWrapperComponent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <DetailProduct />,
      },
      {
        path: "/cart",
        element: <ShoppingCartDetaile />,
      },
    ],
  },
]);
