import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewTasks from "./components/ViewTasks";
import AddTask from "./components/AddTask";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/view" element={<ViewTasks />} />
      </Routes>
    </Router>
  );
};

export default App;
