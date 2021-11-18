import "./style/App.css";
import Home from "./routes/home";
import Navbar from "./components/navbar";
import About from "./routes/about";
import DisplayWindow from "./routes/display-window";
import NotFound from './routes/not-found'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/vetrina' element={<DisplayWindow />}/>
        <Route path='*' exact={true} element={<NotFound />}/>
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
