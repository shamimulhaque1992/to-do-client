import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddNotes from "./components/AddNotes/AddNotes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Notfound from "./components/Notfound/Notfound";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import UpdateNotes from "./components/UpdateNotes/UpdateNotes";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="todo/addnotes"
          element={
            <RequireAuth>
              <AddNotes></AddNotes>
            </RequireAuth>
          }
        ></Route>
        
        <Route path="/update/:id" element={<UpdateNotes></UpdateNotes>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
