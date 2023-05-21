


import { Route, Routes } from 'react-router-dom';

// Pages
import Home from "../src/Components/Pages/Home"
import FormFood from "../src/Components/Pages/FoodForm"

function App() {
  return (
    <>
      <Routes>
        <Route path='/restaurant' element={<Home />}></Route>
        <Route path='/restaurant/formfood' element={<FormFood />}></Route>
      </Routes>

    </>
  );
}

export default App;
