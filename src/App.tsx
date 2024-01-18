import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import Gallery from "./components/Gallery";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <Routes>
          <Route path="/" element={<Gallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
