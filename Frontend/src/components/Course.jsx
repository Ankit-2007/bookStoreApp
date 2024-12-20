import React, { useEffect, useState } from 'react'
//import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from "axios"
function Course() {
  const [book,setBook]=useState([])
  useEffect(() =>{
    const getBook=async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error){
        console.log(error)
      }
    }
    getBook();
},[]);
  return (
   <>
    <div className='pt-28 max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 '>
       <div className=" items-center justify-center text-center ">
        <h1 className='text-2xl  md:text-4xl'>
          We're delighted to have you <span className='text-pink-500'> Here! :)</span>
        </h1>
        <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi libero blanditiis non, quia fugiat aliquid aliquam, explicabo deserunt voluptate doloremque architecto ducimus quae nobis magnam earum nisi quaerat incidunt?deserunt voluptate doloremque architecto ducimus quae nobis magnam earum nisi quaerat incidunt?
        </p>
        <Link to="/">
          <button className=' px-4 py-2 text-center mt-6 rounded-md  text-white bg-pink-500 hover:bg-pink-700 duration-300' >Back</button>
        </Link>
       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            book.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
        }
       </div>
    </div>
   </>
  )
}

export default Course