import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar_filter } from "./Components/Navbar.js";
import { NewsSection } from './Components/NewsSection.js';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState("health");
  return (
    <div className="App">
      <Navbar_filter setCategory={setCategory} />
      <NewsSection category={category}/>
    </div>
  );
}

export default App;
