import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function QuizEditNav() {

    const { cid, qid } = useParams();

    const pathname = useLocation().pathname.split("/");
    const active_loc = pathname[pathname.length - 1]


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <Link className={`nav-item nav-link ${(active_loc === "Details") ? 'active' : ''}`} to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/edit/Details`}>
                            <button className={`btn ${(active_loc === "Details") ? 'btn-primary' : 'btn-secondary'}`}>Details</button>
                        </Link>
                        <Link className={`nav-item nav-link ${(active_loc === "Questions") ? 'active' : ''}`} to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/edit/Questions`}>
                            <button className={`btn ${(active_loc === "Questions") ? 'btn-primary' : 'btn-secondary'}`}>Questions</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}