import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function QuizDetailsNav() {

    const { cid, qid } = useParams();

    const pathname = useLocation().pathname.split("/");
    const active_loc = pathname[6];


    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-nav w-100 row">
                <div className="col"></div>
                <div className="col row">
                    <Link className={`btn lg col nav-item nav-link ${(active_loc === "Details") ? 'active' : ''}`} to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Details`}>
                        <button className={`btn ${(active_loc === "Details") ? 'btn-primary' : 'btn-secondary'}`}>Quiz Info</button>
                    </Link>
                    <Link className={`btn col nav-item nav-link ${(active_loc === "edit") ? 'active' : ''}`} to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/edit`}>
                        <button className={`btn ${(active_loc === "edit") ? 'btn-primary' : 'btn-secondary'}`}>Edit</button>
                    </Link>
                    <Link className={`btn col nav-item nav-link ${(active_loc === 'active') ? 'active' : ''}`} to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/active`}>
                        <button className={`btn ${(active_loc === "active") ? 'btn-primary' : 'btn-secondary'}`}>Preview Quiz</button>
                    </Link>
                </div>
                <div className="col"></div>
            </div>
        </nav>
    );
}