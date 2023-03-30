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

function App() {
  return (
    <section className='h-screen bg-cover bg-hero
    font-[Poppins] md:bg-top bg-center'>

      <Navbar />

      <Routes>

          <Route path="/" element={<Home/>}/>

          <Route path='/healthcare' element={<Healthcare/>}/>

          <Route path='/retail' element={<Retail/>}/>

          <Route path='/agriculture' element={<Agriculutre/>}/>

          <Route path='/conversational_ai' element={<Conversational_ai/>}/>

          <Route path='/security_privacy_ai' element={<Security_Privacy/>}/>

          <Route path='/about-us' element={<About/>}/>

          <Route path='/contact-us' element={<Contact/>}/>

          <Route path='/carrer' element={<Career/>}/>

          <Route path='/publications' element={<Publications/>}/>

          <Route path="/research_team" element={<Research_team/>}/>

      </Routes>
      
      <Footer/>
    </section>
  )
}

export default App;
