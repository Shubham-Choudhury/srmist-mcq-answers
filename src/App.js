import "./App.css";
import AppBody from "./components/AppBody/AppBody";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import SecondSemester from "./pages/SecondSemester";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first-semester" element={<div>About</div>} />
          <Route path="/second-semester" element={<SecondSemester/>} />
          <Route path="/third-semester" element={<div>Contact</div>} />
          <Route path="/fourth-semester" element={<div>Blog</div>} />
        </Routes>
      </BrowserRouter>
      {/* <AppBody /> */}
    </>
  );
}

export default App;
