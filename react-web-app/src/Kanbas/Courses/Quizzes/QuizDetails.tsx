import { Link, useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import QuizDetailsNav from "./Navs/QuizDetailsNav";
import * as client from "./client";
import QuizActive from "./QuizActive";
import QuizPreview from "./QuizPreview";
import QuizzesEditor from "./QuizzesEditor";
import * as USER_API from "../../Account/client"
import { Navigate } from "react-router-dom";


export default function QuizDetails() {

    const navigate = useNavigate();
    const { cid, qid } = useParams();
    const baseSubmission = {
        _id: null,
        quiz_id: qid,
        answers: [],
        attempts: 0,
        score: 0
    }
    const [submission, setSubmission] = useState(baseSubmission);

    const [originalSubmission, setOriginalSubmission] = useState<any>();


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
        time_limit: 0,
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

    const [role, setRole] = useState("USER");

    const fetchProfile = async () => {
        try {
            const account = await USER_API.profile();
            setRole(account.role);
        } catch (err: any) {
            navigate("/Kanbas/Account/Signin");
        }
    };

    const calculateScore = () => {
        let score = 0
        quiz.questions.forEach((q: any) => {
            const matchingAnswer : any = submission.answers.find((a: any) => a.question_id === q._id);
            if (matchingAnswer && q.answers.includes(matchingAnswer.answer)) {score += q.points}
        })
        return score;
    }
    const postSubmission = async () => {
        const score = calculateScore();
        const finalsubmission = {...submission, score: score, attempts : submission.attempts+1};
        let new_submission;
        if (submission._id) {
            new_submission = await client.updateSubmission(finalsubmission);
            setOriginalSubmission(finalsubmission)
        } else {
            new_submission = await client.createSubmission(finalsubmission);
            setOriginalSubmission({ ...new_submission });
            console.log(new_submission)
        }
        setSubmission({ ...baseSubmission, _id: new_submission._id })
        navigate(`/kanbas/courses/${cid}/Quizzes/${qid}`);
    };

    const fetchSubmission = async () => {
        const fetchedSubmission = await client.findSubmissionByQuizID(qid as string);
        if (fetchedSubmission) {
            setSubmission({ ...submission, _id: fetchedSubmission._id });
            setOriginalSubmission(fetchedSubmission);
        }
    }
    const fetchQuiz = async () => {
        const fetchedQuiz = await client.findQuizByID(qid as string)
        setQuiz(fetchedQuiz);
    }

    useEffect(() => {
        fetchQuiz();
        fetchSubmission();
        fetchProfile();
    }, []);


    return (
        <div>
            {role === "FACULTY" || role === "ADMIN" && (
                <QuizDetailsNav />
            )}
            <hr></hr>
            <Routes>
                <Route path="/" element={<Navigate to="Details" />} />
                <Route path="Details" element={<QuizPreview
                    quiz={quiz}
                    submission={originalSubmission}
                    role={role}
                     />} />
                <Route path="Active" element={<QuizActive
                    quiz={quiz}
                    submission={submission}
                    postSubmission={postSubmission}
                    setSubmission={setSubmission} />} />
                <Route path="edit/*" element={<QuizzesEditor />} />
            </Routes>
        </div>
    );
}