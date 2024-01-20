import { Navigate } from "react-router-dom";

export default function PrivateRoute({ user, children }) {
  if (!user?.id) {
    //Kullanıcı oturum açmamışsa
    return <Navigate to="/login" replace />;
  }
  return children;
}
