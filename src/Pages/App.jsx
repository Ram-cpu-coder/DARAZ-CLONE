import { useState } from "react"
import "../App.css"

import { TiMessages } from "react-icons/ti"

import TopBar from "../Components/NavBar/TopBar"
import NavBar from "../Components/NavBar/NavBar"
import Cart from "./Cart"
import Footer from "../Footer"

import Login from "./Login"
import Signup from "./Signup"
import BecomeASeller from "./BecomeASeller"
import Body from "./Body"
import IndividualFlashCard from "../Components/Offer/FlashSale/IndividualFlashCard"
import IndividualJustForYouCard from "../Components/Offer/JustForYou/IndividualJustForYouCard"

import flashSaleItems from "../Data/FlashSaleItem"
import { Routes, Route } from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='w-[100%]'>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/becomeaseller' element={<BecomeASeller />} />
        <Route path='/' element={<Body flashSaleItems={flashSaleItems} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/individualFlashCard' element={<IndividualFlashCard />} />
        <Route path='/individualJustForYouCard' element={<IndividualJustForYouCard />} />
      </Routes>

      <div className='fixed bottom-1 right-[30px] shadow'>
        <button className='flex items-center gap-2 border px-3 bg-[white]'>
          <TiMessages /> Messages
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default App
