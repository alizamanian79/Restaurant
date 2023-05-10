



import React, { useState,useEffect } from 'react';
import "./Food.scss";

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function FoodTemplate(props) {

  return (

         <div className='dvFood'>
        <div className='food'>

          <h4>{props.foodtype}</h4>

          <div className='scroll'>

         {props.children}


          </div>
        </div>
      </div>

  )
}
