import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as client from "./client";
import { Routes, Route } from "react-router";
import QuizQuestions from "./QuizQuestions";
import QuizDetailsEditor from "./QuizDetailsEditor";
import QuizCreateNav from "./Navs/QuizCreateNav";

export default function QuizCreate() {

    const { cid } = useParams();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState({
        title: 'Unnamed Quiz',
        published: false,
        course_id: cid,
        instructions: '',
        type: 'GRADED QUIZ',
        points: 100,
        assignment_group: 'QUIZZES',
        shuffle_answers: true,
        has_time_limit: false,
        time_limit: 20,
        multiple_attempts: false,
        num_attempts: 1,
        show_answers: false,
        access_code: '',
        one_question_view: true,
        webcam: false,
        lock_questions: false,
        due: '',
        available: '',
        until: '',
        assign: 'EVERYONE',
        questions: []
    });

    const [questions, setQuestions] = useState([]);

    const calculateScore = async () => {
        let tempscore = 0
        questions.forEach((q: any) => {
            tempscore+=q.points;
        })
        return tempscore
    }


    const saveAndPublish = async () => {
        console.log("Here")
        const score = await calculateScore();
        console.log(score);
        const updatedQuiz = { ...quiz, questions: questions, published: true, points: score };
        const newQuiz = await client.createQuiz(updatedQuiz);
        setQuiz(newQuiz);
        navigate(`/Kanbas/Courses/${cid}/Quizzes`)
    }

    const setUp = async () => {
        setQuiz(quiz);
        setQuestions(quiz.questions);
    }

    useEffect(() => {
        setUp();
    }, []);

    return (
        <div>
            <QuizCreateNav />
            <Routes>
                <Route path="Details" element={<QuizDetailsEditor quiz={quiz} setQuiz={setQuiz} />} />
                <Route path="Questions" element={<QuizQuestions quiz={quiz} setQuiz={setQuiz} questions={questions} setQuestions={setQuestions} />} />
            </Routes>

            <div>

                <button onClick={saveAndPublish} id="wd-add-quiz-btn" className="btn btn-lg btn-danger me-1 float-end"
                >
                    Save and Publish
                </button>
                <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
                    Cancel
                </button>
            </div>
            <hr></hr>
        </div>
    )
}