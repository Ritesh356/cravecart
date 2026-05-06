import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { MyContexts} from  "./index";
import {useContext} from "react"


const Quantity=()=>{
      const context=useContext(MyContexts);
        const increase = () => {
           context.setCount(context.Count + 1);
        }
        const decrease = () => {
            if (context.Count > 0) {
                context.setCount(context.Count - 1);
            }
    
        }
    return(
        <>
        <div className="quantitybox  d-flex gap-2 align-items-center">
        <div className="numbox">
          {context.Count}
        </div>
        <div className="numbtn d-flex flex-column">
         <span  onClick={()=>increase()}><FaAngleUp/></span>
         <span  onClick={()=>decrease()}><FaAngleDown/></span> 
        </div>
        </div>
        </>
    )
}

export default Quantity;