import { useState } from "react";
import Question from "./Question";

export default function QuizQuestions({ quiz, setQuiz, questions, setQuestions }: {
    quiz: any;
    setQuiz: (quiz: any) => void;
    questions: any;
    setQuestions: (questions: any) => void;
}) {

    const [question, setQuestion] = useState({
        type: 'multiple_choice',
        title: 'Unnamed Question',
        question: "Consequatur unde ducimus, tempore commodi quae ad blanditiis, vitae earum dolores autem reprehenderit, aspernatur nam! Non nulla omnis impedit veniam recusandae. Repudiandae fuga tempora omnis ea ducimus unde qui delectus saepe quidem expedita suscipit hic, reiciendis ex, rerum voluptatibus consequatur iste voluptate beatae a amet voluptates sapiente cupiditate ratione? Aspernatur, hic.",
        points: 10,
        choices: ["Black", "White", "Purple"],
        answers: ["Default Answer"]
    });

    const addQuestions = () => {
        setQuestions([...questions, question]);
    }

    const updateQuestion = (index: number, updatedQuestion: any) => {
        const updatedQuestions = questions.map((q: any, i: number) => (i === index ? updatedQuestion : q));
        setQuestions(updatedQuestions);
    };

    const deleteQuestion = (index: number) => {
        const updatedQuestions = questions.filter((q: any, i: number) => i !== index);
        setQuestions(updatedQuestions);
    };


    return (

        <div className="ml-3">
            <br />
            <br />

            <div className="container p-5">
                <div className="row justify-content-center">
                    {questions.map((q: any, i: number) => (
                        <div className="card bg-white m-5 p-0 pb-5" style={{ width: "100%" }}>
                            <Question
                                question={q}
                                index={i}
                                updateQuestion={updateQuestion}
                                deleteQuestion={deleteQuestion}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addQuestions} className="btn btn-primary btn-lg btn-block">Add Question</button>
                </div>
            </div>


        </div>
    )
}