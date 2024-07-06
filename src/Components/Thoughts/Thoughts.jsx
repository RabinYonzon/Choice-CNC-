import React from 'react'
import './Thoughts.css'
import product_1 from '../../assets/product_1.jpg'
import product_2 from '../../assets/product_2.jpg'
import product_3 from '../../assets/product_3.jpg'
import product_4 from '../../assets/product_4.jpg'
import product_5 from '../../assets/product_5.jpg'
import product_6 from '../../assets/product_6.jfif'
import product_7 from '../../assets/product_7.jfif'
import product_8 from '../../assets/product_8.jfif'
import story_img from '../../assets/story_img.jpg'
import { FaPlayCircle } from "react-icons/fa";



const Thoughts = ({setPlayState}) => {
  return (
    <div className='thoughts'>
        <div className='thoughts-text'>
        <h2><span>Shaping your thoughts</span></h2>
        <p>Through different arts with woodwork</p>
        </div>

         <div className='first-content'>
         <img src={story_img} className='thought-img'  />
         <FaPlayCircle className='play-icon' onClick={()=>{setPlayState(true)}} />
         </div>
          
          <div className='grid-container'>


            <div className='left-part'>
                <img src={product_1} width={288} height={296} alt="" />
                <img src={product_2} width={288} height={352} alt="" />
            </div>
            <div className='middle-part'>
            <img src={product_3} width={288} height={296} alt="" />
            <img src={product_4} width={288} height={296} alt="" />
            <img src={product_6} width={600} height={352} alt="" />
            </div>
            <div className='right-part'>
            <img src={product_5} width={288} height={208} alt="" />
            <img src={product_7} width={288} height={208} alt="" />
            <img src={product_8} width={288} height={208} alt="" />
            </div>
        
      
        </div>
    </div>
  )
}

export default Thoughts
