import Particle from "./components/Particle"
import Info from "./components/Info"
import Navbar from "./components/Navbar"
import Counter from "./components/Counter"
import Societies from "./components/Societies"
import About from "./components/About"
import Schedule from "./components/Schedule"
import Prizes from "./components/Prizes"
import FAQ from "./components/FAQ"
import Rules from "./components/Rules"
import Sponsors from "./components/Sponsors"
import Policy from "./components/Policy"
import "./App.css"

function App() {
  return (
    <div className="main">
      <Particle></Particle>
      <div className="text-wrapper orbitron">
        <Navbar></Navbar>
        <Info></Info>
        <Counter></Counter>
        <About></About>
        <Rules></Rules>
        <Prizes></Prizes>
        <FAQ></FAQ>
        <Schedule></Schedule>
        <Societies></Societies>
        <Sponsors></Sponsors>
        <Policy></Policy>
      </div>
    </div>
  );
}

export default App;
