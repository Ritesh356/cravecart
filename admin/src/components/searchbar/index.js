import { IoSearchSharp } from "react-icons/io5";

const Searchbar = () => {
    return (
        <>
            <div className="searchbarmain d-flex align-items-center ps-2">
                <input type="search" className="searchbar" placeholder="Search for Items...." aria-label="Search" />
                <button className="menu ms-auto">
                <IoSearchSharp />
            </button>
            </div>
            
        </>
    )
}
export default Searchbar;