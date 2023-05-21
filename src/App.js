


import { Route, Routes } from 'react-router-dom';

// Pages
import Home from "../src/Components/Pages/Home"


function App() {
  return (
    <>
      <Routes>
        <Route path='/restaurant' element={<Home />}></Route>
        
      </Routes>

    </>
  );
}

export default App;
