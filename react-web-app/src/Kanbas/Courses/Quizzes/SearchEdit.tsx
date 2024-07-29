import { FaPlus } from "react-icons/fa"
import { IoEllipsisVertical } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { FaSortAmountDown } from "react-icons/fa";




export default function SearchEdit({ role, filterQuizzesByName }: { role: any; filterQuizzesByName: (quiz: string) => void }) {

    const navigate = useNavigate();

    const { cid } = useParams();

    return (
        <div className="mb-4">

            <div className="dropdown d-inline me-2 float-end">
                <button id="wd-publish-all-btn" className="btn btn btn-secondary dropdown-toggle"
                    type="button" data-bs-toggle="dropdown">
                    <IoEllipsisVertical className="me-2" />
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <button className="dropdown-item">
                            <FaSortAmountDown className="me-2" />
                            Sort
                        </button>
                    </li>
                </ul>
            </div>
            {(role === "FACULTY" || role === "ADMIN") && (
                <button onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/add/Details`)} className="float-end btn btn-danger me-1">
                    <FaPlus className="me-2" />
                    Add Quiz
                </button>
            )}

            <input onChange={(e) => filterQuizzesByName(e.target.value)} placeholder="Search Quizzes"
                className="form-control float-start w-25 me-2" />
        </div>)
}