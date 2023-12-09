import React from 'react'
import { Link } from 'react-router-dom'
import {PiShoppingCartBold} from 'react-icons/Pi'
import { useSelector } from 'react-redux'


const Header = () => {
  const {cartItems}=useSelector(state=>state.cart)
  return (
    <>
      <nav>
        <h2>logo Here</h2>

        <div>
<Link to={'/'}>Home</Link>
<Link to={'/cart'}>
<PiShoppingCartBold className='hello'/>

<p>{cartItems.length}</p>

</Link>
        </div>
      </nav>

    </>
  )
}

export default Header
