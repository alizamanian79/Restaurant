


import React, { useState, useEffect } from 'react';
import "./Food.scss";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'


const initialValues = {
  inpt:""
};

function Food() {


const [state,setState]=useState(initialValues);
  



 

 
  const [dtOrder, setDtOrder] = useState([
    {orderName:"گوشت",orderPrice:245000,orderCount:1,orderImg:"https://i.ibb.co/0j9SzKq/Group-5.png"}
  ])


  const emty = "https://i.ibb.co/9hPMnPG/emtyDish.png";
  const [dtFood, setDtFood] = useState([

    {
      fTitile: "پیتزا", fitems: [

        { iFood: "گوشت", img: "https://i.ibb.co/0j9SzKq/Group-5.png" },
        { iFood: "مرغ", img: null },
        { iFood: "سبزیجات", img: "https://i.ibb.co/0j9SzKq/Group-5.png" },
        { iFood: "گوشت", img: null }


      ]
    },

    {
      fTitile: "سالاد", fitems: [

        { iFood: "سزار", img: "https://i.ibb.co/8MtfNcZ/salad.png" },
        { iFood: "فصل", img: "https://i.ibb.co/8MtfNcZ/salad.png" },
        { iFood: "اندونزی", img: null }


      ]
    },


    {
      fTitile: "دسر", fitems: [

        { iFood: "توت فرنگی", img: "https://i.ibb.co/s6ZTQzS/cake1.png" },
        { iFood: "برایس", img: "https://i.ibb.co/Nn0wZDp/cake2.png" },
        { iFood: "شکلاتی", img: null }


      ]
    },



    {
      fTitile: "کافی", fitems: [

        { iFood: "لاته", img: null },
        { iFood: "نسکافه", img: null },
        { iFood: "چایی", img: null },
        { iFood: "ایس کافی", img: null }


      ]
    }



  ])
  const initialFunFood = () => {

    checkImg();




  }
  const checkImg = () => {

    for (let i = 0; i < dtFood.length; i++) {

      // console.log(dtFood[i].fTitile)

      for (let j = 0; j < dtFood[i].fitems.length; j++) {
        //  console.log(dtFood[i].fitems[j].iFood)


        if (dtFood[i].fitems[j].img == null) {
          dtFood[i].fitems[j].img = "https://i.ibb.co/9hPMnPG/emtyDish.png"

        }

        console.log(dtFood[i].fitems[j].iFood)




      }


    }

  }




const handleChangeOrderCount = (evt) => {
var {name,value}=evt.target;
setState(
  {
    ...state,
    [name]:value
  }
)
}

const handleAddToOrder = (item) =>{

}



  useEffect(() => {

  }, [initialFunFood()])


  return (

    <>
      {dtFood.map((item) => (
        <div className='dvFood'>
          <div className='food'>



            <h4>{item.fTitile}</h4>




            <div className='scroll'>

              {
                item.fitems.map((x) => (


                  <div className="cardFood">

                    <p>{x.iFood}</p>

                    {
                      x.img == null ?


                        <img className='dvFoodImage' src={{ emty }} />

                        :
                        <img className='dvFoodImage' src={x.img} />

                    }




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

                        <div className="squar2" onClick={handleAddToOrder}>
                          افزودن
                          <FontAwesomeIcon icon={faPlus} style={{ margin: "0px 5px 0px 0px" }} />
                        </div>

                      </div>



                    </div>


                    {/* <button onClick={()=>{alert(x.img)}}>click</button> */}

                  </div>



                ))
              }





            </div>


          </div>
        </div>
      ))
      }


      <div className='dvOrder'>
        <div className="order">
          <h3>سفارش شما</h3>


          <table>

          
          { dtOrder.map((item)=>(
             <div className='rowStyle'>
              <p>{item.orderName}</p>

              <tr>
                <td>{item.orderPrice} تومان</td>


                <td>
                     <div className='dvCount'>

                       <div className="squar">
                        <FontAwesomeIcon icon={faPlus} style={{fontSize:"15px"}}  />
                        </div> 

                        
                        <input type="number" name="inpt" className='inptNumber' value={state.inpt} onChange={handleChangeOrderCount} />


                        <div className="squar">
                        <FontAwesomeIcon icon={faMinus} style={{fontSize:"15px"}} />
                        </div> 



                      </div>

                </td>



                <td><div className="dvImage"> <img  src={item.orderImg} /></div></td>
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