import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import New_collections from '../components/newCollections/NewCollections'
import NewsLetter from '../components/newsLetter/NewsLetter'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <New_collections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
