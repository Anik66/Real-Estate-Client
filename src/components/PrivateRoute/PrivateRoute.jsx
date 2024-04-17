import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
  const {user,loading} =useContext(AuthContext)
  
  const location = useLocation()

  if(loading){
    return <div className="flex justify-center items-center text-center mt-4 mb-[500px] ">
      <span className="loading loading-spinner text-info "></span>
      </div>
  }
  
  if(!user){
    return <Navigate to="/login" state={location.pathname } ></Navigate>
  }

  return (
    <div>
      {children}
    </div>
  )


  
};

export default PrivateRoute;