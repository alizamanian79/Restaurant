
import React, { useState, useEffect, useReducer } from 'react';
import { useCart } from "react-use-cart";
import { faMinus, faPlus, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Css Part
import "./Food.scss";
import "../General/General.css"
import "../Header/Header.scss"

// Import Components Part
import FoodRow from '../Food/FoodRow'


// import Json Components
import dataFood from './data';
import fdata from './data';

const initialState = {
  searchFood: ""
}

function Food() {

  const [state, setState] = useState(initialState)
  // UseCard Library
  const { addItem } = useCart();

  // Food Data
  const [dtFood, setDtFood] = useState(false)
  const [dtFoodState, setdtFoodState] = useState(false)
  const [dtCategoti, setdtCategoti] = useState([
    { cName: "پیتزا" },
    {cName:"پیش غذا"},
    { cName: "سالاد" },
    { cName: "دسر" },
    { cName: "نوشیدنی" }
  ])


  // Bar Filter
  const [dtFilters, setdtFilters] = useState([
    { filterName: "همه" },
    { filterName: "پرطرفدارها" },
    { filterName: "پیشنهاد سراشپز" }
  ])
  const filters = dtFilters.map((item, index) => {
    return (
      <React.Fragment>
        <li className='filter' onClick={() => { handleFilter(index, item) }}>{item.filterName}</li>
      </React.Fragment>
    )

  })
  const handleFilter = (index, item) => {

    var allFilter = document.querySelectorAll(".filter");
    allFilter[index].classList.add("filterActive");
    for (let i = 0; i < allFilter.length; i++) {
      if (i != index) {
        allFilter[i].classList.remove("filterActive")
      }
    }

    const arr = []
    switch (index) {

      case 0:
        setDtFood(fdata)
        break;

      case 1:
        for (let i = 0; i < fdata.length; i++) {
          if (fdata[i].fRank > 85) {
            arr.push(fdata[i])
          }
        }
        setDtFood(arr)
        break;


      case 2:
        for (let i = 0; i < fdata.length; i++) {
          if (fdata[i].pishnahadSarAspaz == true) {
            arr.push(fdata[i])
          }
        }
        setDtFood(arr)
        break;

      default:
        break;
    }


  }





  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    })
  }

  const [searchInput, setSearchInput] = useState('');








  useEffect(() => {
    var allFilter = document.querySelectorAll(".filter");
    allFilter[0].classList.add("filterActive");
    handleFilter(0);



  }, [])

  return (
    <>

      <div className='dvHeader'>

       <p className='welcome'>به رستوران ما خوش امدید</p>

        <div className='dvSearch'>

          <input type="text" className='search'
            name='searchFood' value={state.searchFood || ""}
            onChange={(e) => handleChangeInputs(e)}
            placeholder='جستجو کنید . . .' />

        </div>

        <div className='dvFilter'>

          <ul>
            {filters}
          </ul>

        </div>

      </div>



      {dtCategoti.map((x) => (
        <>


          {dtFood &&
            <div className='dvFood'>
              <div className='food'>
                <h4>{x.cName}</h4>
                <div className='scroll'>
                  {dtFood.filter(f => f.fFilter == x.cName).filter((item) => {
                    return state.searchFood.toLocaleLowerCase() === ''
                      ? item
                      : item.fName.toLocaleLowerCase().includes(state.searchFood)

                  }).map((item, index) => (

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
                </div>
              </div>
            </div>
          }


        </>
      ))
      }








    </>
  )
}

export default Food