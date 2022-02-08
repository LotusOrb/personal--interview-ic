import React, { useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useStoreSelector } from "../common/hook/useStoreSelector";
import AppPage from "../page/app";
import LoginRegisterPage from "../page/auth/LoginRegister";
import FilterTestPage from "../page/app/filterTest";
import BlogListPage from "../page/app/blog/List";
import BlogCreatePage from "../page/app/blog/Create";
import BlogUpdatePage from "../page/app/blog/Update";
import NotFoundPage from "../page/NotFound";

const AuthGate = () => {
  const auth = useStoreSelector((state) => state.auth);
  return !auth.isAuthenticated ? <Navigate to={"/auth/login"} /> : <Outlet />;
};

const AuthenticatedGate = () => {
  const auth = useStoreSelector((state) => state.auth);
  return auth.isAuthenticated ? <Navigate to={"/app"} /> : <Outlet />;
};

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/app"} />} />
      <Route path="auth" element={<AuthenticatedGate />}>
        <Route index element={<Navigate to="/auth/login" />} />
        <Route path="login" element={<LoginRegisterPage />} />
        <Route path="register" element={<LoginRegisterPage />} />
      </Route>
      <Route path="app" element={<AuthGate />}>
        <Route index element={<AppPage />} />
        <Route path="blog" element={<Outlet />}>
          <Route index element={<Navigate to={"/app/blog/list"} />} />
          <Route path="list" element={<BlogListPage />} />
          <Route path="create" element={<BlogCreatePage />} />
          <Route path="update/:id" element={<BlogUpdatePage />} />
        </Route>
        <Route path="filter-test" element={<FilterTestPage />} />
      </Route>
      <Route path="*" element={<Navigate to={"/404"} />} />
      <Route path="404" element={<NotFoundPage />} />
    </Routes>
  );
};
