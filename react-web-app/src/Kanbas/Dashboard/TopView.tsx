import { useNavigate } from "react-router";
export default function TopView(
    { profile, course, setCourse, addNewCourse, updateCourse }: {
        profile: any;
        course: any;
        setCourse: (course: any) => void;
        addNewCourse: () => void;
        updateCourse: () => void;
    }
) {
    const navigate = useNavigate();
    return (
        <div>
            {(profile.role == 'FACULTY' || profile.role == 'ADMIN') ? (
                <div>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse} > Add </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>

                    </h5><br />
                    <input value={course.name} className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <textarea value={course.description} className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    <hr />
                </div>
            ) : (
                <div>
                    <h5 className="d-inline-block mb-2">Add Courses </h5>
                    <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={
                            () => navigate("/Kanbas/Enrollments")
                        } > Enroll </button>
                    <hr />
                </div>
            )}
        </div>
    )

}