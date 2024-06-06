import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import "./styles.css"; 
import { FaAlignJustify } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = lazy(() => import("./Dashboard"));
const Courses = lazy(() => import("./Courses"));

export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="h-100">
      <div className="d-flex h-100">
        <div className="d-none d-md-block">
          <KanbasNavigation />
        </div>
        <div className="flex-fill p-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/*" element={<Courses />} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
