import { title } from "process";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function FillInTheBlankEditor({
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
                        onChange={(e) => setTempQuestion({ ...tempQuestion, points: (e.target.value) })} id="wd-question-points" type="number" className="form-control me-2"></input>
                    <label htmlFor="wd-question-points" className="mt-2 ml-2">pts</label>
                </div>
            </div>
            <div className="mb-3">
                <label className='form-label' htmlFor='wd-tempQuestion-tempQuestion'>Description</label>
                <textarea value={tempQuestion.question}
                    onChange={(e) => {
                        setTempQuestion({ ...tempQuestion, question: e.target.value })
                    }} className="form-control" rows={5} id="wd-tempQuestion-tempQuestion" ></textarea>
            </div>
            <hr></hr>
            <div>
                {tempQuestion.answers.map((a: any, i: number) => (
                    <div className="input-group mb-3">
                        <div className="input-group-prepend bg-secondary">
                            <span className="input-group-text bg=secondary" id="inputGroup-sizing-default">Answer</span>
                        </div>
                        <input type="text" value={a}
                            onChange={(e) => setTempQuestion({ ...tempQuestion, answers: tempQuestion.answers.map((x: any, index: number) => (index === i ? e.target.value : x)) })}
                            className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                        <button
                            onClick={() => setTempQuestion({ ...tempQuestion, answers: tempQuestion.answers.filter((x: any, index: number) => (index !== i)) })}
                            className="btn btn-danger">
                            <FaTrash />
                        </button>
                    </div>
                ))}
                <button onClick={(e) => setTempQuestion({ ...tempQuestion, answers: [...tempQuestion.answers, ""] })} className="btn btn-primary"> Add Answer</button>
            </div>
            <hr></hr>
        </div>
    )
}