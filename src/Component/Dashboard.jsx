import React from 'react'
import data from "../Constant/MockData.json"
import {addToCart} from "../../rtk/features/cartDataSlice"
import {useDispatch,useSelector} from "react-redux"

const Dashboard = () => {

    

    const handleAdd = (item)=>{
        dispatch(addToCart(item));
    }


  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-12">
{
    data?.map((item)=>{
        return(
<div className="col-md-4" key={item.id}>
            <div className="card">
                <h3>{item.name}</h3>
                <p>Price:<span>{item.price}</span></p>
                <p>Quantity:<span>{item.quantity}</span></p>
                <button onClick={()=>handleAdd(item)}>Add to Cart</button>
            </div>
    </div>
        )
    })
}
    
</div>
    </div>
    </div>
  )
}

export default Dashboard