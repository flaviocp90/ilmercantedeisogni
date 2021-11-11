import "./style/App.css";
import Home from "./routes/home";
import Navbar from "./components/navbar";
import About from "./routes/about";
import DisplayWindow from "./routes/display-window";
import NotFound from './routes/not-found'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/vetrina' element={<DisplayWindow />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>

    </Router>
  );
}

export default App;
