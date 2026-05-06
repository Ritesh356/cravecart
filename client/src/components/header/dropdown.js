import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import React from 'react';
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const Dropdown = () => {
    const context=useContext(MyContext);
    const [isOpen, setIsOpen] = useState(false)
    const[selecetedCountry, setselectedCountry]=useState(null);
    const[countryList, setcountryList]=useState([]);

   
    const selectcountry=(index,country)=>{
        setselectedCountry(index);
        setIsOpen(false);
        context.setselCountry(country);

    }

     useEffect(()=>{
        setcountryList(context.countryList);
    },[])

    const filterList=(e)=>{
        const keyword =e.target.value.toLowerCase();
        if(keyword!==""){ const list=countryList.filter((item)=>{
            return item.country.toLowerCase().includes(keyword);
        });
       

        setcountryList(list);}
        else{
            setcountryList(context.countryList);
        }
       



    }

    
    return (
        <>
            <button className="locationbar btn btn-light d-flex gap-3" onClick={() => setIsOpen(true)}>
                <div className="location d-flex flex-column">
                    <div className=" loactionmix "><span><b>Country</b></span><span className="ml-auto"><FaAngleDown /></span></div>
                    <div className="islocation text-info">{context.selCountry!==``?context.selCountry:"Set Country"}</div>
                </div>

            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="countrydial px-3" slots={{
                transition: Transition,
            }}>
                <button className="btn btn-light close" onClick={() => setIsOpen(false)}><IoClose /></button>
                <div className=" countrydiv px-3">

                    <h3>Choose Your Delivery Location</h3>
                    <p className="text-gray">Select your location to view delivery options for your area.</p>
                    <div className="searchtool input-group w-100">
                        <input type="search" className="inputBar form-control" placeholder="Search for Area" aria-label="Search" onChange={filterList} />
                        <button className="searchicon btn btn-secondary"> <IoSearch />
                        </button>

                    </div>
                    <ul className="countrylist py-2 ">{
                        countryList?.length!==0 && countryList?.map((item,index)=>{
                            return(<li key={index}><button onClick={() => selectcountry(index,item.country)} 
                            className={`${selecetedCountry===index?`active`:``}`}>{item.country}</button></li>)

                        })}
                        
                        
                    </ul>

                </div>

            </Dialog>

        </>
    )
}


export default Dropdown;