import React from 'react'
import laptop from '../assets/laptop.jpg'
import shoes from '../assets/shoes.jpg'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'



const Home = () => {

  
  

const Productlist=[
  {
    name:'Nike Shoes',
    price:'12000',
    imgSrc:shoes,
    id:'01'

  },
  {
    name:'Laptop',
    price:'490',
    imgSrc:laptop,
    id:'02'

  }
]
const dispatch=useDispatch()

const Addtocard=(option)=>{
  console.log(option)
toast.success('Added to cart')
dispatch({type:'addToCart',payload:option})
}

  return (
    <div className='home'>
{
  Productlist.map((Element)=><ProductCard key={Element.id} id={Element.id}  imgSrc={Element.imgSrc} price={Element.price} name={Element.name}  handler={Addtocard}/> )
}

    
    </div>
  )
}

const ProductCard=({name,id,price,handler,imgSrc})=>(
  <div className='productCard'>
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>click</button>
  </div>
)


export default Home
