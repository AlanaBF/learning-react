import "./App.css";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Counter from "./Components/Counter";
import MoviePage from "./MovieComponents/MoviePage";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <div className=" p-2 m-2 row text-center">
          <Counter />
          <MoviePage/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
