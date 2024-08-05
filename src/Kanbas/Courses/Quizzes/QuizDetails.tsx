import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Quiz } from './types';
import './QuizDetails.css';

const QuizDetails: React.FC = () => {
    const { qid } = useParams<{ qid: string }>();
    const navigate = useNavigate();

    const quiz = useSelector((state: any) =>
        state.quizzesReducer.quizzes.find((q: Quiz) => q._id === qid)
    );

    if (!quiz) {
        return <div>Quiz not found</div>;
    }

    const handleEdit = () => {
        navigate(`/Kanbas/Courses/${quiz.course}/Quizzes/${qid}/edit`);
    };

    return (
        <div className="quiz-details container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">{quiz.name}</h2>
                <div>
                    <button className="btn btn-outline-secondary me-2">Preview</button>
                    <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p><strong>Quiz Type:</strong> {quiz.quizType || 'Graded Quiz'}</p>
                    <p><strong>Points:</strong> {quiz.points}</p>
                    <p><strong>Assignment Group:</strong> {quiz.assignmentGroup || 'Quizzes'}</p>
                    <p><strong>Shuffle Answers:</strong> {quiz.shuffleAnswers ? 'Yes' : 'No'}</p>
                    <p><strong>Time Limit:</strong> {quiz.timeLimit || '20 Minutes'}</p>
                    <p><strong>Multiple Attempts:</strong> {quiz.multipleAttempts ? 'Yes' : 'No'}</p>
                    {quiz.multipleAttempts && <p><strong>How Many Attempts:</strong> {quiz.attempts || '1'}</p>}
                    <p><strong>Show Correct Answers:</strong> {quiz.showCorrectAnswers}</p>
                    <p><strong>Access Code:</strong> {quiz.accessCode || 'None'}</p>
                    <p><strong>One Question at a Time:</strong> {quiz.oneQuestionAtATime ? 'Yes' : 'No'}</p>
                    <p><strong>Webcam Required:</strong> {quiz.webcamRequired ? 'Yes' : 'No'}</p>
                    <p><strong>Lock Questions After Answering:</strong> {quiz.lockQuestionsAfterAnswering ? 'Yes' : 'No'}</p>
                </div>
                <div className="col-md-6">
                    <p><strong>Due Date:</strong> {quiz.dueDate}</p>
                    <p><strong>Available Date:</strong> {quiz.availableDate}</p>
                    <p><strong>Until Date:</strong> {quiz.untilDate}</p>
                </div>
            </div>
        </div>
    );
}

export default QuizDetails;
