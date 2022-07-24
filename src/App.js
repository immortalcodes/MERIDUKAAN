import "./App.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Products';
import{BrowserRouter as Router,Switch,Route, Routes} from'react-router-dom'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <switch>
          <Routes>
            <Route path="/products" exact element={<Products />} />
          </Routes>
        </switch>

        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
