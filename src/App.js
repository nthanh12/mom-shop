import "./App.css";
import TopBar from "./common/TopBar";
import MidHeader from "./common/MidHeader";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Home } from "./page/Home";
import Cart from "./page/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <TopBar></TopBar>
        <MidHeader></MidHeader>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
