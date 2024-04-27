import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import HeroPage from "./pages/homepage/HeroPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename="">
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
      </Routes>
      {/* <footer>
      <Footer />
    </footer> */}
    </BrowserRouter>
  );
}

export default App;
