


import React, { useState, useEffect } from 'react';
import "./Food.scss";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'


function Food() {

  const [first, setfirst] = useState(0)

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


  const initialFunFood = () =>{

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
                        <div className="squar">
                        <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <p className='inptNumber'>10</p>
                        <div className="squar2">
                        <FontAwesomeIcon icon={faMinus} />
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


    </>


  )
}

export default Food