import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../components/homePage/HomePage";
import Catalog from "../components/products/Catalog";
import Categories from "../components/categories/Categories";
import Cart from "../components/cart/Cart";
import Wishes from "../components/wishes/Wishes";
import ProductByID from "../components/productByID/ProductByID";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            { index: true, element: <HomePage/> },
            { path: "home", element: <HomePage/> },
            { path: "catalog", element: <Catalog/> },
            { path: "categories", element: <Categories/> },
            { path: "cart", element: <Cart/> },
            { path: "wishes", element: <Wishes/> },
            {path: "product/:id", element: <ProductByID/>}
        ]
    }
]);
