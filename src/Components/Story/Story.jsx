import React from 'react'
import './Story.css'
import story_img from '../../assets/story_img.jpg'
import logo_craft from '../../assets/logo_craft.jpg'

const Story = () => {
  return (
    <div className='story'>
        <h2><span>Our Story</span></h2>
    <div className='story-content'>
    <div className='story-left'>
            <img src={story_img } width={496} height={472} alt="" />
      </div>
      <div className='story-right'>
        <p>I have been engaged in this business with 10 years of experience in South Korea.I have completed my 10 year of working tenure with hard work and honesty. </p>
        <p>During my working period i was not only working, i was learning CNC work simultaneously because i wanted to use my skill and the experieince in Nepal. So after i returned back to Nepal,i have decided to start this business.</p>
        <p>The name "Choice CNC & 3D Craft" is named with the aim of making customized wood products with the own choice of customer along with 3D craft. Located in the Imadol,Lalitpur of Kathmandu valley providing best CNC work sercive in the town.</p>
        <img src={logo_craft} width={221} height={221} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Story
