import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment, addAssignment } from "./reducer";

export default function AssignmentEditor() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { aid, cid } = useParams();
    const { assignments } = useSelector(
        (state: any) => state.assignmentsReducer
    );
    const [assignment, setAssignment] = useState<any>({
        title: "New Assignment",
        description: "Assignment Description",
        course: cid,
        points: "",
        due_date: "",
        available_from: "",
        available_until: ""
    });

    const saveOrUpdateAssignment = () => {
        if (aid === "New") {
            dispatch(addAssignment(assignment));
        } else {
            dispatch(updateAssignment(assignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    useEffect(() => {
        if (aid !== "New") {
            const a = assignments.find((a: any) => a._id === aid);
            if (a) {
                setAssignment({
                    ...a,
                    due_date: a.due_date ? new Date(a.due_date).toISOString().slice(0, 16) : "",
                    available_from: a.available_from ? new Date(a.available_from).toISOString().slice(0, 16) : "",
                    available_until: a.available_until ? new Date(a.available_until).toISOString().slice(0, 16) : ""
                });
            }
        }
    }, [aid, assignments]);

    return (
        <div id="wd-assignments-editor">
            <div className="row">
                <div className="col">
                    <label htmlFor="wd-name">Assignment Name</label>
                    <input
                        id="wd-name"
                        value={assignment.title}
                        className="form-control"
                        onChange={(e) =>
                            setAssignment({ ...assignment, title: e.target.value })
                        }
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <label htmlFor="wd-description">Description</label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        value={assignment.description}
                        onChange={(e) =>
                            setAssignment({ ...assignment, description: e.target.value })
                        }
                    />
                </div>
            </div>
            <div className="row mt-3">
                <label htmlFor="wd-points" className="col text-end">Points</label>
                <input
                    id="wd-points"
                    value={assignment.points}
                    className="form-control col"
                    onChange={(e) =>
                        setAssignment({ ...assignment, points: e.target.value })
                    }
                />
            </div>
            <div className="row mt-3">
                <label htmlFor="due_date" className="col text-end">Due Date</label>
                <input
                    type="datetime-local"
                    id="due_date"
                    value={assignment.due_date}
                    className="form-control col"
                    onChange={(e) =>
                        setAssignment({ ...assignment, due_date: e.target.value })
                    }
                />
            </div>
            <div className="row mt-3">
                <label htmlFor="available_from" className="col text-end">Available From</label>
                <input
                    type="datetime-local"
                    id="available_from"
                    value={assignment.available_from}
                    className="form-control col"
                    onChange={(e) =>
                        setAssignment({ ...assignment, available_from: e.target.value })
                    }
                />
            </div>
            <div className="row mt-3">
                <label htmlFor="available_until" className="col text-end">Available Until</label>
                <input
                    type="datetime-local"
                    id="available_until"
                    value={assignment.available_until}
                    className="form-control col"
                    onChange={(e) =>
                        setAssignment({ ...assignment, available_until: e.target.value })
                    }
                />
            </div>
            <div className="row mt-3">
                <div className="col">
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <button className="btn btn-secondary float-end me-2">Cancel</button>
                    </Link>
                    <button
                        className="btn btn-primary float-end me-2"
                        onClick={saveOrUpdateAssignment}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
