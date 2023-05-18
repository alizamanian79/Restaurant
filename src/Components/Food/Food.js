
import React, { useState, useEffect, useReducer } from 'react';
import "./Food.scss";


import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../Header/Header';


import { useCart } from "react-use-cart";


import dataFood from './data';

import FoodRow from '../Food/FoodRow'

function Food() {

  const { addItem } = useCart();

  // Food Data
  const [dtFood, setDtFood] = useState(dataFood)
  const [dtCategoti, setdtCategoti] = useState([
    { cName: "پیتزا" },
    { cName: "سالاد" },
    { cName: "کیک" },
    { cName: "نوشیدنی" }

  ])

const [sarAshpaz, setSarAshpaz] = useState(true)




  return (
    <React.Fragment>


<Header/>

{sarAshpaz && dtCategoti.map((x)=>(
<FoodRow foodtype={x.cName}>

{ dtFood.filter(foodCt => foodCt.fFilter == x.cName).map((item, index) => (

<React.Fragment>
  <div className="cardFood" key={index}>

    <p>{item.fName}</p>
    <img className='dvFoodImage' src={item.fImage} />

    <p className='tCaption'>توضیحات</p>
    <p className='caption'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
    <div className='grid'>

      <div className="right">
        <p>{item.price}</p>
      </div>

      <div className="left">

        <div className="squar2" onClick={() => addItem(item)}>
          افزودن
          <FontAwesomeIcon icon={faPlus} style={{ margin: "0px 5px 0px 0px" }} />
        </div>

      </div>
    </div>

    {/* <button onClick={()=>{alert(x.img)}}>click</button> */}
  </div>
</React.Fragment>
))
}

</FoodRow>
  ))
}


 





    </React.Fragment>
  )
}

export default Food