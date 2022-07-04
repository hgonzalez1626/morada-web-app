import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = () => {

    const { auth, loading } = useAuth();
    
    if(loading) return 'Cargando'
    console.log(auth.data._id)
   
  return (
    <>
      { auth.data._id ? <Outlet />  : <Navigate to="/login" />}       
    </>
  )
}

export default ProtectedRoute
