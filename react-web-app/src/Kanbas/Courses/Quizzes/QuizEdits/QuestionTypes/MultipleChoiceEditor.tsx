import { title } from "process";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function MultipleChoiceEditor({
    tempQuestion,
    setTempQuestion

}: {
    tempQuestion: any;
    setTempQuestion: (question: any) => void;
}) {
    return (
        <div className="container p-3">
            <div className="row align-items-center mb-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        id="title"
                        placeholder="tempQuestion Title"
                        value={tempQuestion.title}
                        onChange={(e) => setTempQuestion({ ...tempQuestion, title: e.target.value })}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        onChange={(e) => setTempQuestion({ ...tempQuestion, type: e.target.value })}
                        name="tempQuestion"
                        value={tempQuestion.type}
                    >
                        <option value="multiple_choice">Multiple Choice</option>
                        <option value="true_false">True or False</option>
                        <option value="fill_in_blank">Fill in the blank</option>
                    </select>
                </div>
                <div className="col-md-2 float-end d-inline-flex">

                    <input value={tempQuestion.points}
                    onChange={(e) => setTempQuestion({...tempQuestion, points: (e.target.value)})} id="wd-question-points" type="number" className="form-control me-2"></input>
                    <label htmlFor="wd-question-points" className="mt-2 ml-2">pts</label>
                </div>
            </div>
            <div className="mb-3">
                <label className='form-label' htmlFor='wd-tempQuestion-tempQuestion'>Description</label>
                <textarea value={tempQuestion.question}
                onChange={(e) => {
                    setTempQuestion({...tempQuestion,question: e.target.value})
                }} className="form-control" rows={5} id="wd-tempQuestion-tempQuestion" ></textarea>
            </div>
            <hr></hr>
            <div>
                {tempQuestion.choices.map((c: any, i: number) => (
                    <div className="input-group mb-3">
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input" />
                        </div>
                        <input value={c}
                            onChange={(e) => setTempQuestion({ ...tempQuestion, choices: tempQuestion.choices.map((x: any, index: number) => (index === i ? e.target.value : x)) })} type="text" className="form-control" aria-label="Text input with radio button" />
                        <button
                            onClick={() => setTempQuestion({ ...tempQuestion, choices: tempQuestion.choices.filter((x: any, index: number) => (index !== i)) })}
                            className="btn btn-danger">
                            <FaTrash />
                        </button>
                    </div>
                ))}
                <button onClick={(e) => setTempQuestion({ ...tempQuestion, choices: [...tempQuestion.choices, ""] })} className="btn btn-primary"> Add Choice</button>
            </div>
            <hr></hr>
            <div className="col-md-12 d-inline-flex">
                <label htmlFor="wd-question-answer" className="mt-2 me-2">Answer</label>
                <input value={tempQuestion.answer}
                onChange={(e) => setTempQuestion({...tempQuestion, answers: [e.target.value]})} id="wd-question-answer"  className="form-control me-2"></input>
            </div>
            <hr></hr>
        </div>
    )
}