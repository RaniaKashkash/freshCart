import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Categories from "./pages/Categories/Categories";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Brands from "./pages/Brands/Brands";
import Checkout from "./pages/Checkout/Checkout";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import Wishlist from "./pages/Wishlist/Wishlist";
import NotFound from "./pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import ProductsProvider from "./context/products.context";
import CategoriesProvider from "./context/categories.context";
import AuthProvider from "./context/Auth.context";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CartProvider from "./context/cart.context";
import CategoryProducts from "./components/CategoryProducts/CategoryProducts";
import WishlistProvider from "./context/whishlist.context";
import OfflineScreen from "./components/OfflineScreen/OfflineScreen";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import BrandProducts from "./components/BrandProducts/BrandProducts";
import OrdersProvider from "./context/orders.context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Navigate to="/" replace />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "brands",
          element: <Brands />,
        },
        {
          path: "brands/:id",
          element: <BrandProducts />,
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },

        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "categories/:id",
          element: <CategoryProducts />,
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },

        {
          path: "forget-password",
          element: <ForgetPassword />,
        },
        {
          path: "allorders",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
        // {
        //   path: "allorders",
        //   element: <Navigate to="/orders" replace />,
        // },
        {
          path: "product/:id",
          element: <ProductDetails />,
        },

        {
          path: "verify-email",
          element: <VerifyEmail />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <OfflineScreen>
        <AuthProvider>
          <CartProvider>
            <CategoriesProvider>
              <WishlistProvider>
                <OrdersProvider>
                  <ProductsProvider>
                    <RouterProvider router={router} />
                    <ToastContainer
                      position="top-right"
                      autoClose={2000}
                      closeButton={false}
                      closeOnClick={true}
                    />
                  </ProductsProvider>
                </OrdersProvider>
              </WishlistProvider>
            </CategoriesProvider>
          </CartProvider>
        </AuthProvider>
      </OfflineScreen>
    </>
  );
}

export default App;
