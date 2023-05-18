


import React from 'react'
import { useCart } from 'react-use-cart';

import "./Food.scss";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../Food/Food.scss"

function Garson() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) return <p>Your cart is empty</p>;
    return (

        <>
           
       
            <div className='dvOrder'>
                <div className="order">

                    <table>
                        {items.map((item) => (

                                    <div className='rowStyle' key={item.id}>
                                        <p>{item.fFilter} {item.fName}</p>

                                        <tr>
                                            <td>{item.price} تومان</td>
                                            <td>
                                                <div className='dvCount'>

                                                    <div className="squar">
                                                        <FontAwesomeIcon icon={faPlus} style={{ fontSize: "15px" }} onClick={() => updateItemQuantity(item.id, item.quantity + 1)} />
                                                    </div>


                                                    {/* <p  className='inptNumber' />  */}
                                                    <span className='inptNumber'> {item.quantity}</span>


                                                    <div className="squar">
                                                        <FontAwesomeIcon icon={faMinus} style={{ fontSize: "15px" }} onClick={() => updateItemQuantity(item.id, item.quantity - 1)} />
                                                    </div>

                                                    {/* <button onClick={() => removeItem(item.id)}>&times;</button> */}

                                                </div>

                                            </td>



                                            <td><div className="dvImage"> <img src={item.fImage}/></div></td>
                                        </tr>


                                    </div>

                      
                        ))}


                            <p>col {cartTotal}</p>

                    </table>


                </div>
            </div>




        </>
    )
}







export default Garson


