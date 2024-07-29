import { IoEnterOutline } from "react-icons/io5";
import * as db from "../../Database"
import { useParams } from "react-router";

export default function StudentGrades() {
    const { cid } = useParams();
    const assignments = db.assignments.filter((a) => a.course === cid);
    const enrollments = db.enrollments.filter((e) => e.course === cid);
    const usersFinder = enrollments.map((e) => db.users.find((u) => u._id === e.user));
    const users = usersFinder ? usersFinder : [];
    const grades = db.grades;
    return (
        <div className="row">
            <div id="wd-student-grade-tables">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover text-center table-striped">
                        <thead>
                            <tr>
                                <th><b>Student Name</b></th>
                                {assignments.map((a) =>
                                    <th>{a.title}<br></br>Out of {a.points}pts</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u) =>
                                <tr>
                                    <td className="text-danger">{u?.firstName} {u?.lastName}  </td>
                                    {assignments.map((a) => 
                                    <td>
                                        {grades.find( (g) => g.student === u?._id && g.assignment === a._id)?.grade}
                                    </td>)
                                    }
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
} 