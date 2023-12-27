import React from 'react'
import { Link , Outlet} from 'react-router-dom'
import pic from "./pictures/45671.jpg"
import { FaceBook, Instgram, LinkIn, Twitter, YouTube } from './pictures/Component'
const Main = () => {
  return (
    <div>
   <Outlet/>
   <div className=" w-full   shadow-lg h-32 ">
   <div className=" border h-7 w-full  ">
        <div className=' flex justify-end space-x-3 mx-28  pt-1 '>
      <div className=''>  <FaceBook/></div>
      <div className=""><Instgram/></div>
      <div className=""><LinkIn/></div>
      <div className=""><Twitter/></div>
      <div className=""><YouTube/></div>
      </div>
       </div>
             <nav className='  h-12 flex justify-between'>        
       <img src="https://binousgym.com/wp-content/uploads/2022/08/Binous-lgo.png" className=' h-24 mx-48' />
        <ul className=' flex space-x-10 justify-end mx-72 pt-10 text-xl  font-serif'>
 
          <li className=' text-red-500'>
            <Link to="/">HOME</Link>
          </li>
          <li className=' hover:text-red-500'>
            <Link to="About">ABOUT</Link>
          </li>
          <li className='  hover:text-red-500'>
            <Link to="Trainers">TRAINERS</Link>
          </li>
          <li className='  hover:text-red-500'>
            <Link to="contactUs">CONTACT US</Link>
          </li>
        </ul>
       
      </nav>
   </div>
      
          
    </div>
  )
}

export default Main