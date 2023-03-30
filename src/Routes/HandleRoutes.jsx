import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PATHS } from "../utils/constants";
import ProtectedRoutes from "./ProtectedRoute";

const MenuBar = lazy(() => import("../Screens/Menubar"));
const SignUpPage = lazy(() => import("../Screens/RegisterPage"));
const SignInPage = lazy(() => import("../Screens/SignInPage"));
const HomePage = lazy(() => import("../Screens/HomePage"));
const CategoriesPage = lazy(() => import("../Screens/categories/Categories"));
const CreateCategoryPage = lazy(() =>
  import("../Screens/categories/CreateCategory"),
);
const ProductsPage = lazy(() => import("../Screens/products/Products"));
const CreateProductPage = lazy(() =>
  import("../Screens/products/CreateProduct"),
);
const OrdersPage = lazy(() => import("../Screens/Orders"));
const ErrorPage = lazy(() => import("../Screens/NotFound"));

const HandleRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path={PATHS.signup} element={<SignUpPage />} />
    <Route path={PATHS.signin} element={<SignInPage />} />
    <Route path='/*' element={<ErrorPage />} />
    {/* Private Routes */}
    <Route element={<ProtectedRoutes />}>
      <Route element={<MenuBar />}>
        <Route path={PATHS.home} element={<HomePage />} />
        <Route path={PATHS.categories} element={<CategoriesPage />} />
        <Route path={PATHS.createCategory} element={<CreateCategoryPage />} />
        <Route path={PATHS.products} element={<ProductsPage />} />
        <Route path={PATHS.createProduct} element={<CreateProductPage />} />
        <Route path={PATHS.orders} element={<OrdersPage />} />
      </Route>
    </Route>
  </Routes>
);

export default HandleRoutes;
