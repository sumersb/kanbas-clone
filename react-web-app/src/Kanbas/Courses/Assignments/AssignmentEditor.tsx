import "./index.css"
import { useParams } from "react-router";
import { useState } from "react";
import { addAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";

export default function AssignmentEditor() {

    const { cid } = useParams();
    const dispatch = useDispatch();
    
    const [assignment, setAssignment] = useState({
        "title": "New Assignment",
        "description": "New Assignment Description",
        "available-from": "0003-03-03",
        "available-until": "0001-01-01",
        "due-date": "0002-02-02",
        "points": "100"
    })

    const createAssignment = async (assignment: any) => {
        const newAssignment = await client.createAssignment(cid as string, assignment);
        dispatch(addAssignment(newAssignment));
    };

    return (
        <div id="wd-assignments-editor">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">
                    Assignment Name</label>
                <input type="text" className="form-control"
                    id="wd-name" placeholder={`${assignment.title}`}
                    value={assignment.title}
                    onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
            </div>
            <textarea id="wd-description" value={assignment.description} className="form-control mb-4"
                onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} rows={5} />
            <div className="mb-3 row">
                <label htmlFor="wd-points"
                    className="col-sm-2 col-form-label text-end">
                    Points
                </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                        id="wd-points" value={assignment.points}
                        onChange={(e) => setAssignment({ ...assignment, points: e.target.value })} />
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
                            <label htmlFor="wd-due-date" className="form-label"><b>Due</b></label>
                            <input className="form-control" id='wd-due-date' type='date'
                                value={assignment["due-date"]}
                                onChange={(e) => setAssignment({ ...assignment, "due-date": e.target.value })}></input>
                        </div>
                        <div>
                            <div className="row pb-3">
                                <div className="form-group col-md-6">
                                    <label htmlFor="wd-available-from" className="form-label"><b>Available from</b></label>
                                    <input className="form-control" id="wd-available-from" type='date'
                                        value={assignment["available-from"]}
                                        onChange={(e) => setAssignment({ ...assignment, "available-from": e.target.value })} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="wd-available-until" className="form-label"><b>Available Until</b></label>
                                    <input className="form-control" id="wd-available-until" type='date'
                                        value={assignment["available-until"]}
                                        onChange={(e) => setAssignment({ ...assignment, "available-until": e.target.value })} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div>
                <a href={`#/Kanbas/Courses/${cid}/Assignments`}>
                    <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end"
                        onClick={() => createAssignment( assignment)} >
                        Save
                    </button>
                    <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
                        Cancel
                    </button>
                </a>
            </div>
        </div>
    );
}

