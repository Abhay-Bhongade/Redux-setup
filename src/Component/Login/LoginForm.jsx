import React, { useState ,useEffect} from 'react'
import "./LoginFormStyle.css"
import {toast} from "react-toastify"
import {useDispatch} from "react-redux";
import {LoginData} from "../../../rtk/features/Login/LoginSlice";
import {Link, useNavigate} from "react-router-dom"
import logo from "../../assets/images/thumbnails/Logo.svg"



const LoginForm = () => {
const [formData,setFormData] = useState({
    email:"",
    password:"",
    fcm_token:""
})
const [isLoading,setIsLoading] = useState(false);
const customId = "custom-id-yes";
const dispatch = useDispatch();
const navigate = useNavigate()
const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData({
        ...formData,
        [name] : value
    })
}

const handleSubmit = async(e)=>{
e.preventDefault();
if(!formData.email || !formData.password){
    toast.error("Email and Password are required",{toastId:customId});
    return;
} 

try{
    setIsLoading(true);
    const actionResult = await dispatch(LoginData(formData));
    console.log("actionResult",actionResult);
    if(actionResult?.payload?.status){
        localStorage.setItem("token",actionResult?.payload?.token);
        localStorage.setItem("role",actionResult?.payload?.Role);
        toast.success(actionResult?.payload?.message,{toastId:customId});
        navigate("/dashboard");
    }
}catch(error){
    console.log("Error while login",error);
}finally{
    setIsLoading(false);
}
}
console.log("formData",formData);


useEffect(() => {
 let token = localStorage.getItem("token");
 if(token){
navigate("/dashboard")
 }
}, [navigate])



  return (
    <div className='container-fluid main-container'>
        <div className="row">
            <div className="col-md-12 form-container">
                <form onSubmit={handleSubmit} className='form'>
                    <div className='pb-3'>
                        <div className='img-container pb-3'><img src={logo} alt="loading" /></div>
                        <div className='text-center'><span className='text-muted px-1'>Don't have an account yet?</span><Link className='link'>Sign up</Link></div>
                    </div>
                  <div className='my-1'>
                    <label htmlFor="emailId" className='mb-2 label'><span className='text-danger pe-1'>*</span>Email</label> <br />
                  <input id='emailId' type='text' name='email' placeholder='Enter email' value={formData.email}
                   onChange={handleChange} />
                  </div>
                   <div className='my-1'>
                   <label htmlFor="passwordId" className='mb-2 label'><span className='text-danger pe-1'>*</span>Password</label> <br />
                  <input type='password' id='passwordId' name='password' placeholder='Enter password' value={formData.password} 
                  onChange={handleChange} /> 
                  </div>
                   <div className='my-2'>
                    <button type='submit' className='SignBtn'>{isLoading ? "Loading..." : "Sign In"}</button>
                  </div>
                </form>
           
            </div>
        </div>
    </div>
  )
}

export default LoginForm