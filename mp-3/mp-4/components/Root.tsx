import { Route, Routes } from 'react-router-dom';
import Header from "./Header";
import '/style.css'
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Exp from "./Exp";
import Edu from "./Edu";
import Int from "./Int";
import Proj from "./Proj"

export default function Root() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <div className="content-wrapper">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Edu />} />
            <Route path="/experience" element={<Exp />} />
            <Route path="/interests" element={<Int />} />
            <Route path="/projects" element={<Proj />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}