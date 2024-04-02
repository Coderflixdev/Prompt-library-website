import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Prompt from "./Pages/Prompt";



  const App = () => { 
    

  return (
   <>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/prompt/:id" element={<Prompt/>}></Route>
   </Routes>
   <Footer/>
   </>
  )
}

export default App;

