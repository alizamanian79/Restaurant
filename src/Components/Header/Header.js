

import React, { useState,useEffect  } from 'react'


// Css Part
import "../General/General.css"
import "./Header.scss"


export default function Header(props) {



    const [dtFilters, setdtFilters] = useState([
        { filterName: "همه" },
        { filterName: "پرطرفدارها" },
        { filterName: "تخفیف دار" },
        { filterName: "پیشنهاد سراشپز" },
      ])
    



      const filters = dtFilters.map((item,index) => {
        return (
          <React.Fragment>
            <li className='filter' onClick={()=>{handleFilter(index,item)}}>{item.filterName}</li>
          </React.Fragment>
        )
    
      })
      const handleFilter=(index,item)=>{
        var allFilter = document.querySelectorAll(".filter");
        allFilter[index].classList.add("filterActive");
    
        for (let i = 0; i < allFilter.length; i++) {
          if(i!=index){
            allFilter[i].classList.remove("filterActive")
          }
        }
    
        // alert(item.filterName);
       
      }


const initialFunHeader = () => {

}




useEffect(() => {
  var allFilter = document.querySelectorAll(".filter");
  allFilter[0].classList.add("filterActive")
}, [])


    return (
        <>
            <div className='dvHeader'>

                <h3 >خوش امدید</h3>

                <div className='dvSearch'>
                    <input type="text" className='search' placeholder='جستجو کنید . . .' />
                </div>

                <div className='dvFilter'>

                    <ul>
                        {filters}
                    </ul>

                </div>

            </div>

           
        </>
    )
}
