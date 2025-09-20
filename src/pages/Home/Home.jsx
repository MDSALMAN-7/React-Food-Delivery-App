import React, { useEffect } from 'react';
import { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay';
import { AppDownload } from '../../components/AppDownload/AppDownload';
import { Footer } from '../../components/Footer/Footer';

const Home = () => {

  const [category,setCategory] = useState("All");

  // useEffect(()=>{
  // },[])

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload />
      {/* <Footer /> */}
    </div>
  )
}
 
export default Home
