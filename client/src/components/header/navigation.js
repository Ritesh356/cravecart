import { GiCupcake } from "react-icons/gi";
import { RiDrinksFill } from "react-icons/ri";
import { TbSquareDot } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";

export function Navigation() {
    return (
        <>
            <div className="btnrow d-flex justify-content-between">
                <Link to="/"><div className="homebtn">
                    <button type="button" className="homebutton btn btn-light d-flex gap-2">
                        <span>HOME</span>
                        <span><GoHomeFill size={25} /></span>
                    </button>
                </div>
                </Link>
                <div className="beverages">
                    <button type="button" className="beveragebtn btn btn-light  d-flex gap-2 ">
                        <span>BEVERAGES</span>
                        <span><RiDrinksFill size={25} /></span>
                    </button>
                    <div className="popup shadow">
                        <Link to="/"><button className="btn btn-light">soft-drink</button> </Link>
                        <Link to="/"><button className="btn btn-light">coffee</button> </Link>
                        <Link to="/"><button className="btn btn-light">Juices</button> </Link>
                        <Link to="/"><button className="btn btn-light">Mocktails</button> </Link>
                        <Link to="/"><button className="btn btn-light"> milkshakes</button> </Link>
                        <Link to="/"><button className="btn btn-light">energy-drinks</button> </Link>
                        <Link to="/"><button className="btn btn-light"> flavored water</button> </Link>
                        <Link to="/"><button className="btn btn-light"> smoothies</button> </Link>

                    </div>
                </div>
                <div className="veg">
                    <button type="button" className="vegbtn btn btn-light d-flex gap-2">
                        <span>VEG</span>
                        <span><TbSquareDot size={25} /></span>
                    </button>
                    <div className="popup shadow">
                        <Link to="/"><button className="btn btn-light">burger</button> </Link>
                        <Link to="/"><button className="btn btn-light">pizza</button> </Link>
                        <Link to="/"><button className="btn btn-light">italian</button> </Link>
                        <Link to="/"><button className="btn btn-light">veg-thali</button> </Link>
                        <Link to="/"><button className="btn btn-light">classic-indian</button> </Link>
                        <Link to="/"><button className="btn btn-light">chinese</button> </Link>
                        <Link to="/"><button className="btn btn-light">south-indian</button> </Link>
                        <Link to="/"><button className="btn btn-light">dessert</button> </Link>
                    </div>
                </div>
                <div className="bakery">
                    <button type="button " className="bakerybtn btn btn-light d-flex gap-2 ">
                        <span>BAKERY</span>
                        <span><GiCupcake size={25} /></span>
                    </button>
                    <div className="popup shadow">
                        <Link to="/"><button className="btn btn-light">cakes</button> </Link>
                        <Link to="/"><button className="btn btn-light">pastry</button> </Link>
                        <Link to="/"><button className="btn btn-light">brownie</button> </Link>
                        <Link to="/"><button className="btn btn-light">cookies & biscuits</button> </Link>
                        <Link to="/"><button className="btn btn-light">donuts</button> </Link>
                        <Link to="/"><button className="btn btn-light">cupcakes</button> </Link>

                    </div>
                </div>
                <div className="blog">
                    <button type="button" className="blogbtn btn btn-light d-flex gap-2">
                        <span>NON-VEG</span>
                        <span><TbSquareDot size={25} /></span>

                    </button>
                    <div className="popup shadow">
                        <Link to="/"><button className="btn btn-light">Fish & Seafood</button> </Link>
                        <Link to="/"><button className="btn btn-light">mutton</button> </Link>
                        <Link to="/"><button className="btn btn-light">egg dishes</button> </Link>
                        <Link to="/"><button className="btn btn-light">chicken dish</button> </Link>
                        <Link to="/"><button className="btn btn-light">Other</button> </Link>
                    </div>
                </div>
                <div className="contact">
                    <button type="button" className="contactbtn btn btn-light">GROCERY </button>
                    <div className="popup shadow">
                        <Link to="/listing"><button className="btn btn-light">Fruits</button></Link>
                        <Link to="/listing"><button className="btn btn-light">Vegetables</button> </Link>
                        <Link to="/listing"><button className="btn btn-light"> Pulses & Legumes</button> </Link>
                        <Link to="/listing"><button className="btn btn-light">Dairy & Alternatives</button> </Link>
                        <Link to="/"><button className="btn btn-light">frozen-food</button> </Link>
                        <Link to="/"><button className="btn btn-light">spices & oil</button> </Link>
                    </div>
                </div>


            </div>
        </>
    )
}