import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import {  toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [error,setError] =useState("")
  const [showPassword,SetShowPassword] =useState(false)


  const {createUser} =useContext(AuthContext)
  const location =useLocation();
  const navigate =useNavigate()

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const onSubmit =data =>{
    const {email,password} =data
    
    if(password.length <6){
      setError("password length must be 6 character")
      toast.error("password length must be 6 character")
      return
    }
    
   else if(!/.*[A-Z].*/.test(password)){
      setError('password must have one uppercase')
      toast.error("password must have atleast one uppercase")
      return
    }
   else if(!/.*[a-z].*/.test(password)){
      setError('password must have one lowercase')
      toast.error("password must have atleast one lowercase")
      

      return
    }
    
    setError('')

    createUser(email,password)
    .then(result =>{
      console.log(result)
      toast.success("Registation Successful",{
        position:"top-center"
        
      });
      navigate(location?.state ?location.state : "/")
    })
    
  }
  



  return (

    
  <div className="bg-blue-200">
    <h2 className="text-4xl font-bold text-center pt-2"><u>Register</u></h2>
   
      <div className="hero min-h-screen ">

     
      
  
<div className="card shrink-0 w-full lg:max-w-[500px]  shadow-2xl bg-base-100">
  
  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text text-2xl font-bold">Name</span>
      </label>
      {errors.fullName && <span className=" text-red-500 font-bold pb-1">This field is required</span>}
      <input type="text" {...register("fullName", { required: true })} placeholder="Name" className="input input-bordered" />
      
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text text-2xl font-bold">Email</span>
      </label>
      {errors.email && <span className=" text-red-500 font-bold pb-1">This field is required</span>}
      <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-2xl font-bold">Photo url</span>
      </label>
      {errors.photourl && <span className=" text-red-500 font-bold pb-1">This field is required</span>}
      <input type="text" {...register("photourl", { required: true })} placeholder="photourl" className="input input-bordered"  />
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
    {
          error && <small className="text-red-600">{error}</small>
          
       }
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
  </form>

  <p className="text-center mb-4">Already Have Account? <Link to="/login" className="text-blue-500">Login </Link></p>
</div>

</div>
 
  </div>
  
  );
};

export default Register;