import "./App.css";
// import "./assets/css/style.css";
// import "./assets/css/custom.css";
// import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/footer/Footer";
// import Login from "./components/login/Login";
// import Register from "./components/register/Register";
// import Forgot from "./components/forgot/Forgot";
// import Products from "./components/products/Products";
// import ChatApp  from "./components/ChatAPP/ChatApp"; 
// import Join from "./components/Join/Join"
// import User from "./components/User";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
import CustomizedTables from "./components/Crud/CustomizedTables";
import AddUser from "./components/Crud/AddUser";
import EditUser from "./components/Crud/EditUser";
import Header from "./components/Header/Header";
import Footer  from "./components/Footer/Footer";
import ToDoList  from "./components/ToDoList/ToDoList";

function App() {
  return (
   <>
   <Router>
       <Header/>
       <Routes>
         <Route path="/" element={<ToDoList/> } />
         <Route path="/addUser" element={<AddUser/>} />
       </Routes> 
     
    {/* <User/> */}
     <Footer/>
     </Router>
   </>
  );
}

export default App;














 
