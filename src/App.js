import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbarfilter } from "./Components/Navbar.js";
import { NewsSection } from './Components/NewsSection.js';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState("health");
  return (
    <div className="App">
      <Navbarfilter setCategory={setCategory} />
      <NewsSection category={category}/>
    </div>
  );
}

export default App;
