import Hero from './components/Hero';
import HotelCard from './components/HotelCard';
import PropRules from './components/PropRules';

function App() {
  return (
    <>
    <Hero/>
    <div className="flex justify-center">
    <div className="w-3/4">
    <HotelCard/>
    <PropRules/>
    </div>
    
    </div>
    
    </>
  );
}

export default App;
