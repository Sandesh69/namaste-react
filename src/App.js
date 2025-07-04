import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Contact from "./Components/Contact";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./Components/about";
import Error from "./Components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
      <Header />
      <Outlet/>
    </div>
    </Provider>
    
  );
};
const Grocery=lazy(()=>{return import ("./components/Grocery")})

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[ 
      {path:"/",
        element:<Body/>
      },
      {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    },
    {
      path:"/grocery",
      element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
    },
    {
      path:"/cart",
      element:<Cart/>
    }
  ],
    errorElement:<Error/>
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
