import Rating from '@mui/material/Rating';


const Ratings=(props)=>{
    return(
        <>
         <Rating name="read-only" value={props.velue} precision={0.1}   readOnly size="small"/>
        </>
    )
}

export default Ratings;