import React, { EventHandler, useState } from 'react';

import MultipleChoice from './QuizEdits/QuestionTypes/MultipleChoice';
import MultipleChoiceEditor from './QuizEdits/QuestionTypes/MultipleChoiceEditor';

import FillInTheBlank from './QuizEdits/QuestionTypes/FillInTheBlank';
import FillInTheBlankEditor from './QuizEdits/QuestionTypes/FillInTheBlankEditor';

import TrueOrFalse from './QuizEdits/QuestionTypes/TrueOrFalse';
import TrueOrFalseEditor from './QuizEdits/QuestionTypes/TrueOrFalseEditor';

import { deleteQuiz } from './client';
import { FaPencil } from 'react-icons/fa6';




function Question({
  question,
  index,
  updateQuestion,
  deleteQuestion
}: {
  question: any;
  index: number;
  updateQuestion: (question: any, index: number) => void;
  deleteQuestion: (index: number) => void;
}) {

  const [editing, setEditing] = useState(false);
  const [tempQuestion, setTempQuestion] = useState(question);

  return (
    <div className="container">
      {editing && tempQuestion.type === "multiple_choice" && (
        <MultipleChoiceEditor
          tempQuestion={tempQuestion}
          setTempQuestion={setTempQuestion}
        />
      )}
      {editing && tempQuestion.type === "fill_in_blank" && (
        <FillInTheBlankEditor
          tempQuestion={tempQuestion}
          setTempQuestion={setTempQuestion}
        />
      )}
      {editing && tempQuestion.type === "true_false" && (
        <TrueOrFalseEditor
          tempQuestion={tempQuestion}
          setTempQuestion={setTempQuestion}
        />
      )}
      {!editing && question.type === "multiple_choice" && (
        <MultipleChoice
          question={question} />
      )}
      {!editing && question.type === "fill_in_blank" && (
        <FillInTheBlank
          question={question} />
      )}
      {!editing && question.type === "true_false" && (
        <TrueOrFalse
          question={question} />
      )}
      {!editing && (
        <div className='float-end'>
          <button onClick={(e) => setEditing(!editing)} className=' btn btn-secondary me-3'>
            Edit
          </button>
          <button onClick={(e) => deleteQuestion(index)} className=' btn btn-danger me-3'>
            Delete
          </button>
        </div>
      )}
      {editing && (
        <div className='float-end'>
          <button onClick={(e) => {
            setEditing(!editing);
            setTempQuestion(question)
          }}
            className=' btn btn-secondary btn-lg me-3'>
            Cancel
          </button>
          <button onClick={(e) => {
            setEditing(!editing);
            updateQuestion(index, tempQuestion)
          }} className=' btn btn-primary btn-lg me-3'>
            Update
          </button>
        </div>
      )}
    </div>


  );
}

export default Question;
