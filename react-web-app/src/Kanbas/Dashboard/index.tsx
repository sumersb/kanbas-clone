import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userAPI from "../Account/client";
import * as courseAPI from "../Courses/client"
import * as enrollmentAPI from "../Enrollment/client";
import TopView from "./TopView";
export default function Dashboard(
) {
    const navigate = useNavigate();
    const [profile, setProfile] = useState<any>({ role: null });
    const [courses, setCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({
        name: "New Course",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });
    const fetchInfo = async () => {
        try {
            const classes = await courseAPI.fetchStudentCourses();
            setCourses(classes);
            const account = await userAPI.profile();
            setProfile(account);
        } catch (err: any) {
            navigate("/Kanbas/profile/SignIn");
        }
    };
    useEffect(() => {
        fetchInfo();
    }, []);

    const addNewCourse = async () => {
        const newCourse = await courseAPI.createCourse(course);
        console.log(newCourse);
        setCourses([...courses, newCourse]);
        navigate("/Kanbas/Dashboard");
    };

    const deleteCourse = async (courseId: string) => {
        await courseAPI.deleteCourse(courseId);
        setCourses(courses.filter(
            (c) => c._id !== courseId));
    };

    const updateCourse = async () => {
        await courseAPI.updateCourse(course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    const deleteEnrollment = async (courseId: string) => {
        await enrollmentAPI.deleteEnrollment(courseId);
        setCourses(courses.filter((c) => c._id !== courseId));
    };


    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <TopView
                profile={profile}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                updateCourse={updateCourse} />

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((c) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <Link to={`/Kanbas/Courses/${c.number}/Home`} className="text-decoration-none" >
                                <div className="card rounded-3 overflow-hidden">
                                    <img src={c.image} style={{ height: 160 }} />
                                    <div className="card-body">
                                        <span className="wd-dashboard-course-link"
                                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                                            {c.name}
                                        </span>
                                        <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                                            {c.description}
                                        </p>
                                        {(profile.role == 'FACULTY' || profile.role == 'ADMIN') ? (<div>
                                            <Link to={`/Kanbas/Courses/${c.number}/Home`} className="btn btn-primary">Go</Link>
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(c._id);
                                            }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                                Delete
                                            </button>
                                            <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(c);
                                                }}
                                                className="btn btn-warning me-2 float-end" >
                                                Edit
                                            </button>
                                        </div>) : (
                                            <div>
                                                <Link to={`/Kanbas/Courses/${c.number}/Home`} className="btn btn-primary">Go</Link>
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteEnrollment(c._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Drop
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

