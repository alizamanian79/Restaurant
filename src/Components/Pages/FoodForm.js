


import React, { useState, useEffect } from 'react'


const initialState = {
  mfFilter: "",
  mfName: "",
  msize: "",
  mprice: "",
  mfImage: "",
  mpishnahadSarAspaz: "",
  mRank: ""
}

function FoodForm() {

  const [state, setState] = useState(initialState)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <>


      <select name="mfFilter" value={state.mfFilter || ""} id="" onChange={(e) => handleChange(e)}>
        <option value="پیتزا">پیتزا</option>
        <option value="پیش غذا">پیش غذا</option>
        <option value="سالاد">سالاد</option>
        <option value="دسر">دسر</option>
        <option value="نوشیدنی">نوشیدنی</option>
      </select>

      <br />
      فیلتر : <input type="text" name='mfName' onChange={(e) => handleChange(e)} />
      <br />
      نام غذا <input type="text" name='mfName' onChange={(e) => handleChange(e)} />


      <br />

      سایز <select name="msize" value={state.msize || ""} id="" onChange={(e) => handleChange(e)}>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>


      نام غذا <input type="text" name='mfName' onChange={(e) => handleChange(e)} />
      نام غذا <input type="text" name='mfName' onChange={(e) => handleChange(e)} />

      <button onClick={() => alert(state.mfFilter)}>click</button>
    </>
  )
}

export default FoodForm