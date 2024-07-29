import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function QuizCreateNav() {

    const { cid} = useParams();

    const pathname = useLocation().pathname.split("/");
    const active_loc = pathname[pathname.length - 1]


    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-nav w-100 row">
                <div className="col"></div>
                <div className="col row">
                    <Link className={`btn lg col nav-item nav-link ${(active_loc === "Details") ? 'active' : ''}`} to={`/Kanbas/Courses/${cid}/Quizzes/add/Details`}>
                        <button className={`btn ${(active_loc === "Details") ? 'btn-primary' : 'btn-secondary'}`}>Details</button>
                    </Link>
                    <Link className={`btn col nav-item nav-link ${(active_loc === "Questions") ? 'active' : ''}`} to={`/Kanbas/Courses/${cid}/Quizzes/add/Questions`}>
                        <button className={`btn ${(active_loc === "Questions") ? 'btn-primary' : 'btn-secondary'}`}>Questions</button>
                    </Link>
                </div>
                <div className="col"></div>
            </div>
        </nav>
    );
}