import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Thoughts from './Components/Thoughts/Thoughts'
import Story from './Components/Story/Story'
import Contact from './Components/Contact/Contact'
import Title from './Components/Title/Title'
import Footer from './Components/Footer/Footer'
import { FaInstagramSquare } from 'react-icons/fa'
import About from './Components/About/About'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import ProductCard from './Components/Products/ProductCard'


const App = () => {

  const [playState, setPlayState] = useState(false);

  const [showProductCard, setShowProductCard] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Thoughts setPlayState={setPlayState}/>
      <Story/>
      <Title subTitle='ABOUT US' title='Know More About Us'/>
      <About/>
      <Title subTitle='Our Products' title='Products we make'/>
      <ProductCard/>
      <Title subTitle='CONTACT US' title='Get In Touch'/>
      <Contact/>
      <Footer/>

      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      </div>
  )
}

export default App

