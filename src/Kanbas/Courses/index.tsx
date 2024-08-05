import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import QuizzesEditor from "./Quizzes/Editor";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizEditor from "./Quizzes/QuizEditor"; // Ensure correct import
import AssignmentsEditor from "./Assignments/Editor";
import { Navigate } from "react-router";
import { FaAlignJustify } from "react-icons/fa6";
import Grades from "./Grades";
import PeopleTable from "./People/Table";
import PeopleDetails from "./People/details";
import CoursesNavigation from "./Navigation"; // Import CoursesNavigation

export default function Courses({ courses }: { courses: any[] }) {
    const { cid } = useParams<{ cid: string }>(); // Use useParams to get cid
    const course = courses.find(course => course._id === cid); // Ensure cid is correctly set
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name}
            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentsEditor />} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="People/:uid" element={<PeopleDetails fetchUsers={() => {}} />} />
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/New" element={<QuizzesEditor />} />
                        <Route path="Quizzes/:qid" element={<QuizDetails />} />
                        <Route path="Quizzes/:qid/edit" element={<QuizEditor />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
