import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navigation.css";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0">
      <a id="wd-neu-link" target="_blank" rel="noopener noreferrer"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NE_Logo.png" width="75px" alt="Northeastern University Logo" />
        <span>Northeastern</span>
      </a>
      <NavLink
        to="/Kanbas/Account"
        className={({ isActive }) =>
          `list-group-item text-white bg-black text-center border-0 account ${isActive ? 'active' : ''}`
        }>
        <FaRegCircleUser className="fs-1 nav-icon" /><br />
        Account
      </NavLink>
      <NavLink
        to="/Kanbas/Dashboard"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${isActive ? 'active' : ''}`
        }>
        <AiOutlineDashboard className="fs-1 nav-icon" /><br />
        Dashboard
      </NavLink>
      <NavLink
        to="/Kanbas/Courses"
        className={({ isActive }) =>
          `list-group-item text-white bg-black text-center border-0 ${isActive ? 'active' : ''}`
        }>
        <LiaBookSolid className="fs-1 nav-icon" /><br />
        Courses
      </NavLink>
      <NavLink
        to="/Kanbas/Calendar"
        className={({ isActive }) =>
          `list-group-item text-white bg-black text-center border-0 ${isActive ? 'active' : ''}`
        }>
        <IoCalendarOutline className="fs-1 nav-icon" /><br />
        Calendar
      </NavLink>
      <NavLink
        to="/Kanbas/Inbox"
        className={({ isActive }) =>
          `list-group-item text-white bg-black text-center border-0 ${isActive ? 'active' : ''}`
        }>
        <FaInbox className="fs-1 nav-icon" /><br />
        Inbox
      </NavLink>
      <NavLink
        to="/Kanbas/Settings"
        className={({ isActive }) =>
          `list-group-item text-white bg-black text-center border-0 ${isActive ? 'active' : ''}`
        }>
        <LiaCogSolid className="fs-1 nav-icon" /><br />
        Settings
      </NavLink>
    </div>
  );
}
