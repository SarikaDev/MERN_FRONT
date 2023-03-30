import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const auth = JSON.parse(sessionStorage.getItem("accessToken"));
  console.log("auth", auth);

  // const accessToken = auth?.identityNumber;

  if (!!auth) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth ? <Navigate to='/' /> : <Outlet />;
};

export default ProtectedRoutes;
