
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import { Header } from './components/header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import Footer from './components/footer';
import Listing from './components/pages/listing';
import Cart from './components/pages/cart';
import SignIn from './components/pages/signin';
import Signup from './components/pages/signup';

const MyContext=createContext();

function App() {

  const[countryList,setcountryList]=useState([]);
  const[selCountry,setselCountry]=useState(``);
  const[isheaderfooter,setisheaderfooter]=useState(true);

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  },[]);

  const getCountry=async(url)=>{
    const response=await axios.get(url).then((res)=>{
      setcountryList(res.data.data);
    })
  }

  const values={
    countryList,
    selCountry,
    setselCountry,
    isheaderfooter,
    setisheaderfooter
  };

  return (
    <>
    <BrowserRouter>
    <MyContext.Provider value={values}>

      {isheaderfooter===true&&<Header/>}
    
    <Routes>
    <Route path="/" element={<Home/>} />
     <Route path="/listing" element={<Listing/>} />
     <Route path="/cart" element={<Cart/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
     {isheaderfooter===true&& <Footer/>}
     
      </MyContext.Provider>
      </BrowserRouter>
    
    </>
  );
}

export default App;
export {MyContext};
