import { Routes,Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Blogs from "./Pages/Blogs/Blogs";
import AddProducts from "./Pages/DashBoard/AddProducts";
import AddReview from "./Pages/DashBoard/AddReview";
import Admin from "./Pages/DashBoard/Admin";
import AllOrders from "./Pages/DashBoard/AllOrders";
import DashBoard from "./Pages/DashBoard/DashBoard";
import EditProfile from "./Pages/DashBoard/EditProfile";
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
            <Route path="admin" element={<Admin />} />
            <Route path="allorder" element={<AllOrders />} />
            <Route path="addproducts" element={<AddProducts />} />
            
          </Route>
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/portfolio" element={<MyPortfolio/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

          {/* not found  */}
          <Route path="/*" element={<NotFound />} />
       </Routes>
       <Footer />
       <ToastContainer />
    </div>


  );
}

export default App;


// after deploy firebase live website error problem solve:
// app.use(cors({ origin : "YOUR_FIREBASE_LIVE_LINK" }))
