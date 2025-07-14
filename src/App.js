import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import HomePage from "./components/HomePage";
import CmsPage from "./components/CmsPage";

function App() {
  return (
   <Router>
    <Routes>
      <Route path= "/" element={<HomePage/>}/>
      <Route path= "/cms" element={<CmsPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
