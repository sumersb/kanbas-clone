import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    assignments: [],
    assignment: {
        "_id": "A303",
        "title": "Test",
        "course": "Test",
        "available-from": "2025-05-20",
        "due-date": "2025-05-27",
        "points": "100"
    }
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignment: (state, action) => {
            state.assignment = action.payload; // Set fetched assignment
        },
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, { payload: assigment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                "title": assigment.title,
                "course": assigment.course,
                "description": assigment.description,
                "available-from": assigment["available-from"],
                "available-until": assigment["available-until"],
                "due-date": assigment["due-date"],
                "points": assigment.points
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentID);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },
        editAssignment: (state, { payload: assignmentID }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentID ? { ...a, editing: true } : a
            ) as any;
        },
    },
});
export const { setAssignment, setAssignments,addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;

// "_id": "A1",
//         "title": "New Assignment",
//         "course": "RS101",
//         "description": "New Assignment Description",
//         "available-from": "03-03-0003",
//         "available-until": "01-01-0001",
//         "due-date": "02-02-0002",
//         "points": "100"