import logo from "./logo.svg";
import "./App.css";
import Header from "./components/common/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Assignments,
  Classes,
  Lessons,
  Libraries,
  Settings,
  Home,
} from "./pages/Pages";

function App() {
  return (
    <>
      <Header data-testid="header" logo={logo} />
      <div className="Content">
        <Routes>
          <Route path="/classes" element={<Classes />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
