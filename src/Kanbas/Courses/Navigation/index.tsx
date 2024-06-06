import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

export default function CoursesNavigation() {
  const location = useLocation();
  const links = [
    { id: "home", label: "Home", path: "Home" },
    { id: "modules", label: "Modules", path: "Modules" },
    { id: "piazza", label: "Piazza", path: "Piazza" },
    { id: "zoom", label: "Zoom", path: "Zoom" },
    { id: "assignments", label: "Assignments", path: "Assignments" },
    { id: "quizzes", label: "Quizzes", path: "Quizzes" },
    { id: "grades", label: "Grades", path: "Grades" }
  ];

  return (
    <ul id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map(link => (
        <li key={link.id}>
          <Link
            to={link.path}
            className={`list-group-item ${
              location.pathname.includes(link.path) ? "active" : "text-danger"
            } border-0`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
