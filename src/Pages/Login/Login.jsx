import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle,FaGithub, FaEye, FaEyeSlash, FaRegEyeSlash  } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [showPassword,SetShowPassword] =useState(false)
  const {logIn,googleLogin,gitubLogin} =useContext(AuthContext)
  const location =useLocation();
  const navigate =useNavigate()


  console.log(googleLogin)
  
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();


  const onSubmit =data =>{
    const {email,password} =data
    logIn(email,password)
    .then(result =>{
      console.log(result)
      toast.success("Login successfull",{
        position:"top-center"
      })
      navigate(location?.state ?location.state : "/")
    })
    .catch(error =>{
      toast.error(error,{
        position:"top-center"
      })
    })
    
    
  }
  
  const handlesignIn=() =>{
    googleLogin()
    .then(result =>{
      console.log(result.user)
     navigate(location?.state ?location.state : "/")


    })
    .catch(error =>{
      console.error(error)
    })
  }
  const handlegithub=() =>{
    gitubLogin()
    navigate(location?.state ?location.state : "/")
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error)
    })
  }






  return (
  <div className= "  bg-blue-200 ">
     <h2 className=" text-4xl font-bold text-center pt-5"><u>Login</u></h2>
      <div className="hero min-h-screen" >
   
    
   <div className="card shrink-0 w-full  lg:max-w-[500px] shadow-2xl bg-base-100">
     <form onSubmit={handleSubmit(onSubmit)} className="animate__animated animate__flipInX card-body">
       <div className="form-control">
         <label className="label">
           <span className="label-text text-2xl font-bold">Email</span>
         </label>
         {errors.email && <span className=" text-red-500 font-bold pb-1">This field is required</span>}
         <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered"  />
       </div>
       <div className="relative">
   <div className="form-control ">
      <label className="label">
        <span className="label-text text-2xl font-bold">Password</span>
      </label>
      {errors.password && <span className="font-bold pb-1 text-red-500">This field is required</span>}
      <input type={showPassword?"text":"password"}   {...register("password", { required: true })} placeholder="password" className="input input-bordered" 
       />

         <span className="absolute  mt-[60px] top-1 right-1" onClick={()=>SetShowPassword(!showPassword)}> {
                    showPassword? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>
                  }</span>
       
     
    </div>
   </div>
       <div className="form-control mt-6">
         <button className="btn btn-primary">Login</button>
       </div>
     </form>
     <p className="text-center mt-4">Do not  have an Account? <Link to="/register" className="text-blue-500">Register</Link></p>
    

   <p className="text-center space-x-2 mb-4 mt-3">
   <button onClick={handlesignIn} className="btn hover:bg-[#dc3545] "> <FaGoogle></FaGoogle> Login With Google </button>
   <button onClick={handlegithub}  className="btn hover:bg-[#28a745] "> <FaGithub/> Login With Github </button>
   </p>
    
   </div>
  

</div>
<ToastContainer></ToastContainer>
  </div>
  );
};

export default Login;