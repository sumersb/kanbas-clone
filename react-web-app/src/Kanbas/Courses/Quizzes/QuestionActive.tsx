import React from 'react';

import MultipleChoice from './QuizEdits/QuestionTypes/MultipleChoice';


import FillInTheBlank from './QuizEdits/QuestionTypes/FillInTheBlank';


import TrueOrFalse from './QuizEdits/QuestionTypes/TrueOrFalse';





export default function QuestionActive({
    question,
    submission,
    setSubmission
}: {
    question: any;
    submission: any;
    setSubmission: (submission: any) => void;
}) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const choice = e.target.value; // Get the selected choice from event target


        if (submission && setSubmission) {
            console.log(question)
            console.log(submission.answers)
            // Check if the question already exists in submission.answers
            const existingAnswer = submission.answers.find((a: any) => a.question_id === question._id);
            console.log("here")
            if (existingAnswer) {
                // Update existing answer
                const updatedAnswers = submission.answers.map((a: any) =>
                    a.question_id === question._id ? { ...a, answer: choice } : a
                );
                setSubmission({ ...submission, answers: updatedAnswers });
            } else {
                // Add new answer
                const newAnswer = {
                    question_id: question._id,
                    answer: choice
                };
                const updatedAnswers = [...submission.answers, newAnswer];
                setSubmission({ ...submission, answers: updatedAnswers });
            }
        }
    }

    return (
        <div className="container">
            {question.type === "multiple_choice" && (
                <MultipleChoice
                    question={question}
                    handleChange={handleChange} />
            )}
            {question.type === "fill_in_blank" && (
                <FillInTheBlank
                    question={question}
                    handleChange={handleChange} />
            )}
            {question.type === "true_false" && (
                <TrueOrFalse
                    question={question}
                    handleChange={handleChange} />
            )}
        </div>
    );
}
