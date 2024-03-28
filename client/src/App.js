import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Registerr from "./pages/register/Registerr";
import Events from "./components/events/Events";
import Clubs from "./components/clubs/Clubs";
import Departments from "./components/departments/Departments";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
      <Route path="/" element={user ? <Home /> : <Registerr />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Registerr />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/events" element={!user ? <Navigate to="/" /> : <Events />} />
        <Route path="/clubs" element={!user ? <Navigate to="/" /> : <Clubs />} />
        <Route path="/departments" element={!user ? <Navigate to="/" /> : <Departments />} />

     </Routes>
    </Router>
  );
}

export default App;
