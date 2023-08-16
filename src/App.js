
import Accessories from "./components/Accessories";
import Apex from "./components/Apex";
import Components from "./components/Components";
import Contact from "./components/Contact";
import Downloads from "./components/Downloads";
import Engine from "./components/Engine";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Nytro from "./components/Nytro";
import Recalls from "./components/Recalls";


function App() {
  return (
    <div>
      <NavBar />
      <Components />
      <Apex />
      <Nytro />
      <Accessories />
      <Engine />
      <Downloads />
      <FAQ />
      <Recalls />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
