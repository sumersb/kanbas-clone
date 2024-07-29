
import * as client from "./client";
import QuestionActive from "./QuestionActive";
import { useNavigate, useParams } from "react-router";

export default function QuizActive({ quiz, submission, setSubmission, postSubmission }: {
    quiz: any;
    submission: any;
    setSubmission: (submission: any) => void;
    postSubmission: () => void;
}) {

    const { cid, qid } = useParams();
    const navigate = useNavigate();

    return (

        <div className="ml-3">
            <br />
            <br />

            <div className="container p-5">
                <div className="row justify-content-center">
                    <div>
                        <h1><b>Quiz Instructions</b></h1>
                        <h5>quiz.description</h5>
                    </div>
                    {quiz.questions.map((q: any, i: number) => (
                        <div className="card bg-white m-5 p-0 pb-5" style={{ width: "100%" }}>
                            <QuestionActive
                                question={q}
                                submission={submission}
                                setSubmission={setSubmission}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={postSubmission} className="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
            </div>


        </div>
    )
}