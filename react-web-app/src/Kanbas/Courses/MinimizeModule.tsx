import { FaAlignJustify } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineInbox } from "react-icons/md";
import { CiBeaker1 } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { MdOutlineViewModule } from "react-icons/md";
import { MdForum } from "react-icons/md";
import { MdOutlineVideoCall } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { MdOutlineQuiz } from "react-icons/md";
import { MdGrade } from "react-icons/md";










export default function MinimizeModule() {
    return (
        <div className="row bg-dark d-block d-md-none align-items-center">
            <div className="dropdown d-inline me-1">
                <button id="wd-kanbas-nav-drop-down" className="btn btn-lg dropdown-toggle"
                    type="button" data-bs-toggle="dropdown">
                    <FaAlignJustify className="text-white" />
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#/Kanbas/Dashboard">
                            <AiOutlineDashboard className="fs-1 text-danger mr-3" />
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a id="wd-publish-modules-only-button" className="dropdown-item" href="#/Kanbas/Account">
                            <FaRegCircleUser className="fs-1 text-danger mr-3" />
                            Account
                        </a>
                    </li>
                    <li>
                        <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#/Kanbas/Courses">
                            <LiaBookSolid className="fs-1 text-danger mr-3" />
                            Courses
                        </a>
                    </li>
                    <li>
                        <a id="wd-unpublish-modules-only" className="dropdown-item" href="#/Kanbas/Calendar">
                            <CiCalendar className="fs-1 text-danger mr-3" />
                            Calendar
                        </a>
                    </li>
                    <li>
                        <a id="wd-unpublish-modules-only" className="dropdown-item" href="#/Labs">
                            <CiBeaker1 className="fs-1 text-danger mr-3" />
                            Labs
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-white text-center me-1 d-inline">
                <div>
                    <h2 className="d-inline mb-0">Course 1234</h2>
                    <br />
                    <span>Modules</span>
                </div>
            </div>
            <div className="dropdown d-inline me-1">
                <button id="wd-kanbas-nav-drop-down" className="btn btn-lg dropdown-toggle"
                    type="button" data-bs-toggle="dropdown">
                    <RiArrowDropDownLine className="text-white" />
                </button>
                <ul className="dropdown-menu w-100">
                    <li><a id="wd-course-home-link" href="#/Kanbas/Courses/1234/Home"
                        className="list-group-item active border border-0">
                        <CiHome className="fs-1 text-danger mr-3" />
                        Home </a></li>
                    <li><a id="wd-course-modules-link" href="#/Kanbas/Courses/1234/Modules"
                        className="list-group-item text-danger border border-0">
                        <MdOutlineViewModule className="fs-1 text-danger mr-3" />
                        Modules </a></li>
                    <li><a id="wd-course-piazza-link" href="#/Kanbas/Courses/1234/Piazza"
                        className="list-group-item text-danger border border-0">
                        <MdForum className="fs-1 text-danger mr-3" />
                        Piazza </a></li>
                    <li><a id="wd-course-zoom-link" href="#/Kanbas/Courses/1234/Zoom"
                        className="list-group-item text-danger border border-0">
                        <MdOutlineVideoCall className="fs-1 text-danger mr-3" />
                        Zoom </a></li>
                    <li><a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments"
                        className="list-group-item text-danger border border-0">
                        <MdAssignment className="fs-1 text-danger mr-3" />
                        Assignments </a></li>
                    <li><a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes"
                        className="list-group-item text-danger border border-0">
                        <MdOutlineQuiz className="fs-1 text-danger mr-3" />
                        Quizzes </a></li>
                    <li><a id="wd-course-grades-link" href="#/Kanbas/Courses/1234/Grades"
                        className="list-group-item text-danger border border-0">
                        <MdGrade className="fs-1 text-danger mr-3" />
                        Grades </a></li>
                </ul>
            </div>
        </div>


    );
}
{/* <div>
<div className="dropdown d-inline me-1">
    <button id="wd-kanbas-nav-drop-down" className="btn btn-lg dropdown-toggle"
        type="button" data-bs-toggle="dropdown">
        <FaAlignJustify className="text-white" />
    </button>
    <ul className="dropdown-menu">
    </ul>
</div>
</div>
<div>
</div>
<div>
<div className="dropdown d-inline me-1">
    <button id="wd-kanbas-nav-drop-down" className="btn btn-lg dropdown-toggle"
        type="button" data-bs-toggle="dropdown">
        <FaAlignJustify className="text-white" />
    </button>
    <ul className="dropdown-menu">
    </ul>
</div>
</div> */}