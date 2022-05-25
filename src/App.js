import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Register/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound";
import Footer from "./Pages/shared/Footer";
import Header from "./Pages/shared/Header";

function App() {
  return (
    
    <div className="App">
      <Header />
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

          {/* not found  */}
          <Route path="/*" element={<NotFound />} />
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
