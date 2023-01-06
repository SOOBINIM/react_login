import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Board from "./pages/Board";
import DetailBoard from "./pages/DetailBoard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/board/:tag" element={<Board />} />
      <Route path="/board/:tag/:no" element={<DetailBoard />} />
    </Routes>
  )
}

export default App;

