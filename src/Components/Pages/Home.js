



import React, { useState } from 'react'

// Import Components
import Header from '../Header/Header'
import Food from '../Food/Food'
import Garson from '../Food/Garson'


import { CartProvider } from 'react-use-cart'

function Home() {

   
  
  return (
    <>
    <CartProvider>
    <Header/>
    <Food />
    <Garson/>
    </CartProvider>
    </>
  )
}

export default Home