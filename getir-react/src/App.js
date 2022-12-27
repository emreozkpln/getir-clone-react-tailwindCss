import Header from "../src/components/Header.js"
import HeroSection from "../src/components/HeroSection.js"
import Categories from "../src/components/Categories.js"
import Campaign from "../src/components/Campaign.js"
import Favorites from "../src/components/Favorites.js"
import MobileApp from "../src/components/MobileApp.js"
import Cards from "../src/components/Cards.js"
import Footer from "../src/components/Footer.js"
import Header2 from "./components/Header2.js"

function App() {
  return (
    <div >

     <Header/>
     <Header2/>
     <HeroSection/>
     <Categories/>
     <Campaign/>
     <Favorites/>
     <MobileApp/>
     <Cards/>
     <Footer/>

    </div>
  );
}

export default App;
