import Details from "./SearchEdit";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import * as client from "./client";
import * as USER_API from "../../Account/client"
import { FaRocket } from "react-icons/fa";
import QuizControlButtons from "./QuizControlButtons";
import SearchEdit from "./SearchEdit";

export default function Quizzes() {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const navigate = useNavigate();
    const { cid } = useParams();

    const [quizzes, setQuizzes] = useState<any[]>([]);
    const [role, setRole] = useState("USER");
    const [name, setName] = useState("");

    const fetchProfile = async () => {
        try {
            const account = await USER_API.profile();
            setRole(account.role);
        } catch (err: any) {
            navigate("/Kanbas/Account/Signin");
        }
    };

    const fetchQuizzes = async () => {
        const q = await client.findQuizByCourseID(cid as string);
        setQuizzes(q);
    };
    useEffect(() => {
        fetchQuizzes();
        fetchProfile();
    }, []);

    const deleteQuiz = async (quizID: string) => {
        await client.deleteQuiz(quizID);
        setQuizzes(quizzes.filter((q) => q._id != quizID));
    }

    const updateQuiz = async (updatedQuiz: any) => {
        await client.updateQuiz(updatedQuiz);
        setQuizzes(
            quizzes.map((c) => {
                if (c._id === updatedQuiz._id) {
                    return updatedQuiz;
                } else {
                    return c;
                }
            })
        );
    };
    const filterQuizzesByName = async (name: string) => {
        setName(name);
        if (name) {
            const quizzes = await client.findQuizzesByPartialName(name);
            setQuizzes(quizzes);
        } else {
            fetchQuizzes();
        }
    };

    const getDateFormat = (quiz: any) => {
        const availableDate = new Date(quiz.available);
        const availableUntil = new Date(quiz.until);
        const currentDate = new Date();

        if (currentDate > availableUntil) {
            return <span className="text-secondary">Closed</span>;
        } else if (currentDate >= availableDate && currentDate <= availableUntil) {
            return <span className="text-success">Available</span>;
        } else if (currentDate < availableDate) {
            const availMonth = months[availableDate.getMonth()];
            const availDay = availableDate.getDate();
            const availYear = availableDate.getFullYear();
            return (
                <span>
                    Not available until {availMonth} {availDay}, {availYear}
                </span>
            );
        }
        return "Here"; // Handle any other cases as needed
    };
    const getDueFormat = (date: any) => {
        const due = new Date(date);
        const month = months[due.getMonth()];
        const day = due.getDate();
        return (
            <span>
                {month} {day} at 11:59pm
            </span>
        );
    }
    return (<div id="wd-assignments">
        <SearchEdit filterQuizzesByName={filterQuizzesByName} role={role} />
        <br></br><br></br>
        <ul id="wd-assignment-list" className="list-group rounded-0">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <span className="fs-3">Quizzes</span>
                </div>
                <ul className="wd-lessons list-group rounded-0">
                    {quizzes
                        .map((quiz: any) => {
                            return (
                                <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                                    <div className="float-start">
                                        <FaRocket className="me-4 fs-3 text-success" />
                                    </div>
                                    <p className="flex-grow-1">
                                        {role === 'USER' || role === 'STUDENT' ? (
                                            quiz.published ? (
                                                <a className="text-decoration-none text-dark fw-bold wd-quiz-link"
                                                    href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}>
                                                    {quiz.title}
                                                </a>
                                            ) : (
                                                <span className="text-dark fw-bold wd-quiz-link">{quiz.title}</span>
                                            )
                                        ) : (
                                            <a className="text-decoration-none text-dark fw-bold wd-quiz-link"
                                                href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}>
                                                {quiz.title}
                                            </a>
                                        )}
                                        <br></br>
                                        {getDateFormat(quiz)} | <b>Due </b>{getDueFormat(quiz.due)} | {quiz.points} pts | {quiz.questions.length} questions
                                    </p>
                                    <QuizControlButtons
                                        quiz={quiz}
                                        updateQuiz={updateQuiz}
                                        deleteQuiz={deleteQuiz}
                                        role={role}
                                    />
                                </li>
                            )
                        })}
                </ul>
            </li>
        </ul>
    </div>
    )
}