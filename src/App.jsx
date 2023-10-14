import Home from "./pages/Home";
import { useState, createContext, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Loader from "./UI/loader/Loader";
import CheckoutState from "./pages/CheckoutState";
import NotFound from "./pages/NotFound";
const Products = lazy(() => import("./pages/Products")) ;
const ProductItem = lazy(() => import("./pages/ProductItem")) ;
const About = lazy(() => import("./pages/About")) ;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
        <Route path="products/:id" element={<Suspense fallback={<Loader />}><Products /></Suspense>} />
        <Route path="product/:id" element={<Suspense fallback={<Loader />}><ProductItem /></Suspense>} />
        <Route path="about" element={<Suspense fallback={<Loader />}><About /></Suspense>} />
        <Route path="checkout/:id" element={<Suspense fallback={<Loader />}><CheckoutState /></Suspense>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export const CartContext = createContext({});

function App() {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  const handleAddToCart = (product, quantity) => {
    const newArray = {
      ...product,
      quantity,
    };
    
    setCart((prev) => {
      const item = prev.find((item) => item.id == newArray.id);
      if (!item) {
        return [...prev, newArray];
      }
      return prev;
    });
  };


  const handleQuantity = (productId, count) => {
    setCart((prevState) => {
      prevState.map(item => {
        if (item.id == productId) {
          item.quantity = count;
        }
        return item
      })
      return [...prevState];
    });
  };

  const removeFromCart = (id) =>{
    setCart((prev) => {
        return prev.filter((item) => item.id !== id);
    })

  }


  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        total,
        handleAddToCart,
        handleQuantity,
        removeFromCart,
      }}
    >
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
