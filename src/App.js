import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/shared/Footer";
import Header from "./Pages/shared/Header";

function App() {
  return (
    
    <div className="App">
      <Header />
       <Routes>
          <Route path="/" element={<Home/>} />
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
