import GradedQuiz from "./GradedQuiz";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function QuizPreview({
    quiz,
    submission,
    role
}: {
    quiz: any;
    submission: any;
    role: string
}) {
    const { cid } = useParams();
    const handleButtonClick = () => {
        // Handle button click action here
    };
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const getDueFormat = (date: any) => {
        const due = new Date(date);
        const month = months[due.getMonth()];
        const day = due.getDate();
        return (
            <span>
                {month} {day} at 11:59pm
            </span>
        );
    };
    return (
        <div>
            <div>
                <h1><b>{quiz.title}</b></h1>
                <br></br>
                <div className="mb-3 row">
                    <div className="col-sm-3 col-form-label text-end">
                        <h5><b>Quiz Type</b></h5>
                    </div>
                    <div className="col-sm-9 col-form-label">
                        <h5>{quiz.type}</h5>
                    </div>
                    <div className="col-sm-3 col-form-label text-end">
                        <h5><b>Points</b></h5>
                    </div>
                    <div className="col-sm-9 col-form-label">
                        <h5>{quiz.points}</h5>
                    </div>
                    <div className="col-sm-3 col-form-label text-end">
                        <h5><b>Assignment Group</b></h5>
                    </div>
                    <div className="col-sm-9 col-form-label">
                        <h5>{quiz.assignment_group}</h5>
                    </div>
                    <div className="col-sm-3 col-form-label text-end">
                        <h5><b>Shuffle Answers</b></h5>
                    </div>
                    <div className="col-sm-9 col-form-label">
                        {quiz.shuffle_answers ? <h5>Yes</h5> : <h5>No</h5>}
                    </div>
                    <div className="col-sm-3 col-form-label text-end">
                        <h5><b>Time Limit</b></h5>
                    </div>
                    <div className="col-sm-9 col-form-label">
                        <h5>{quiz.time_limit} Minutes</h5>
                    </div>
                    <div className="col-sm-3 col-form-label text-end">
                        <h5><b>Multiple Attempts</b></h5>
                    </div>
                    <div className="col-sm-9 col-form-label">
                        {quiz.multiple_attempts ? <h5>Yes</h5> : <h5>No</h5>}
                    </div>
                    {quiz.multiple_attempts &&
                        <div><div className="col-sm-3 col-form-label text-end">
                            <h5><b>quiz.num_attempts</b></h5>
                        </div>
                            <div className="col-sm-9 col-form-label">
                                <h5>{quiz.num_attempts}</h5>
                            </div>
                        </div>}
                    <div className="col-sm-3 col-form-label text-end">
                        <h5><b>Show Correct Answers</b></h5>
                    </div>
                    <div className="col-sm-9 col-form-label">
                        {quiz.multiple_attempts ? <h5>Yes</h5> : <h5>No</h5>}
                    </div>
                    <div className="col-sm-3 col-form-label text-end">
                        <h5><b>One Question at a Time</b></h5>
                    </div>
                    <div className="col-sm-9 col-form-label">
                        {quiz.multiple_attempts ? <h5>Yes</h5> : <h5>No</h5>}
                    </div>
                    <div className="col-sm-3 col-form-label text-end">
                        <h5><b>Requires respondus LockDown Browser</b></h5>
                    </div>
                    <div className="col-sm-9 col-form-label">
                        <h5>No</h5>
                    </div>
                    <div className="col-sm-3 col-form-label text-end">
                        <h5><b>Webcam Required</b></h5>
                    </div>
                    <div className="col-sm-9 col-form-label">
                        {quiz.webcam ? <h5>Yes</h5> : <h5>No</h5>}
                    </div>
                </div>
            </div>
            <br>
            </br>
            <div className="mb-3 row">
                <div className="col-sm-3 col-form-label">
                    <h5><b>Due</b></h5>
                </div>
                <div className="col-sm-3 col-form-label ">
                    <h5><b>For</b></h5>
                </div>
                <div className="col-sm-3 col-form-label ">
                    <h5><b>Available from</b></h5>
                </div>
                <div className="col-sm-3 col-form-label">
                    <h5><b>Until</b></h5>
                </div>
                <hr></hr>
                <div className="col-sm-3 col-form-label ">
                    {getDueFormat(quiz.due)}
                </div>
                <div className="col-sm-3 col-form-label ">
                    {quiz.assign}
                </div>
                <div className="col-sm-3 col-form-label ">
                    {getDueFormat(quiz.available)}
                </div>
                <div className="col-sm-3 col-form-label">
                    {getDueFormat(quiz.until)}
                </div>
            </div>
            <hr></hr>
            <br>
            </br>
            <br>
            </br>
            {
                role === "STUDENT" || role === "USER" ? (
                    !submission || submission.attempts < quiz.num_attempts ? (
                        <div className="text-center mt-3">
                            <Link to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/active`}>
                                <button
                                    type="button"
                                    className="btn btn-danger btn-lg"
                                    onClick={handleButtonClick}
                                >
                                    Take Quiz
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="text-center mt-3">
                            <button
                                type="button"
                                className="btn btn-secondary btn-lg"
                                disabled
                            >
                                No more attempts available
                            </button>
                        </div>
                    )
                ) : null // Render nothing if role is "FACULTY"
            }
            <hr></hr>
            {submission && (
                <GradedQuiz
                    quiz={quiz}
                    submission={submission} />
            )}
        </div>
    );
}