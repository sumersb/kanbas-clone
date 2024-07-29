

export default function QuizDetailsEditor({ quiz, setQuiz }: {
    quiz: any;
    setQuiz: (quiz: any) => void;
}) {
    return (
        <div className="ml-3">
            <div id="wd-assignments-editor">
                <div className="mb-3">
                    <input type="text" className="form-control"
                        id="wd-name" placeholder={`${quiz.title}`}
                        value={quiz.title}
                        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })} />
                </div>
                <label htmlFor="wd-description"> Quiz Instructions</label>
                <textarea id="wd-description" value={quiz.instructions} className="form-control mb-4"
                    onChange={(e) => setQuiz({ ...quiz, instructions: e.target.value })} rows={5} />
                <div className="mb-3 row">
                    <label htmlFor="wd-group"
                        className="col-sm-2 col-form-label text-end">
                        Quiz Type
                    </label>
                    <div className="col-sm-10">
                        <select id="wd-quiz-type" value={quiz.type} className="form-select"
                            onChange={(e) => setQuiz({ ...quiz, type: e.target.value })}>
                            <option value="GRADED QUIZ" >Graded Quiz</option>
                            <option value="PRACTICE QUIZ" >Practice Quiz</option>
                            <option value="UNGRADED QUIZ" >Ungraded Quiz</option>
                            <option value="GRADED SURVEY" >Graded Survey</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-group"
                        className="col-sm-2 col-form-label text-end">
                        Assignment Group
                    </label>
                    <div className="col-sm-10">
                        <select id="wd-quiz-type" value={quiz.assignment_group} className="form-select"
                            onChange={(e) => setQuiz({ ...quiz, assignment_group: e.target.value })}>
                            <option value="EXAMS" >Exams</option>
                            <option value="ASSIGNMENTS" >Assignments</option>
                            <option value="PROJECT" >Project</option>
                            <option value="QUIZZES" >Quizzes</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-access-code"
                        className="col-sm-2 col-form-label text-end">
                        Access Code
                    </label>
                    <div className="col-sm-10">
                        <input type="text" id="wd-quiz-type" value={quiz.access_code} className="form-select"
                            onChange={(e) => setQuiz({ ...quiz, access_code: e.target.value })}>
                        </input>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-assign-to"
                        className="col-sm-2 col-form-label text-end">
                        Options
                    </label>
                    <div className="col-sm-10">
                        <div className="border p-2 pt-3">
                            <div className="flex-grow-1 mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={quiz.shuffle_answers}
                                        onChange={(e) => { setQuiz({ ...quiz, shuffle_answers: e.target.checked }) }} id="wd-shuffle-answers" />
                                    <label className="form-check-label" htmlFor="wd-shuffle-answers">
                                        Shuffle Answers
                                    </label>
                                </div>
                            </div>
                            <div className="row pb-3">
                                <div className="form-group col-md-6">
                                    <input className="form-check-input" type="checkbox" value={quiz.multiple_attempts}
                                        onChange={(e) => { setQuiz({ ...quiz, multiple_attempts: e.target.checked }) }}
                                        id="wd-quiz-multiple-attempts" />
                                    <label className="form-check-label ms-2" htmlFor="wd-quiz-multiple-attempts">
                                        Allow Multiple Attempts
                                    </label>
                                </div>
                                {quiz.multiple_attempts && (
                                    <div className="form-group col-md-6">
                                        <label className="form-label" htmlFor="wd-quiz-num-attempts">
                                            Attempts
                                        </label>
                                        <input className="form-control" type="number" value={quiz.num_attempts}
                                            onChange={(e) => { setQuiz({ ...quiz, num_attempts: e.target.value }) }}
                                            id="wd-quiz-num-attempts" />
                                    </div>
                                )}
                            </div>
                            <div className="row pb-3">
                                <div className="form-group col-md-6">
                                    <input className="form-check-input" type="checkbox" value={quiz.has_time_limit}
                                        onChange={(e) => { setQuiz({ ...quiz, has_time_limit: e.target.checked }) }}
                                        id="wd-quiz-has-time-limit" />
                                    <label className="form-check-label ms-2" htmlFor="wd-quiz-has-time-limit">
                                        Time Limit
                                    </label>
                                </div>
                                {quiz.has_time_limit && (
                                    <div className="form-group col-md-6">
                                        <label className="form-label" htmlFor="wd-quiz-time-limit">
                                            Time (minutes)
                                        </label>
                                        <input className="form-control" type="number" value={quiz.time_limit}
                                            onChange={(e) => { setQuiz({ ...quiz, time_limit: e.target.value }) }}
                                            id="wd-quiz-time-limit" />
                                    </div>
                                )}
                            </div>

                            <div className="flex-grow-1 mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={quiz.show_answers}
                                        onChange={(e) => { setQuiz({ ...quiz, show_answers: e.target.checked }) }} id="wd-show-answers" />
                                    <label className="form-check-label" htmlFor="wd-show-answers">
                                        Show Answers
                                    </label>
                                </div>
                            </div>

                            <div className="flex-grow-1 mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={quiz.webcam}
                                        onChange={(e) => { setQuiz({ ...quiz, webcam: e.target.checked }) }} id="wd-webcam" />
                                    <label className="form-check-label" htmlFor="wd-webcam">
                                        Require Webcam
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="wd-assign-to"
                        className="col-sm-2 col-form-label text-end">
                        Assign
                    </label>
                    <div className="col-sm-10">
                        <div className="border p-2">
                            <div className="flex-grow-1 mb-3">
                                <label htmlFor="wd-assign" className="form-label"><b>Assign to</b></label>
                                <select className="form-control" id='wd-assign'
                                    value={quiz.assign}
                                    onChange={(e) => setQuiz({ ...quiz, assign: e.target.value })}>
                                    <option value="EVERYONE"> Everyone</option>
                                </select>
                            </div>
                            <div className="flex-grow-1 mb-3">
                                <label htmlFor="wd-due-date" className="form-label"><b>Due</b></label>
                                <input className="form-control" id='wd-due-date' type='date'
                                    value={quiz.due}
                                    onChange={(e) => setQuiz({ ...quiz, due: e.target.value })}></input>
                            </div>
                            <div>
                                <div className="row pb-3">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="wd-available" className="form-label"><b>Available from</b></label>
                                        <input className="form-control" id="wd-available" type='date'
                                            value={quiz["available"]}
                                            onChange={(e) => setQuiz({ ...quiz, available: e.target.value })} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="wd-until" className="form-label"><b>Available Until</b></label>
                                        <input className="form-control" id="wd-until" type='date'
                                            value={quiz["until"]}
                                            onChange={(e) => setQuiz({ ...quiz, until: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <hr></hr>
                
            </div>
        </div>
    );
}