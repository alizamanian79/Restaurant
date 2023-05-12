
import React, { useState, useEffect } from 'react';
import "./Food.scss";


import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FoodTemplate from './FoodTemplate';

const initialValue ={
inptCount:1 
}

function Food() {

const [state, setState] = useState(initialValue)

  // Food Data

  const [dtCategoti, setdtCategoti] = useState([
    { cName: "پیتزا" },
    { cName: "سالاد" },
    { cName: "کیک" },
    { cName: "نوشیدنی" }

  ])



  // https://i.ibb.co/8MtfNcZ/salad.png
  // https://i.ibb.co/Nn0wZDp/cake2.png
  // https://i.ibb.co/9hPMnPG/emtyDish.png
  // https://i.ibb.co/s6ZTQzS/cake1.png

  const [dtFood, setDtFood] = useState([
    { fFilter: "پیتزا", fName: "گوشت و قارچ", fPrice: 22000,fImage:"https://i.ibb.co/0j9SzKq/Group-5.png" },
    { fFilter: "پیتزا", fName: "پپرونی", fPrice: 300000,fImage:"https://i.ibb.co/9hPMnPG/emtyDish.png" },
    { fFilter: "پیتزا", fName: "سیر استک", fPrice: 350000,fImage:"https://i.ibb.co/0j9SzKq/Group-5.png" },
    { fFilter: "سالاد", fName: "سزار", fPrice: "145000",fImage:"https://i.ibb.co/8MtfNcZ/salad.png" },
    { fFilter: "سالاد", fName: "فصل", fPrice: "35000",fImage:"https://i.ibb.co/8MtfNcZ/salad.png" },
    { fFilter: "سالاد", fName: "شیرازی", fPrice: "20000",fImage:"https://i.ibb.co/9hPMnPG/emtyDish.png" },
    { fFilter: "سالاد", fName: "اندونزی", fPrice: "80000",fImage:"https://i.ibb.co/9hPMnPG/emtyDish.png" },
    { fFilter: "نوشیدنی", fName: "کوکاکولا مشکی", fPrice: 20000,fImage:"https://i.ibb.co/9hPMnPG/emtyDish.png" },
    { fFilter: "نوشیدنی", fName: "ماشعیر", fPrice: 20000,fImage:"https://i.ibb.co/9hPMnPG/emtyDish.png" },
    { fFilter: "نوشیدنی", fName: "دوغ", fPrice: 20000,fImage:"https://i.ibb.co/9hPMnPG/emtyDish.png" },
    { fFilter: "نوشیدنی", fName: "دلستر", fPrice: 20000,fImage:"https://i.ibb.co/9hPMnPG/emtyDish.png" },
    { fFilter: "کیک", fName: "برایس", fPrice: 102000,fImage:"https://i.ibb.co/s6ZTQzS/cake1.png" },
    { fFilter: "کیک", fName: "توت فرنگی", fPrice: 40000,fImage:"https://i.ibb.co/Nn0wZDp/cake2.png" }

  ])

  const [dtOrder, setDtOrder] = useState([])
  const [orderSatus, setOrderSatus] = useState(false);
  const [count, setCount] = useState(1)



  const addObjectOrder = (item) => {
    setOrderSatus(true)
    const newObject = { orderName: item.fFilter + " " + item.fName, orderPrice: item.fPrice, orderCount:1, orderImg:item.fImage };
    setDtOrder([...dtOrder, newObject]);
  }

const handleChange = (e) => {
  const { name,value } = e.target;
  setState({ ...state, [name]: value })
}








  return (
    <>

      {
        dtCategoti.map((item) => (


          <FoodTemplate foodtype={item.cName}>
            {
              dtFood.filter(foodFilter => foodFilter.fFilter == item.cName).map((item) => (
                <React.Fragment>
                  <div className="cardFood">

                    <p>{item.fName}</p>
                    <img className='dvFoodImage' src={item.fImage} />

                    <p className='tCaption'>توضیحات</p>
                    <p className='caption'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    <div className='grid'>

                      <div className="right">
                        <p>120000</p>
                      </div>

                      <div className="left">

                        <div className="squar2" onClick={() => addObjectOrder(item)}>
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
          </FoodTemplate>


        ))
      }




      {orderSatus &&
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


                        {/* <p  className='inptNumber' />  */}
                        <input type="number" name='inptCount' value={state.inptCount} onChange={(e)=>handleChange(e)}/>


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


            {/* <button onClick={()=>{console.log(dtOrder[0].orderPrice[0]*orderCount[0])}}>Click</button> */}



          </div>
        </div>
      }






    </>
  )
}

export default Food