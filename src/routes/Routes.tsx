import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../components/homePage/HomePage";
import Products from "../components/products/Products";
import Categories from "../components/categories/Categories";
import Cart from "../components/cart/Cart";
import Wishes from "../components/wishes/Wishes";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {path: "/home", element: <HomePage/>},
            {path: "/products", element: <Products/>},
            {path: "/categories", element: <Categories/>},
            {path: "/cart", element: <Cart/>},
            {path: "/wishes", element: <Wishes/>},

        ]
    }
])