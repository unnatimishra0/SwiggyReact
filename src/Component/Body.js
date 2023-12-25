import React from 'react'
import ResturantCard from "./ResturantCard";
import { resList} from '../Utils/MockData';
const Body=()=>{


    return (
        <div className="body">
            <div className='search'></div>
            <div className="res-container">
                {resList.map((restaurant)=>{
                    {console.log(restaurant)}

                       return(
                        <ResturantCard
                        key={restaurant.info.id} 
                        resData={restaurant}/>
                       )
                })
                }
                
            </div>

        </div>
    )
    

    
}

export default Body;











// const n =[1,2,3, 4];
// n.map(function (s){
//     return s*s;
// })

// n.map((s)=> {s*s})

// const  num=[
//     {
//         id:'0',
//         name:'s'
//     },{
//         id: '1',
//         name:'sw'
//     }
// ]
// num.map((rest) =>{
//     console.log(rest[0].id);
// }
// )

























