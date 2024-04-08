import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Registerr from "./pages/register/Registerr";
import Events from "./components/events/Events";
import Clubs from "./components/clubs/Clubs";
import Messenger from "./pages/messenger/Messenger";
import Departments from "./components/departments/Departments";
import Mentor from "./components/mentor/Mentor";
import LobbyScreen from "./components/screens/Lobby";
import RoomPage from "./components/screens/Room";
import Jobs from "./components/jobs/Job";
import Deptlink from "./components/departments/Deptlink";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Link_dept from "./components";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Registerr />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Registerr />}
        />
        <Route path="/profile/:username" element={<Profile />} />
        <Route
          path="/events"
          element={!user ? <Navigate to="/" /> : <Events />}
        />
        <Route
          path="/clubs"
          element={!user ? <Navigate to="/" /> : <Clubs />}
        />
        <Route
          path="/departments"
          element={!user ? <Navigate to="/" /> : <Departments />}
        />
        <Route
          path="/messenger"
          element={!user ? <Navigate to="/" /> : <Messenger />}
        />

        <Route
          path="/mentor"
          element={!user ? <Navigate to="/" /> : <Mentor />}
        />
        <Route path="/jobs" element={!user ? <Navigate to="/" /> : <Job />} />
        <Route
          path="/room"
          element={!user ? <Navigate to="/" /> : <LobbyScreen />}
        />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route
          path="/link_Depts"
          element={!user ? <Navigate to="/" /> : <Deptlink />}
        />
      </Routes>
    </Router>
  );
}

export default App;
