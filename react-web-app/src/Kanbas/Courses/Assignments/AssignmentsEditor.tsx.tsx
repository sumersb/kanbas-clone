import "./index.css"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { setAssignment, updateAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";


export default function AssignmentsEditor() {

    const dispatch = useDispatch();
    const { aid, cid } = useParams();
    const { assignment } = useSelector((state: any) => state.assignmentsReducer)

    const [temporaryAssignment, setTemporaryAssignment] = useState(assignment);

    const fetchAssignment = async () => {
        const fetchedAssignment = await client.findAssignment(cid as string, aid as string);
        dispatch(setAssignment(fetchedAssignment));
    };

    useEffect(() => {
        fetchAssignment();
    }, []);

    useEffect(() => {
        setTemporaryAssignment(assignment);
    }, [assignment]);


    const saveAssignment = async (assignment: any) => {
        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    return (
        <div id="wd-assignments-editor">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">
                    Assignment Name</label>
                <input type="text" className="form-control"
                    id="wd-name" placeholder={`${assignment.title}`}
                    value={temporaryAssignment.title}
                    onChange={(e) => setTemporaryAssignment({ ...temporaryAssignment, title: e.target.value })} />
            </div>
            <textarea id="wd-description" value={temporaryAssignment.description} className="form-control mb-4"
                onChange={(e) => setTemporaryAssignment({ ...temporaryAssignment, description: e.target.value })} rows={5} />
            <div className="mb-3 row">
                <label htmlFor="wd-points"
                    className="col-sm-2 col-form-label text-end">
                    Points
                </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                        id="wd-points" value={temporaryAssignment.points}
                        onChange={(e) => setTemporaryAssignment({ ...temporaryAssignment, points: e.target.value })} />
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
                                value={temporaryAssignment["due-date"]}
                                onChange={(e) => setTemporaryAssignment({ ...temporaryAssignment, "due-date": e.target.value })}></input>
                        </div>
                        <div>
                            <div className="row pb-3">
                                <div className="form-group col-md-6">
                                    <label htmlFor="wd-available-from" className="form-label"><b>Available from</b></label>
                                    <input className="form-control" id="wd-available-from" type='date'
                                        value={temporaryAssignment["available-from"]}
                                        onChange={(e) => setTemporaryAssignment({ ...temporaryAssignment, "available-from": e.target.value })} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="wd-available-until" className="form-label"><b>Available Until</b></label>
                                    <input className="form-control" id="wd-available-until" type='date'
                                        value={temporaryAssignment["available-until"]}
                                        onChange={(e) => setTemporaryAssignment({ ...temporaryAssignment, "available-until": e.target.value })} />
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
                        onClick={() => saveAssignment(temporaryAssignment)} >
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
