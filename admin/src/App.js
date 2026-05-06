import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Header from './components/header';
import Sidebar from './pages/sidebar';
import { createContext, useEffect, useState } from 'react';
import Signin from './pages/signin';
import Signup from './pages/Signup';
import Product from "./pages/product"
import Proupload from './pages/proupload';
import Category from './pages/category';
import Categorylist from './pages/categorylist';
import LoadingBar from "react-top-loading-bar";
import Editpro from './pages/editproduct';


const Mycontext = createContext();
function App() {
  const [toggleOpen, settoggleOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHeadfoot, setisHeadfoot] = useState(true);
  const [isLogin, setisLogin] = useState(false);
  const [lightMode, setlightMode] = useState(JSON.parse(localStorage.getItem('lightmode')) ?? false);
  const [baseUrl,setbaseUrl]=useState("http://localhost:2000");
  const [user , setuser]=useState({
    username:"",
    email:"",
    id:""
  })


  useEffect(() => {
    if (lightMode === true) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('lightmode', lightMode)
    }
    else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('lightmode', lightMode)
    }
  }, [lightMode])

  useEffect(()=>{
    const token= localStorage.getItem("token");
    if(token!=null && token!=""){
      setisLogin(true);
      const userData =JSON.parse(localStorage.getItem("user"));
      setuser(userData);
    }else{
      setisLogin(false);
    }
  },[isLogin])

  const values = {
    toggleOpen,
    settoggleOpen,
    isHeadfoot,
    setisHeadfoot,
    isLogin,
    setisLogin,
    lightMode,
    setlightMode,
    progress,
    setProgress,
    baseUrl,
    setbaseUrl,
    user ,
    setuser
  }
  return (
    <>
      <BrowserRouter>
        <Mycontext.Provider value={values}>
          <LoadingBar
            color={ lightMode===true?"#2719f1ff":"#f11919ff"}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          {isHeadfoot === true && <Header />}

          <div className='main d-flex'>
            {isHeadfoot === true && <div className={`sidewraper ${toggleOpen === true ? 'todle' : 'notodle'} `}>
              <Sidebar />

            </div>}
            <div className={`content ${toggleOpen === true ? 'todle' : 'notodle'} ${isHeadfoot === false ? 'fullwid' : ''} ps-2`}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/product" element={<Product />} />
                <Route path="/productupload" element={<Proupload />} />
                <Route path="/category/upload" element={<Category />} />
                <Route path="/category/list" element={<Categorylist />} />
                <Route path="/product/edit/:id"  element={<Editpro/>}/>
              </Routes>
            </div>
          </div>
        </Mycontext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { Mycontext };
