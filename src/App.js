import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import { Routes,Route } from "react-router-dom";
import Healthcare from "./Components/Pages/Industries/Healthcare";
import Agriculutre from './Components/Pages/Industries/Agriculutre';
import Conversational_ai from './Components/Pages/Industries/Conversational_ai';
import Retail from './Components/Pages/Industries/Retail';
import Security_Privacy from './Components/Pages/Industries/Security_Privacy';
import About from './Components/Pages/Company/About';
import Contact from './Components/Pages/Company/Contact';
import Career from './Components/Pages/Company/Career';
import Publications from './Components/Pages/Research/Publications';
import Research_team from './Components/Pages/Research/Research_team'
import Product_Development from "./Components/Pages/Use_Cases/Product_Development";
import Data_Privacy from "./Components/Pages/Use_Cases/Data_Privacy";
import T_T_service from "./Components/Pages/Use_Cases/T_T_service";

function App() {  
  return (
    <section className='h-screen bg-cover bg-hero
    font-[Poppins] md:bg-top bg-center'>

      <Navbar />

      <Routes>

          <Route exact path="/" element={<Home/>}/>

          <Route exact path='/healthcare' element={<Healthcare/>}/>

          <Route exact path='/retail' element={<Retail/>}/>

          <Route exact path='/agriculture' element={<Agriculutre/>}/>

          <Route exact path='/conversational_ai' element={<Conversational_ai/>}/>

          <Route exact path='/security_privacy_ai' element={<Security_Privacy/>}/>

          <Route exact path='/about-us' element={<About/>}/>

          <Route exact path='/contact-us' element={<Contact/>}/>

          <Route exact path='/carrer' element={<Career/>}/>

          <Route exact path='/publications' element={<Home/>}/>

          <Route exact path="/research_team" element={<Home/>}/>

          <Route exact path="/product-development" element={<Product_Development/>}/>

          <Route exact path='/data-privacy' element={<Data_Privacy/>}/>

          <Route exact path='/t-t-services' element={<T_T_service/>}/>

      </Routes>

      <Footer/>
    </section>
  )
}

export default App;
