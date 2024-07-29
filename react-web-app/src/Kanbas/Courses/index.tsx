import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentsEditor from "./Assignments/AssignmentsEditor.tsx";
import Grades from "./Grades";
import Quizzes from "./Quizzes";
import { Route, Routes, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import MinimizeModule from "./MinimizeModule";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import PeopleTable from "./People/Table";
import QuizCreate from "./Quizzes/QuizCreate";
import QuizDetails from "./Quizzes/QuizDetails";
//comment
export default function Courses({ courses }: { courses: any[]; }) {
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <div className="d-none d-md-block">
        <h2 className="text-danger d-none d-md-block"><FaAlignJustify className="me-4 fs-4 mb-1" />
          {pathname.split("/")[3]}  &gt; {pathname.split("/")[4]}
        </h2>
        <hr />
      </div>
      <MinimizeModule />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentsEditor />} />
            <Route path="Assignments/Add" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/add/*" element={<QuizCreate />} />
            <Route path="Quizzes/:qid/*" element={<QuizDetails />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="People/:uid" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div >

  );
}
