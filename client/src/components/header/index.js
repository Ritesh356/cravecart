import { Link } from "react-router-dom";
import Logo from '../images/Logo.png'
import Dropdown from "./dropdown";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { MyContext } from "../../App";
import { Navigation } from "./navigation";
import { FaAngleRight } from "react-icons/fa";



export function Header() {
    const context = useContext(MyContext);



    return (
        <>
            <div className="headerWrapper">
                <div className="top-script text-center">
                    <b> Crave Cart Sale </b>– Feast on Discounts Up to 40% Off!
                </div>
                <div className="container ">

                    <div className="row mt-1">
                        <div className="logo col-sm-2 ">
                            <Link to={`/`}><img src={Logo} alt="logo" /></Link>
                            <div>
                                <button className="hamburger btn btn-info d-flex justify-content-between px-2 py-1">
                                    <div className="allCategory d-flex gap-2"><span><GiHamburgerMenu size={20} /></span><span><b>ALL CATEGORY</b></span></div>
                                    <div><FaAngleDown size={20} /></div>
                                </button>
                                <div className="totalpopup shadow">
                                    <div className="menu">
                                        <button className="btn btn-light d-flex justify-content-between"><span>beverages</span><span><FaAngleRight size={20}/></span></button>
                                        <div className="leftpopup shadow">
                                            <Link to="/"><button className="btn btn-light">Kesar Badam Milk</button></Link>
                                            <Link to="/"><button className="btn btn-light">Saffron Lassi</button></Link>
                                            <Link to="/"><button className="btn btn-light">Thandai </button></Link>
                                            <Link to="/"><button className="btn btn-light">Rose Falooda</button></Link>
                                            <Link to="/"><button className="btn btn-light"> Elaichi Chai</button></Link>
                                            <Link to="/"><button className="btn btn-light"> Fruit Mocktail </button></Link>
                                            <Link to="/"><button className="btn btn-light">Virgin Mojito </button></Link>
                                            <Link to="/"><button className="btn btn-light">Aam Panna </button></Link>
                                            <Link to="/"><button className="btn btn-light">coffee</button></Link>
                                            <Link to="/"><button className="btn btn-light">Sparkling Jaljeera</button></Link>
                                        </div>


                                    </div>
                                    <div className="menu">
                                        <button className="btn btn-light">veg menu</button>
                                        <div className="leftpopup shadow">
                                            <Link to="/"><button className="btn btn-light">Samosa</button></Link>
                                            <Link to="/"><button className="btn btn-light">Vada Pav</button></Link>
                                            <Link to="/"><button className="btn btn-light">Veg Burger</button></Link>
                                            <Link to="/"><button className="btn btn-light">Pav Bhaji</button></Link>
                                            <Link to="/"><button className="btn btn-light">Veg Pizza</button></Link>
                                            <Link to="/"><button className="btn btn-light">Paneer Tikka </button></Link>
                                            <Link to="/"><button className="btn btn-light">Dabeli</button></Link>
                                            <Link to="/"><button className="btn btn-light">Spring Roll</button></Link>
                                            <Link to="/"><button className="btn btn-light">Veg Sandwich</button></Link>
                                            <Link to="/"><button className="btn btn-light">Veg Momos</button></Link>
                                        </div>
                                    </div>
                                    <div className="menu">
                                        <button className="btn btn-light">Dairy & Alternatives</button>
                                        <div className="leftpopup shadow">
                                            <Link to="/"><button className="btn btn-light"> Cow Ghee </button></Link>
                                            <Link to="/"><button className="btn btn-light"> Badam Milk</button></Link>
                                            <Link to="/"><button className="btn btn-light">Artisanal Paneer </button></Link>
                                            <Link to="/"><button className="btn btn-light">Saffron Lassi</button></Link>
                                            <Link to="/"><button className="btn btn-light">Fresh Mozzarella</button></Link>
                                            <Link to="/"><button className="btn btn-light">Mishti Doi </button></Link>
                                            <Link to="/"><button className="btn btn-light">Handcrafted  Cheese </button></Link>
                                            <Link to="/"><button className="btn btn-light">white Butter (Makhan)</button></Link>
                                            <Link to="/"><button className="btn btn-light">Premium Kulfi </button></Link>
                                            <Link to="/"><button className="btn btn-light">Organic  Yogurt</button></Link>
                                        </div>

                                    </div>
                                    <div className="menu">
                                        <button className="btn btn-light">non-veg menu</button>
                                        <div className="leftpopup shadow">
                                            <Link to="/"><button className="btn btn-light">Butter Chicken</button></Link>
                                            <Link to="/"><button className="btn btn-light">Chicken Tikka</button></Link>
                                            <Link to="/"><button className="btn btn-light">Rogan Josh</button></Link>
                                            <Link to="/"><button className="btn btn-light">Fish Curry</button></Link>
                                            <Link to="/"><button className="btn btn-light">Mutton Biryani</button></Link>
                                            <Link to="/"><button className="btn btn-light">Tandoori Chicken</button></Link>
                                            <Link to="/"><button className="btn btn-light">Prawn Masala</button></Link>
                                            <Link to="/"><button className="btn btn-light">Chicken Korma</button></Link>
                                            <Link to="/"><button className="btn btn-light">Egg Curry</button></Link>
                                            <Link to="/"><button className="btn btn-light">Keema</button></Link>
                                        </div>

                                    </div>
                                    <div className="menu">
                                        <button className="btn btn-light">cakes & pastry</button>
                                        <div className="leftpopup shadow">
                                            <Link to="/"><button className="btn btn-light">Chocolate Cake</button></Link>
                                            <Link to="/"><button className="btn btn-light">Black Forest Cake</button></Link>
                                            <Link to="/"><button className="btn btn-light">Vanilla Cake</button></Link>
                                            <Link to="/"><button className="btn btn-light">Butterscotch Cake</button></Link>
                                            <Link to="/"><button className="btn btn-light">Strawberry Cake</button></Link>
                                            <Link to="/"><button className="btn btn-light">Pineapple Pastry</button></Link>
                                            <Link to="/"><button className="btn btn-light">Red Velvet Cake</button></Link>
                                            <Link to="/"><button className="btn btn-light">Rasmalai Cake</button></Link>
                                            <Link to="/"><button className="btn btn-light">Plum Cake</button></Link>
                                            <Link to="/"><button className="btn btn-light">Opera Pastry</button></Link>
                                        </div>


                                    </div>
                                    <div className="menu">
                                        <button className="btn btn-light">chinese</button>
                                        <div className="leftpopup shadow">
                                            <Link to="/"><button className="btn btn-light">Manchurian</button></Link>
                                            <Link to="/"><button className="btn btn-light">Hakka Noodles</button></Link>
                                            <Link to="/"><button className="btn btn-light">Spring Roll</button></Link>
                                            <Link to="/"><button className="btn btn-light">Chili Paneer</button></Link>
                                            <Link to="/"><button className="btn btn-light">Fried Rice</button></Link>
                                            <Link to="/"><button className="btn btn-light">Schezwan Chicken</button></Link>
                                            <Link to="/"><button className="btn btn-light">Sweet Corn Soup</button></Link>
                                            <Link to="/"><button className="btn btn-light">Dimsum</button></Link>
                                            <Link to="/"><button className="btn btn-light">Kung Pao Chicken</button></Link>
                                            <Link to="/"><button className="btn btn-light">Egg Fried Rice</button></Link>
                                        </div>

                                    </div>
                                    <div className="menu">
                                        <button className="btn btn-light">bicuits & cookies</button>
                                        <div className="leftpopup shadow">
                                            <Link to="/"><button className="btn btn-light">Nankhatai</button></Link>
                                            <Link to="/"><button className="btn btn-light">Butter Cookies</button></Link>
                                            <Link to="/"><button className="btn btn-light">Choco Chip Cookies</button></Link>
                                            <Link to="/"><button className="btn btn-light">Oatmeal Raisin Cookies</button></Link>
                                            <Link to="/"><button className="btn btn-light">Butter Cookies</button></Link>
                                            <Link to="/"><button className="btn btn-light">Shortbread Biscuits</button></Link>
                                            <Link to="/"><button className="btn btn-light">Marie Biscuits</button></Link>
                                            <Link to="/"><button className="btn btn-light">Anzac Biscuits</button></Link>
                                            <Link to="/"><button className="btn btn-light">Ginger Cookies</button></Link>
                                            <Link to="/"><button className="btn btn-light">Sugar Cookies</button></Link>
                                        </div>

                                    </div>
                                    <div className="menu">
                                        <button className="btn btn-light">south-indian</button>
                                        <div className="leftpopup shadow">
                                            <Link to="/"><button className="btn btn-light">Idli</button></Link>
                                            <Link to="/"><button className="btn btn-light">Dosa</button></Link>
                                            <Link to="/"><button className="btn btn-light">Vada</button></Link>
                                            <Link to="/"><button className="btn btn-light">Sambar</button></Link>
                                            <Link to="/"><button className="btn btn-light">Rasam</button></Link>
                                            <Link to="/"><button className="btn btn-light">Pongal</button></Link>
                                            <Link to="/"><button className="btn btn-light">Upma</button></Link>
                                            <Link to="/"><button className="btn btn-light">Uttapam</button></Link>
                                            <Link to="/"><button className="btn btn-light">Appam</button></Link>
                                            <Link to="/"><button className="btn btn-light">Medu Vada</button></Link>
                                        </div>

                                    </div>
                                    <div className="menu">
                                        <button className="btn btn-light">seafood</button>
                                        <div className="leftpopup shadow">
                                            <Link to="/"><button className="btn btn-light">Goan Fish Curry</button></Link>
                                            <Link to="/"><button className="btn btn-light">Prawn Malabar</button></Link>
                                            <Link to="/"><button className="btn btn-light">Fish Curry</button></Link>
                                            <Link to="/"><button className="btn btn-light">Fish Rawa Fry</button></Link>
                                            <Link to="/"><button className="btn btn-light">Chingri Curry</button></Link>
                                            <Link to="/"><button className="btn btn-light">Meen Moilee</button></Link>
                                            <Link to="/"><button className="btn btn-light">Tandoori Lobster</button></Link>
                                            <Link to="/"><button className="btn btn-light">Bombay Duck Fry</button></Link>
                                            <Link to="/"><button className="btn btn-light">Crab Masala</button></Link>
                                            <Link to="/"><button className="btn btn-light">Fish Amritsari</button></Link>
                                        </div>

                                    </div>
                                    <div className="menu">
                                        <button className="btn btn-light">classic indian</button>
                                        <div className="leftpopup shadow">
                                            <Link to="/"><button className="btn btn-light">Rajma Chawal</button></Link>
                                            <Link to="/"><button className="btn btn-light">Chole Bhature</button></Link>
                                            <Link to="/"><button className="btn btn-light">Pav Bhaji</button></Link>
                                            <Link to="/"><button className="btn btn-light">Dhokla</button></Link>
                                            <Link to="/"><button className="btn btn-light">Dosa</button></Link>
                                            <Link to="/"><button className="btn btn-light">Poha</button></Link>
                                            <Link to="/"><button className="btn btn-light">Baingan Bharta</button></Link>
                                            <Link to="/"><button className="btn btn-light">Dal Tadka</button></Link>
                                            <Link to="/"><button className="btn btn-light">Palak Paneer</button></Link>
                                            <Link to="/"><button className="btn btn-light">Aloo Paratha</button></Link>
                                        </div>

                                    </div>
                                    <div className="menu">
                                        <button className="btn btn-light">ice-cream</button>
                                        <div className="leftpopup shadow">
                                            <Link to="/"><button className="btn btn-light">Tender Coconut</button></Link>
                                            <Link to="/"><button className="btn btn-light">Mango</button></Link>
                                            <Link to="/"><button className="btn btn-light">Sitaphal (Custard Apple)</button></Link>
                                            <Link to="/"><button className="btn btn-light">Butterscotch</button></Link>
                                            <Link to="/"><button className="btn btn-light">Chocolate Brownie</button></Link>
                                            <Link to="/"><button className="btn btn-light">Pistachio Almond</button></Link>
                                            <Link to="/"><button className="btn btn-light">Gadbad Sundae</button></Link>
                                            <Link to="/"><button className="btn btn-light">Guava Chilli</button></Link>
                                            <Link to="/"><button className="btn btn-light">Rose Gulkand</button></Link>
                                            <Link to="/"><button className="btn btn-light">Kulfi</button></Link>
                                        </div>

                                    </div>
                                    <div className="menu">
                                        <button className="btn btn-light">desserts</button>
                                        <div className="leftpopup shadow">
                                            <Link to="/"><button className="btn btn-light">Gulab Jamun</button></Link>
                                            <Link to="/"><button className="btn btn-light">Kaju Katli</button></Link>
                                            <Link to="/"><button className="btn btn-light">Rasgulla</button></Link>
                                            <Link to="/"><button className="btn btn-light">Jalebi</button></Link>
                                            <Link to="/"><button className="btn btn-light">Barfi</button></Link>
                                            <Link to="/"><button className="btn btn-light">Ladoo</button></Link>
                                            <Link to="/"><button className="btn btn-light">Kulfi</button></Link>
                                            <Link to="/"><button className="btn btn-light">Phirni</button></Link>
                                            <Link to="/"><button className="btn btn-light">Rabri</button></Link>
                                            <Link to="/"><button className="btn btn-light">Malpua</button></Link>
                                        </div>

                                    </div>

                                </div>
                                <button className="totalpro"><b>99+ Products</b></button>
                            </div>



                        </div>
                        <div className="rightHeader col-sm-10 ">
                            <div className="row mt-0 mb-2">
                                <div className="uppertags d-flex align-items-center justify-content-end">
                                    <span className="px-3">100%,secured delivery</span>
                                    <span className="px-3">|</span>
                                    <button className="language btn btn-light px-3">English <FaAngleDown /></button>
                                    <span className="px-3">|</span>
                                    <button className="btn btn-link px-3">About Us</button>
                                    <span className="px-3">|</span>
                                    <span className="px-3">Need Help? contact us<span className="px-1 text-info"> +22 6520</span></span>
                                </div>
                            </div>
                            <div className="row mt-4 mb=1">
                                <div className="dropdown col-sm-2">
                                    {context.countryList.length !== 0 && <Dropdown />}

                                </div>
                                {/* search bar start here  */}
                                <div className="searchbar col-sm-6 d-flex">
                                    <div className="searchtool input-group">
                                        <input type="search" className="inputBar form-control" placeholder="Search for Items...." aria-label="Search" />
                                        <button className="searchicon btn btn-secondary"> <IoSearch size={30} />

                                        </button>

                                    </div>


                                </div>
                                <div className="user col-sm-1 d-flex">
                                    <button className="userId btn btn-light">
                                        <FaUser size={20} />
                                    </button>

                                </div>
                                <div className="price col-sm-1 d-flex align-items-center">
                                    $ 0.00
                                </div>
                                <div className="crate col-sm-1 d-flex">
                                   <Link to="/cart"><button className="shoppingcart"><LuShoppingCart size={30} /></button></Link> 

                                </div>
                                <div className="count">0</div>
                            </div>
                            <div className="row navrow ">
                                <Navigation />
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}