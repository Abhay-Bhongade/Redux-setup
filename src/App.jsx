import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../rtk/features/cartSlice'
import DisplayCard from './Component/DisplayCard'
import { BrowserRouter,Routes,Route,Navigate,Outlet } from 'react-router-dom'
import LoginForm from './Component/Login/LoginForm'
import RecruiterAllDisplay from './Component/Recruiter/RecruiterAllDisplay'
import InspectorAllDisplay from './Component/Inspector/InspectorAllDisplay'
import TopNavbar from './Component/TopNavbar/TopNavbar'
import SideNavbar from './SideNavbar/SideNavbar'
import Dashboard from './Component/Dashboard'

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
//Implement a simple shopping cart system with features to add items, remove items and calculate the total price. Use objects to represent items, including properties for the item name, price and quantity. Implement features to add items to the cart, remove items and calculate the total cost.

  //subscribing to the store

  const cartItem = useSelector((store)=>store.cart?.item);
  console.log("cartItem",cartItem);

  const handleAddItem = ()=>{
    dispatch(addItem("momos"));
  }


const PrivateRoute = ({isAuthenticated,...prop})=>{
let token = localStorage.getItem("token");
return token ? 
<>
<TopNavbar/>
<SideNavbar />
<Outlet />
</> : <Navigate to="/login" />
}

  return (
    <>
       <BrowserRouter>
       <Routes> 
       <Route path="/" element={<Navigate to="/login" />} />

        <Route path='/login' element={<LoginForm/>} />
        <Route path='/dashboard' element={<PrivateRoute   isAuthenticated={""} />} >
        <Route path='/dashboard' element={<div className='container-fluid'><div className="row">
          <div className="col-md-10 bg-light content"><Dashboard/></div></div></div>} />
        </Route>

        <Route path='/cart' element={<PrivateRoute   isAuthenticated={""} />} >
        <Route path='/cart' element={<div className='container-fluid'><div className="row">
          <div className="col-md-10 bg-light content"><DisplayCard/></div></div></div>} />
        </Route>

        <Route path='/all-recruiter' element={<RecruiterAllDisplay />} />
        <Route path='/all-inspector' element={<InspectorAllDisplay />} />
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App


//Routes: container for nested tree of route
//Route:Declares an element that should be rendered at a certain URL path.
//<li><NavLink to="/about" activeClassName="active">About</NavLink></li>

//both Link and NavLink components are used for navigation, NavLink provides additional features like "active link styling" based on the current route.