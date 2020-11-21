import Landing from "./views/Public/Landing";
import Landing2 from "./views/Public/Landing2";
import Products from "./views/Public/Products";
import SingleProduct from './views/Public/SingleProduct';
import Customers from './views/Public/Costumers';
import Product2 from './views/Public/Products2'

import Cart from './views/Private/Cart';
import Profile from './views/Private/Profile';

//import login
//import register

export const publicRoutes = [
    {
        path: "/",
        exact: true,
        component: Landing
    },
    {
        path: "/2",
        exact: true,
        component: Landing2
    },
    {
        path: "/products",
        exact: true,
        component: Products
    },
    {
        path: "/products2",
        exact: true,
        component: Product2
    },
    {
        path: "/product/:productSlug",
        exact: true,
        component: SingleProduct
    },
    {
        path: "/customers",
        exact: true,
        component: Customers
    }
]

export const privateRoutes = [
    {
        path: "/cart",
        exact: true,
        component: Cart
    },
    {
        path: "/profile",
        exact: true,
        component: Profile
    }
]