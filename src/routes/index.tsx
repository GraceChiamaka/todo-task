import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tasks } from "../pages/Tasks";
import { Homepage } from "../pages/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
};
