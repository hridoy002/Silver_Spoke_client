import { Routes,Route } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import AddReview from "./Pages/DashBoard/AddReview";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyOrder from "./Pages/DashBoard/MyOrder";
import MyProfile from "./Pages/DashBoard/MyProfile";
import Home from "./Pages/Home/Home";
import Purchage from "./Pages/Home/Purchage";
import Login from "./Pages/Login/Register/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth";
import MyPortfolio from "./Pages/MyPortfolio";
import NotFound from "./Pages/NotFound";
import Footer from "./Pages/shared/Footer";
import Header from "./Pages/shared/Header";

function App() {
  return (
    
    <div className="App">
      <Header />
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/purchase/:toolId" element={<RequireAuth> <Purchage /> </RequireAuth>} />

          <Route path="/dashboard" element={<RequireAuth> <DashBoard /> </RequireAuth>} 
          >
            <Route index element={<MyOrder />} />
            <Route path="addReview" element={<AddReview />} />
            <Route path="myprofile" element={<MyProfile  />} />
          </Route>
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/portfolio" element={<MyPortfolio/>} />
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
