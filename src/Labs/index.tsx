// Maxwell MacAvoy
import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <h3> Maxwell MacAvoy </h3>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
      <footer>
        <p>
          <a href="https://github.com/clfford00/kanbas-react-web-app" target="_blank" rel="noopener noreferrer">
            My GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
