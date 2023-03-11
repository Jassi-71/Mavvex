import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <section className='h-screen bg-cover bg-hero
    font-[Poppins] md:bg-top bg-center'>

      <Navbar/>

        <div className="flex flex-col justify-center text-center items-center h-3/4">
          <h2 className="text-black text-2xl font-medium ">Mavvex</h2>
          <h1 className="md:text-5xl text-3xl text-black font-semibold py-5">
            AI Website 
          </h1>
          
        </div>
    </section>
  )
}

export default App;
