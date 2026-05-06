import { BsThreeDotsVertical } from "react-icons/bs";
import { PiChartLineUp } from "react-icons/pi";
import { PiChartLineDownDuotone } from "react-icons/pi";



const Dashboard = (props) => {
    return (
        <>
            <div className="dbbox" style={{
                background: `linear-gradient(to right,${props.color?.[0]},${props.color?.[1]})`
            }}>
             <span className="dbhead">{props.head}</span>
             <span className="dbnum">{props.num}</span>
             <span className="threedot"><BsThreeDotsVertical/></span>
             <span className="sidepic">{props.img}</span>
             <div className="prevmoncnt d-flex gap-2">
                <span>+{props.lastmon}</span>
                <span>Last Month</span>
             </div>
             <span className="chartline">{
                props.grow===true?<PiChartLineUp/>:<PiChartLineDownDuotone/>
                }</span>
            </div>
        </>
    )
}

export default Dashboard;