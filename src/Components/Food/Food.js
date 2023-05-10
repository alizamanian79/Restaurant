
import React, { useState, useEffect } from 'react';
import "./Food.scss";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'




function Food() {

  // Food Data
  const [dtOrder, setDtOrder] = useState([
    { orderName: "گوشت", orderPrice: 245000, orderCount: 1, orderImg: "https://i.ibb.co/0j9SzKq/Group-5.png" }
  ])

  const [dtFood, setDtFood] = useState([
    { fFilter: "پیتزا", fName: "گوشت و قارچ", fPrice: 22000 },
    { fFilter: "پیتزا", fName: "پپرونی", fPrice: 300000 },
    { fFilter: "پیتزا", fName: "سیر استک", fPrice: 350000 },
    { fFilter: "سالاد", fName: "سزار", fPrice: "145000" },
    { fFilter: "سالاد", fName: "فصل", fPrice: "35000" },
    { fFilter: "سالاد", fName: "شیرازی", fPrice: "20000" },
    { fFilter: "سالاد", fName: "اندونزی", fPrice: "80000" },
    { fFilter: "نوشیدنی", fName: "کوکاکولا مشکی", fPrice: 20000 },
    { fFilter: "کیک ها", fName: "", fPrice: "برایس" }

  ])






  return (

    <>


<div className='dvFood'>
    <div className='food'>
      <h4>{props.foodFilter}</h4>

      <div className='scroll'>
        <div className="cardFood">

          <p>پیتزا</p>


          {/* <img className='dvFoodImage' src={{ emty }} /> */}

          <p className='tCaption'>توضیحات</p>
          <p className='caption'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          <div className='grid'>

            <div className="right">
              <p>120000</p>
            </div>

            <div className="left">

              {/* <div className="squar">
                    <FontAwesomeIcon icon={faPlus} />
                    </div>

                    <p className='inptNumber'>10</p> */}

              <div className="squar2">
                افزودن
                <FontAwesomeIcon icon={faPlus} style={{ margin: "0px 5px 0px 0px" }} />
              </div>

            </div>
          </div>
          {/* <button onClick={()=>{alert(x.img)}}>click</button> */}
        </div>
      </div>
    </div>
  </div>



      <div className='dvOrder'>
        <div className="order">

          {/* Filter */}
          <h3>سفارش شما</h3>


          <table>
            {dtOrder.map((item) => (
              <div className='rowStyle'>
                <p>{item.orderName}</p>

                <tr>
                  <td>{item.orderPrice} تومان</td>


                  <td>
                    <div className='dvCount'>

                      <div className="squar">
                        <FontAwesomeIcon icon={faPlus} style={{ fontSize: "15px" }} />
                      </div>


                      <input type="number" className='inptNumber' />


                      <div className="squar">
                        <FontAwesomeIcon icon={faMinus} style={{ fontSize: "15px" }} />
                      </div>



                    </div>

                  </td>



                  <td><div className="dvImage"> <img src={item.orderImg} /></div></td>
                </tr>


              </div>
            ))

            }





          </table>




        </div>
      </div>

    </>


  )
}

export default Food