import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import UserDetails from "./UserDetails";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/UserList" element={<UserList />} />
          <Route path="/UserDetails/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
