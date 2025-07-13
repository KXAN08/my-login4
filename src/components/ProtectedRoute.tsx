import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const token = useAuthStore((state) => state.token);
  if (!token) return <Navigate to="/login" />;
  return <>{children}</>;
};

export default ProtectedRoute;
