


import React from 'react'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Food.scss";

export default function FoodRow(props) {
    return (
        <>
            <div className='dvFood'>
                <div className='food'>
                <h4>{props.foodtype}</h4>
                    <div className='scroll'>

                        {props.children}

                    </div>
                </div>
            </div>
        </>
    )
}
