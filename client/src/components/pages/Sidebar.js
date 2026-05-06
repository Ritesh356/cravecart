import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rangeslider from './rangeslider';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="category mt-2 ms-3 ">
                <h5 className='allCategories d-flex ps-3'>ALL CATEGORIES </h5>
                <ul>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="Tea" />
                    </li>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="Milk" />
                    </li>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="Sugar" />
                    </li>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="Bread" />
                    </li>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="Eggs" />
                    </li>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="Rice" />
                    </li>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="Butter" />
                    </li>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="Apples" />
                    </li>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="Tomatoes" />
                    </li>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="Potatoes" />
                    </li>
                </ul>

            </div>
            <br/>
            <hr/>
            <div className='filterprice mt-4  ms-2 ps-1 me-2'>
                <div className='allCategories ms-1 ps-2'>FILTER BY PRICE </div>
                <div className='ps-3 pe-3 pt-3'>
                    <Rangeslider/>
                </div>
            </div>
             <br/>
            <hr/>
            <div className='prostat mt-4  ms-2 ps-2 me-2'>
                <div className='allCategories ms-2 ps-1'>PRODUCT STATUS</div>
                 <ul>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="IN STOCK" />
                    </li>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="BEST SELLER" />
                    </li>
                    <li>
                        <FormControlLabel control={<Checkbox />} label="FOR SALE" />
                    </li>
                    </ul>
            </div>
             <br/>
             <div className='listpic ps-2'>
                <div className='delicious text-danger'>delicious</div>
                <div className='cravecart'><b><u>CraveCart</u></b></div>
                <div className='delipara d-flex flex-column'><span>the freshest of</span><span>all time</span></div>
                 <Link to="#"><img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-16.jpg" className='w-100'/></Link>
             </div>
           
        </>
    )
}

export default Sidebar;