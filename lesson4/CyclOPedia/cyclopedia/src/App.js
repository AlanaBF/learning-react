import './App.css';
import Header from "./Components/Layout/Header"
import Footer from "./Components/Layout/Footer"
import CyclopediaClassBased from './Components/CyclopediaClassPage';
function App() {
  return (
    <div className="App">
     <Header/>
     <div className='container'>
     <div className='col-6'>
     <span className='h1 text-warning text-center'>Class Component</span>
      <CyclopediaClassBased/>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
