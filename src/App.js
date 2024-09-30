import './App.css';
import TopBar from './common/TopBar';
import MidHeader from './common/MidHeader';
import Header from './common/Header';
import Footer from './common/Footer';
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <TopBar></TopBar>
        <MidHeader></MidHeader>
        <Header></Header>
        <Footer></Footer> 
      </Router>
    </div>
  );
}

export default App;
