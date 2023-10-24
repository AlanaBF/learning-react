import "./App.css";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import CyclopediaClassPage from "./Components/CyclopediaClassPage";
import CyclopediaFuncPage from "./Components/CyclopediaFuncPage";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row text-white">
          <div className="col-6">
            <span className="h1 text-warning text-center">Class Component</span>
            <CyclopediaClassPage />
          </div>

          <div className="col-6">
            <span className="h1 text-warning text-center">Functional Component</span>
            <CyclopediaFuncPage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
