import Man from "../components/images/man.png";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdOutlineReply } from "react-icons/md";

const Review = (props) => {
    return (
        <>
            <div className="reviewuser shadow mb-5 ">
                <div className="  d-flex align-items-center gap-3 p-4">
                    <span className="userimg12">
                        <span className="userimg2">
                            <img src={props.img} className="w-100" />
                        </span></span>
                    <div className="imginforev d-flex flex-column">
                        <span className="names">{props.name}</span>
                        <span className="minago">{props.min} minute ago!</span>
                    </div>

                </div>
                <div className="pararev ps-5 pe-5 pb-4">
                    I really like this yogurt! It’s tasty, filling, and I feel good knowing it’s packed with protein. The vanilla flavor is just right—not too sweet—and it keeps me full for a long time. Definitely one of my favorite healthy snacks!
                </div>
                <div className="d-flex align-items-center gap-5 ms-5 pb-4">
                   <span className="d-flex align-items-center gap-2"> <span className="icon11"><BiLike/></span> <span className="nom"><b>{props.num}</b></span></span>
                    <span className="icon12"><BiDislike /></span>
                </div>
                <button className="btn btn-primary replybtn d-flex gap-1 align-items-center"> <span className="icon13"><MdOutlineReply /></span>Reply</button>
            </div>
        </>
    )
}

export default Review;