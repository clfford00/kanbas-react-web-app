import { IoMdMore } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as client from "./client";
import { deleteQuiz } from "./reducer";

export default function QuizContextDropdown({ qid }: { qid: string }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cid } = useParams();

    const removeQuiz = async (qid: string) => {
        const status = await client.deleteQuiz(qid);
        dispatch(deleteQuiz(qid));
    };

    const handleEdit = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
    };

    return (
        <div className="dropdown d-inline me-1 float-end">
            <button
                id="wd-add-module-btn"
                className="btn btn-lg btn-light bg-transparent border-0 me-1"
                type="button"
                data-bs-toggle="dropdown"
            >
                <IoMdMore className="position-relative fs-4" />
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button
                        id="wd-edit-quiz"
                        className="dropdown-item"
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                </li>
                <li>
                    <button
                        id="wd-delete-quiz"
                        className="dropdown-item"
                        onClick={() => removeQuiz(qid)}
                    >
                        Delete
                    </button>
                </li>
                <li>
                    <button id="wd-publish-quiz" className="dropdown-item">
                        Publish
                    </button>
                </li>
                <li>
                    <button id="wd-copy-quiz" className="dropdown-item">
                        Copy
                    </button>
                </li>
                <li>
                    <button id="wd-sort-quiz" className="dropdown-item">
                        Sort
                    </button>
                </li>
            </ul>
        </div>
    );
}
