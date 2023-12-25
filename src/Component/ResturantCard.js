import { RES_LOGO } from "../Utils/Constants";
const ResturantCard =(props)=>{
    const {resData}=props;
     const {name}= resData.info
     console.log(name+'hi');
    return(
        <>
    {console.log(name.info+'hellloo')}
            {name}
        </>
    );


    // return(
    //     <div className="res-card">
    //         <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
    //         <h4>{name}</h4>  
    //         <h4>{locality}</h4>  
    //         <h4>{areaName}</h4>  
    //         <h4>{costForTwo}</h4>  
    //         <h4>{avgRating}</h4>  
 
    //     </div>
    // );
}
export default ResturantCard;