import { IoEllipsisVertical } from "react-icons/io5";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';
import { useNavigate, useParams } from "react-router";
import { MdModeEdit } from "react-icons/md";



import { useState } from "react";
export default function QuizControlButtons({ quiz, updateQuiz, deleteQuiz, role }: {
    quiz: any;
    updateQuiz: (quiz: any) => void;
    deleteQuiz: (quizID: string) => void;
    role: string
}) {
    const navigate = useNavigate();
    const { cid } = useParams();
    const [tempQuiz, setTempQuiz] = useState(quiz);

    const updatePublish = () => {
        const updatedQuiz = { ...tempQuiz, published: !tempQuiz.published }
        updateQuiz(updatedQuiz);
        setTempQuiz(updatedQuiz);
    }
    const handleClick = () => {
        if (role === 'FACULTY' || role === 'ADMIN') {
            updatePublish();
        }
    };
    return (
        <div className="float-end">
            <button className="btn" onClick={handleClick}>
                {tempQuiz.published ? (
                    <span className="me-1 position-relative">
                        <FaCheckCircle style={{ top: "2px" }}
                            className="text-success me-1 position-absolute fs-5" />
                        <FaCircle className="text-white me-1 fs-6" />
                    </span>
                ) : (
                    <span className="me-1 position-relative">
                        <MdDoNotDisturbAlt style={{ top: "2px" }}
                            className="text-danger me-1 position-absolute fs-5" />
                        <FaCircle className="text-white me-1 fs-6" />
                    </span>
                )
                }
            </button>
            {(role === "FACULTY" || role === "ADMIN") && (
                <div className="dropdown d-inline me-2 float-end">
                    <button id="wd-publish-all-btn" className="btn btn dropdown-toggle"
                        type="button" data-bs-toggle="dropdown">
                        <IoEllipsisVertical className="fs-4" />
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <button onClick={() => deleteQuiz(quiz._id)} className="dropdown-item">
                                <MdDelete className="me-2 text-danger" />
                                Delete
                            </button>
                            <button onClick={() => navigate(`${quiz._id}/edit`)} className="dropdown-item">
                                <MdModeEdit className="me-2 text-secondary" />
                                Edit
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}