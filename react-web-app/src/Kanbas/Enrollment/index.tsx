import * as userAPI from "../Account/client";
import * as courseAPI from "../Courses/client"
import * as enrollmentAPI from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
export default function Enrollment() {
    const navigate = useNavigate();
    const [profile, setProfile] = useState<any>({ role: null });
    const [courses, setCourses] = useState<any[]>([]);
    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
    const fetchInfo = async () => {
        try {
            const classes = await courseAPI.findNewCourses();
            setCourses(classes);
            const account = await userAPI.profile();
            setProfile(account);
        } catch (err: any) {
        }
    };
    useEffect(() => {
        fetchInfo();
    }, []);

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const courseId = event.target.value;
        if (event.target.checked) {
            setSelectedCourses([...selectedCourses, courseId]);
        } else {
            setSelectedCourses(selectedCourses.filter(id => id !== courseId));
        }
    }
    const enrollCourses = async () => {
        try {
            const classes = await enrollmentAPI.createEnrollment(selectedCourses);
            navigate("/Kanbas/Dashboard");
        } catch (err: any) {
            navigate("/Kanbas/Dashboard");
        }
    };


    return (
        <div>
            <h1>Enrollment</h1>
            <hr></hr>
            <form>
                <div className="form-group">
                    {/* {courses.map(course => (
                        <div className="form-check border mb-3" key={course._id}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={course._id}
                                id={course._id}
                                onChange={handleClick}
                            />
                            <label className="form-check-label" htmlFor={course._id}>
                                {course.name} : {course.description} : {course._id}
                            </label>
                        </div>
                    ))} */}
                    <div className="row">
                        {courses.map(course => (
                            <div key={course._id} className="col-md-4 mb-3">
                                <div className={`card ${selectedCourses.includes(course._id) ? 'bg-primary text-white' : ''}`}>
                                    <div className="card-body">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={course._id}
                                            id={course._id}
                                            onChange={handleClick}
                                        />
                                        <label className="form-check-label" htmlFor={course._id}>
                                            <h5 className="card-title">{course.name}</h5>
                                            <p className="card-text">{course.description}</p>
                                            <p className="card-text"><small className="text-muted">Course ID: {course._id}</small></p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button onClick={() => enrollCourses()} className="btn btn-primary">Enroll</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}