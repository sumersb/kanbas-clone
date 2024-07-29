import GradedQuestion from "./GradedQuestion";

export default function GradedQuiz({ quiz, submission }: {
    quiz: any;
    submission: any;
}) {

    return (

        <div className="ml-3">
            <br />
            <br />

            <div className="container p-5">
                <div className="row justify-content-center">
                    <div className="mb-3 row">

                        <hr></hr>
                        <div className="col-sm-3 col-form-label">
                            <h5><b>Latest Attempt</b></h5>
                        </div>
                        <div className="col-sm-3 col-form-label">
                        <h5><b>Score: {submission.score} out of {quiz.points}</b></h5>
                        </div>
                        <hr></hr>
                    </div>
                    {quiz.questions.map((q: any, i: number) => {
                        // Find the matching answer for the current question
                        const matchingAnswer = submission.answers.find((a: any) => a.question_id === q._id);

                        return (
                            <div key={i} className="card bg-white m-5 p-0 pb-5" style={{ width: "100%" }}>
                                <GradedQuestion
                                    question={q}
                                    submission={submission}
                                    answer={matchingAnswer}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>


        </div>
    )
}