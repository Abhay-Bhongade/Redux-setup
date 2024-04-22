import React,{useEffect} from 'react'
import { fetchData } from '../../rtk/features/fetchDataSlice';
import {useDispatch,useSelector} from "react-redux"
import {removeFromCart} from "../../rtk/features/cartDataSlice"
const DisplayCard = () => {
     const dispatch = useDispatch();
    useEffect(() => {
     dispatch(fetchData());
    }, [dispatch])

    // const {data,loading,error} = useSelector((store)=>store.fetchData)
    // console.log("data",data);

    // if(loading){
    //     return <div>Loading...</div>
    // }

    const cartData = useSelector((store)=>store.cardData?.items)
console.log("cartData",cartData);

const total = cartData?.reduce((total,item)=>total + item.price * item.quantity,0)


const handleRemove = (item)=>{
dispatch(removeFromCart(item))
}
    
  return (
    <div className='container'>
      <div className="row">
{
  cartData?.length === 0 ? (<div>Cart is Empty</div>) :
    cartData?.map((item)=>{
      return(
        <div className="col-md-4" key={item?.id}>
        <div className='card'>
       <p><span>Name:</span><span>{item?.name}</span></p>
       <p><span>Price:</span><span>{item?.price}</span></p>
       <p><span>Quantity:</span><span>{item?.quantity}</span></p>
       <button onClick={()=>handleRemove(item)}>RemoveItem</button>
        </div>
        </div>
      )
    })
  }

{
  cartData?.length > 0 && <div>Total:{total}</div>
}
      
    
    </div>
    </div>
  )
}

export default DisplayCard