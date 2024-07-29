import GradeControls from "./GradeControls";
import StudentAssignmentSearch from "./StudentAssignmentSearch";
import StudentGrades from "./StudentGrades";

export default function Grades() {
    return (
        <div>
            <GradeControls />
            <StudentAssignmentSearch />
            <StudentGrades/>
        </div>
    )
}