import React from 'react'
import logo from "../../assets/images/thumbnails/Logo.svg";
import notifiaction from "../../assets/images/icons/notification.png"
import iconglobe from "../../assets/images/icons/icon-globe.png"
import setting from "../../assets/images/icons/setting.png"
import profile from "../../assets/images/thumbnails/profile-img.png"
import "./TopNavbarStyle.css";
import {useDispatch,useSelector} from "react-redux"
import { Link } from 'react-router-dom';


const TopNavbar = () => {
    const dispatch = useDispatch();


const cartData = useSelector((store)=>store.cardData?.items)
console.log("cartData",cartData);

  return (
    <div className='container-fluid top-navbar'>
<div className="row">
    <div className="col-md-6">
        <div><img src={logo} alt="loading" /></div>
    </div>
    <div className="col-md-2"></div>
    <div className="col-md-4">
        <div className="row">
        <div className="col-md-2"><span><img src={notifiaction} alt="loading" /></span></div>
        {/* <div className="col-md-2"><span className='mx-3'><img src={iconglobe} alt="loading" /></span></div> */}
        <div className="col-md-2"><Link to="/cart">cart{cartData?.length}</Link></div>
        <div className="col-md-2"><span><img src={setting} alt="loading" /></span></div>
        <div className='col-md-6'> <div className='top-img-container'>
            <span><img src={profile} alt="loading" /></span>
            <div>
                <p className='mb-0'>Charlie Howard</p>
                <p className='mb-0'>Frontend Developer</p>
            </div>
        </div></div></div>
        
        
       
    </div>
</div>

    </div>
  )
}

export default TopNavbar