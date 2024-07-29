import "./index.css";
import { useParams, useLocation } from "react-router";

export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades","People"];
  const { cid } = useParams();
  const pathname = useLocation().pathname.split("/");
  const active_loc = pathname[pathname.length - 1]
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((section) => <a id={`wd-course-${section}-link`} href={`#/Kanbas/Courses/${cid}/${section}`}
        className={`list-group-item border border-0 ${(active_loc === section) ? 'active' : 'text-danger'}`}> {section}</a>)
      }
    </div >
  );
}