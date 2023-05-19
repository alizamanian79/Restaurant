


import React, { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart';

import "./Food.scss";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import "../Food/Food.scss"




function Garson() {

    const [showModal, setshowModal] = useState(false)

    const sabtOrder = () => {
        const result = window.confirm('ایا از سفارش خود اطمینان دارید؟');
        if (result) {
            setshowModal(true)
        } else {
            return
        }
    }

    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();



    if (isEmpty) return "";
    return (

        <>

            {showModal &&
                <div className='dvModal'>
                    <div className="modal">
                        <p className='factor'>فاکتور خرید شما</p>

                        <div className='main'>

                            <table>
                                <thead>
                                    <tr>
                                        <td>نام غذا</td>
                                        <td>تعداد</td>
                                        <td>قیمت</td>
                                    </tr>
                                </thead>

                                <tbody>

                                    {items.map((x) => (
                                        <>
                                            <tr>
                                                <td>{x.fFilter} {x.fName}</td>
                                                <td>{x.quantity}</td>
                                                <td>{x.itemTotal}</td>
                                            </tr>
                                        </>
                                    ))
                                    }




                                </tbody>


                            </table>


                        </div>
                        <div className="dvBtnClose">
                            <button onClick={() => setshowModal(false)}>بستن</button>
                        </div>

                    </div>
                </div>
            }


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



                                    <td><div className="dvImage"> <img src={item.fImage} /></div></td>
                                </tr>


                            </div>


                        ))}


                    </table>
                </div>

                <div className="dvCalculat">

                    <div className="left">
                        <button onClick={sabtOrder}>قبت نهایی</button>
                    </div>

                    <div className="right">
                        <p>قیمت نهایی :{cartTotal} تومان</p>
                    </div>
                </div>




            </div>




        </>
    )
}







export default Garson


