import Landing from "./views/Public/Landing";
import Landing2 from "./views/Public/Landing2";
import Products from "./views/Public/Products";
import SingleProduct from './views/Public/SingleProduct';
import Customers from './views/Public/Costumers';
import Products2 from './views/Public/Products2'
import Products3 from './views/Public/Products3'
import Products4 from './views/Public/Products4'
import Products5 from './views/Public/Products5'
import Products6 from './views/Public/Products6'

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
        path: "/products1",
        exact: true,
        component: Products
    },
    {
        path: "products2",
        exact: true,
        component: Products2
    },
    {
        path: "/2/products1",
        exact: true,
        component: Products3
    },
    {
        path: "/2/products2",
        exact: true,
        component: Products4
    },
    {
        path: "/2/products3",
        exact: true,
        component: Products5
    },
    {
        path: "/2/products4",
        exact: true,
        component: Products6
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