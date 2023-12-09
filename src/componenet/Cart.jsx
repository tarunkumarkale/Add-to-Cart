import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from '@reduxjs/toolkit';



const Cart = () => {
  const {  subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
const dispatch=useDispatch()

const increment=(id)=>{
  dispatch({
    type:'addToCart',
    payload:{id}
  })}

const decrement=(id)=>{
  dispatch({
    type:'decrement',
    payload:id
  })}

  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };





       ////////////////    yeah se aya cart 👍
         //     //    reducer: {
  //   cart: cartReducer,
  // },
       const {cartItems}=useSelector((state)=>state.cart)
console.log(cartItems)




  return (
    <div className="cart">
      <main>
      
      {cartItems && cartItems.length > 0 ? (
  cartItems.map(element => (
    <CartItem
      ImgSrc={element.imgSrc}
      name={element.name}
      price={element.price}
      qty={element.quantity} // Use the quantity from the cart item
      id={element.id} // Use the id from the cart item
      key={element.id}
      decrement={decrement}
      increment={increment}
      deleteHandler={deleteHandler}
    />
    
  ))
) : (
  <h1> 🙅‍♂️ No items</h1>
)}

  



      </main>
      <aside>
      <h2>Subtotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  ImgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={ImgSrc} alt="Item" />

    <article style={{margin:'20px'}}>
    <h3 style={{ color: 'black' }}>{name}</h3>
<p style={{ color: 'black',paddingLeft:'.6vw' }}>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p style={{ color: 'black' }}>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete  className="Dust" onClick={() => deleteHandler(id)} style={{ color: "black" }} />
  </div>
);

export default Cart;
