import React from 'react';

import MultipleChoice from './QuizEdits/QuestionTypes/MultipleChoice';


import FillInTheBlank from './QuizEdits/QuestionTypes/FillInTheBlank';


import TrueOrFalse from './QuizEdits/QuestionTypes/TrueOrFalse';





export default function GradedQuestion({
    question,
    submission,
    answer
}: {
    question: any;
    submission: any;
    answer: any
}) {

    const getAnswerString = () => {
        if (answer) {
            return answer.answer
        }
        return ""
    }

    return (
        <div className="container">
            {question.type === "multiple_choice" && (
                <MultipleChoice
                    question={question}
                    grading={true}
                    answer={getAnswerString()}
                />
            )}
            {question.type === "fill_in_blank" && (
                <FillInTheBlank
                    question={question}
                    grading={true}
                    answer={getAnswerString()}

                />
            )}
            {question.type === "true_false" && (
                <TrueOrFalse
                    question={question}
                    grading={true}
                    answer={getAnswerString()}
                />
            )}
        </div>
    );
}
