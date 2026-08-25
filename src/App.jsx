import Footer from "./Components/Footer/footer"
import Header from "./Components/Header/header"
import About from "./Pages/About/about"
import Bottom from "./Pages/Bottom/bottom"
import CarCategory from "./Pages/CarCategory/category"
import Charger from "./Pages/Charger/charger"
import ChargingCategory from "./Pages/ChargingService/charging"
import Hero from "./Pages/Hero/hero"
import Location from "./Pages/Location/location"
import Offer from "./Pages/Offers/offer"

function App() {

  return (
    <>
    <Header/>   
    <main>
    <Hero />
    <About />
    <CarCategory />
    <Offer />
    <Location />
    <Charger />
    <ChargingCategory />
    </main>
    <Footer />
    <Bottom />
    </>
  )
}

export default App;
