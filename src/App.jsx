import "./App.scss";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import StartPage from "./pages/register/StartPage";
function App() {
  return (
    <BrowserRouter basename="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signIn" element={<StartPage />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
